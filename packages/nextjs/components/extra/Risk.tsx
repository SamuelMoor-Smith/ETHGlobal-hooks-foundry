'use client';

import React from 'react';

const Risk = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-64 h-64" src="riskit.webp" alt="Riskit" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Riskit 4 the Biskit</h2>
        <p>When you click on the button you will have a 10% of NOT losing your staked coins.<br/>Do you like a little rush?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Riskit</button>
        </div>
      </div>
    </div>
  );
};

export default Risk;
