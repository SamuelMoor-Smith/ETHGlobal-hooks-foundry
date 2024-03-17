// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IVault {
    function balanceOf(address account) external view returns (uint256);
    function getSlasherAllowance(address _user, address _slasher) external view returns (uint256);
    function slash(address _user, uint256 _amount) external;
}

contract Game {
    IVault public vault;
    uint256 public slashAmount;

    event GamePlayed(address indexed player, bool won, uint256 balance);

    constructor(uint256 _slashAmount, address _vaultAddress) {
        slashAmount = _slashAmount; // Set the slash amount based on the token's decimals
        vault = IVault(_vaultAddress);
    }



    function playGame() external returns (string memory) {
        uint256 allowance = vault.getSlasherAllowance(msg.sender, address(this));
        require(allowance >= slashAmount, "Not enough slash allowance to play the game");

        bool won = _simulateGameLogic();

        if (won) {
            uint256 balance = vault.balanceOf(msg.sender);
            emit GamePlayed(msg.sender, true, balance);
            return "Congratulations, you're a winner!";
        } else {
            vault.slash(msg.sender, slashAmount);
            emit GamePlayed(msg.sender, false, 0);
            return "Sorry, you lost this time.";
        }
    }

    // Dummy game logic for demonstration purposes
    function _simulateGameLogic() private view returns (bool) {
        // Simple simulation: players win 50% of the time
        return (block.timestamp % 10) == 0;
    }

    // Helper function removed for brevity
}
