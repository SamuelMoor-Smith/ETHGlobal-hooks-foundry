"use client";

import { useState } from "react";

export default function RemoveLiquidity() {
  const [progress, setProgress] = useState(50); // Example progress state

  // Function to handle progress change
  const handleProgressChange = (value: any) => {
    setProgress(value);
    // ... other actions
  };

  // This example uses static data for display purposes
  const myLiquidityCoins = [
    { symbol: 'ATOM', imgSrc: '/path-to-atom-image.png' },
    { symbol: 'OSMO', imgSrc: '/path-to-osmo-image.png' },
  ];

  return (
    <div className="card card-bordered bg-base-100 shadow-xl mx-auto p-4">
      <div className="card-body">
        <div className="text-center flex space-x-2 justify-center">
          <div className="text-secondary">{myLiquidityCoins[0].symbol}</div>
          <div className="text-secondary">/</div>
          <div className="text-secondary">{myLiquidityCoins[1].symbol}</div>
        </div>
        <div className="text-center my-4">
          <span className="text-lg font-semibold">$</span>
          <span className="text-5xl font-semibold">0.193</span>
        </div>
        <div className="text-center my-4">
          <span>0.193033 pool shares</span>
        </div>
        <div className="flex justify-center my-6">
          <img src={myLiquidityCoins[0].imgSrc} className="h-6 w-6" />
          <span className="text-secondary font-semibold mx-4">0.011111</span>
          <span className="text-secondary">{myLiquidityCoins[0].symbol}</span>
        </div>
        <div className="flex justify-center my-6">
          <img src={myLiquidityCoins[1].imgSrc} className="h-6 w-6" />
          <span className="text-secondary font-semibold mx-4">0.20827</span>
          <span className="text-secondary">{myLiquidityCoins[1].symbol}</span>
        </div>
        {/* DaisyUI Progress bar */}
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div className="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: `${progress}%` }}> </div>
        </div>
        {/* Percentage Buttons */}
        <div className="flex justify-center space-x-4 my-4">
          {[25, 50, 75, 100].map((value) => (
            <button
              key={value}
              className={`btn btn-xs btn-ghost ${progress === value ? 'btn-active' : ''}`}
              onClick={() => handleProgressChange(value)}
            >
              {value}%
            </button>
          ))}
        </div>
        {/* Remove Liquidity Button */}
        <div className="text-center my-4">
          <button className="btn btn-wide btn-primary">Remove Liquidity</button>
        </div>
      </div>
    </div>
  );
}
