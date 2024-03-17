// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vault is Ownable {
    IERC20 public immutable token;

    mapping(address => uint256) public balanceOf;
    mapping(address => bool) public isAuthorizedSlasher;
    mapping(address => mapping(address => uint256)) public slashAllowance;
    mapping(address => uint256) public totalSlashAllowance; // Total slash allowance for each user

    event Slashed(address indexed user, address indexed slasher, uint256 amount);
    event SlasherAuthorized(address indexed slasher);
    event SlasherRevoked(address indexed slasher);
    event SlashAllowanceUpdated(address indexed user, address indexed slasher, uint256 amount);

    address public penaltyWallet; // Wallet to receive slashed tokens


    constructor(address _token, address _penaltyWallet, address initialOwner) Ownable(initialOwner) {
        token = IERC20(_token);
        penaltyWallet = _penaltyWallet; // Set the penalty wallet address
    }

        // Mapping to track the pause end timestamp for updating slash allowances (user => (slasher => timestamp))
    mapping(address => mapping(address => uint256)) private pauseEndTimestamp;

    event SlashAllowanceUpdatePaused(address indexed user, address indexed slasher, uint256 untilTimestamp);

    // Function for a slasher to impose a pause on a user's ability to update their slash allowance
    function imposePauseOnUpdateSlashAllowance(address user, uint256 durationInSeconds) external {
        require(isAuthorizedSlasher[msg.sender], "Caller is not an authorized slasher");
        require(durationInSeconds > 0, "Duration must be positive");

        uint256 pauseUntil = block.timestamp + durationInSeconds;
        pauseEndTimestamp[user][msg.sender] = pauseUntil;

        emit SlashAllowanceUpdatePaused(user, msg.sender, pauseUntil);
    }


    function authorizeSlasher(address _slasher, uint256 _amount) external onlyOwner {
        isAuthorizedSlasher[_slasher] = true;
        emit SlasherAuthorized(_slasher);
        token.approve(_slasher, _amount);

    }

    function revokeSlasher(address _slasher) external onlyOwner {
        isAuthorizedSlasher[_slasher] = false;
        emit SlasherRevoked(_slasher);
        token.approve(_slasher, 0);

    }

    function updateMySlashAllowance(address _slasher, uint256 _newAmount) external {

        require(block.timestamp > pauseEndTimestamp[msg.sender][_slasher], "Updates are paused by this slasher");
        
        uint256 currentAmount = slashAllowance[msg.sender][_slasher];

        if (_newAmount > currentAmount) {
            uint256 increase = _newAmount - currentAmount;
            require(balanceOf[msg.sender] >= totalSlashAllowance[msg.sender] + increase, "Total slash allowance exceeds your balance");
            totalSlashAllowance[msg.sender] += increase;
        } else {
            uint256 decrease = currentAmount - _newAmount;
            totalSlashAllowance[msg.sender] -= decrease; 
        }

        slashAllowance[msg.sender][_slasher] = _newAmount;
        emit SlashAllowanceUpdated(msg.sender, _slasher, _newAmount);
    }


    function getSlasherAllowance(address _user, address _slasher) external view returns (uint256) {
        return slashAllowance[_user][_slasher];
    }

    function slash(address _user, uint256 _amount) external {
        require(isAuthorizedSlasher[msg.sender], "Not authorized to slash");
        require(slashAllowance[_user][msg.sender] >= _amount, "Slashing amount exceeds allowance");
        require(balanceOf[_user] >= _amount, "Insufficient balance to slash");

        slashAllowance[_user][msg.sender] -= _amount;
        totalSlashAllowance[_user] -= _amount; // Reduce the total allowance

        // Transfer the slashed tokens to the penalty wallet instead of burning
        _transferToPenaltyWallet(_user, _amount, msg.sender);

        emit Slashed(_user, msg.sender, _amount);
    }

    function _transferToPenaltyWallet(address _user, uint256 _amount, address _slasher) private {
        // Reduce the user's slash allowance and internal balance by the slashed amount
        balanceOf[_user] -= _amount;

        // Ensure the Vault has enough ERC20 tokens to cover the slash amount
        uint256 vaultTokenBalance = token.balanceOf(address(this));
        require(vaultTokenBalance >= _amount, "Vault does not have enough tokens");

        // Perform the actual token transfer from the Vault to the penalty wallet
        require(token.transfer(penaltyWallet, _amount), "Token transfer to penalty wallet failed");

        // Emit an event to log the slashing and transfer
        emit Slashed(_user, _slasher, _amount);
    }



    function deposit(uint256 _amount) external {
        require(_amount > 0, "Cannot deposit 0 tokens");
        
        balanceOf[msg.sender] += _amount;  // Increase the user's balance directly by the deposited amount
        token.transferFrom(msg.sender, address(this), _amount);  // Transfer the tokens from the user to the contract
    }

    function withdraw(uint256 _amount) external {
        require(_amount > 0, "Cannot withdraw 0 tokens");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");
        
        balanceOf[msg.sender] -= _amount;  // Deduct the withdrawal amount from the user's balance
        token.transfer(msg.sender, _amount);  // Transfer the tokens from the contract to the user
    }


}

