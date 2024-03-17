// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IVault {
    function balanceOf(address account) external view returns (uint256);
    function getSlasherAllowance(address _user, address _slasher) external view returns (uint256);
    function slash(address _user, uint256 _amount) external;
    function imposePauseOnUpdateSlashAllowance(address user, uint256 durationInSeconds) external;
}

contract Game {
    IVault public vault;
    uint256 public slashAmount;
    uint256 public constant PAUSE_DURATION = 1 days; // Define the pause duration as 1 day

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

            // If the player loses, impose a pause on updating their slash allowance
            try vault.imposePauseOnUpdateSlashAllowance(msg.sender, PAUSE_DURATION) {
                // If the pause was successfully imposed, emit the game played event
                emit GamePlayed(msg.sender, false, 0);
            } catch {
                // Handle the case where imposing the pause fails, e.g., if the Game contract is not an authorized slasher
                // This can be logged or handled as needed
            }
            
            return "Sorry, you lost this time.";
        }
    }

    // Dummy game logic for demonstration purposes
    function _simulateGameLogic() private view returns (bool) {
        // Simple simulation: players win 50% of the time
        return (block.timestamp % 10) == 0;
    }
}