'use client';

import React from "react";

// Mock props for demonstration
const props = {
  poolAssets: [
    {
      imgSrc: "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
      symbol: "ATOM",
      denom: "Cosmos Hub",
      priceDisplayAmount: 8.35,
      available: 15.868,
      name: "ATOM",
    },
    {
      available: 57.61,
      name: "Osmosis",
      symbol: "OSMO",
      denom: "Osmosis",
      imgSrc: "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
      priceDisplayAmount: 0.4671,
    },
  ],
  onAddLiquidity: () => {
    console.log("Add liquidity clicked");
  },
};

const TokenInput = ({ symbol, tokenIcon, available }: { symbol: string; tokenIcon: string; available: number }) => (
  <div className="form-control w-full">
    <div className="flex justify-between items-center mb-2 w-full">
      <div className="flex items-center gap-2">
        <img src={tokenIcon} alt={symbol} className="w-10 h-10" />
        <label className="label cursor-pointer">
          <span className="label-text">{symbol}</span>
        </label>
        <input type="number" placeholder="0.0" className="input input-bordered w-full" min="0" />
      </div>
      <span className="text-xs text-gray-500">Available: {available}</span>
    </div>
  </div>
);

export const AddLiquidity = () => {
  return (
    <div className="card w-7/12 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Add Liquidity</h2>
        <div className="space-y-4">
          {props.poolAssets.map((asset, index) => (
            <TokenInput key={index} symbol={asset.symbol} tokenIcon={asset.imgSrc} available={asset.available} />
          ))}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={props.onAddLiquidity}>
            Add liquidity
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLiquidity;
