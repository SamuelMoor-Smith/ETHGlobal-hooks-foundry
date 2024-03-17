// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract TokenSale {
    IERC20 public stablePoint; // The ERC20 token you are selling
    IERC20 public usdc; // The USDC contract
    address public owner;
    uint256 public rate; // Number of tokens a buyer gets per USDC, considering USDC has 6 decimals

    constructor(address _stablePoint, address _usdc, uint256 _rate) {
        stablePoint = IERC20(_stablePoint);
        usdc = IERC20(_usdc);
        owner = msg.sender;
        rate = _rate;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Function for users to buy tokens
    function buyTokens(uint256 usdcAmount) external {
        uint256 tokenAmount = usdcAmount * rate;
        require(stablePoint.balanceOf(address(this)) >= tokenAmount, "Insufficient tokens in contract");

        usdc.transferFrom(msg.sender, address(this), usdcAmount);
        stablePoint.transfer(msg.sender, tokenAmount);
    }

    // Allow the owner to withdraw USDC from the contract
    function withdrawUSDC(uint256 amount) external onlyOwner {
        require(usdc.balanceOf(address(this)) >= amount, "Insufficient USDC balance");
        usdc.transfer(owner, amount);
    }

    // Allow the owner to withdraw the selling token from the contract
    function withdrawstablePoint(uint256 amount) external onlyOwner {
        require(stablePoint.balanceOf(address(this)) >= amount, "Insufficient token balance");
        stablePoint.transfer(owner, amount);
    }

    // Function for the owner to update the rate
    function setRate(uint256 newRate) external onlyOwner {
        rate = newRate;
    }
}

