import React, { useState } from "react";

export default function IDOStaking() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 text-gray-100 min-h-screen">
      <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">
            Stake For IDO Participation
          </h2>
          <p className="text-sm mb-4">
            Once staked, you need to register for every IDO, so we can calculate
            the guaranteed allocation. Once registered, we lock your tokens, but
            you still can participate in other IDOs.
          </p>
          <div className="space-y-2 mb-4">
            <p>Level: none</p>
            <p>Staked:</p>
            <p>0 MAP</p>
            <p>Your tokens are unlocked</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <p className="mb-2">Balance: 0 MAP</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="0"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Max
                </button>
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-2">Balance: 0 MAP</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="0"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded">
                  Max
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 px-4 rounded">
              Approve
            </button>
            <button className="w-full bg-transparent hover:bg-gray-700 text-white font-bold py-3 px-4 rounded border border-gray-600">
              Unstake
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">$MAP Levels</h2>
          <p className="text-sm mb-4">
            To be eligible for any of the tiers you are required to stake the
            following:
          </p>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <span className="text-teal-400">MAP Of $200</span> for chance (10%
              lottery) 5 days
            </li>
            <li>
              <span className="text-teal-400">MAP Of $500</span> for prospect
              (25% lottery) 5 days
            </li>
            <li>
              <span className="text-teal-400">MAP Of $1000</span> for affiliate
              (50% lottery) 5 days
            </li>
            <li>
              <span className="text-teal-400">MAP Of $2000</span> for member 5
              days
            </li>
            <li>
              <span className="text-teal-400">MAP Of $5000</span> for club 5
              days
            </li>
            <li>
              <span className="text-teal-400">MAP Of $10000</span> for associate
              5 days
            </li>
          </ul>
          <p className="text-teal-400 font-semibold mb-4">
            You need to register for an IDO after you staked.
          </p>
          <p className="text-sm mb-4">
            When IDO registration period starts (usually 24h before the IDO
            start), you need to open the Pools page and click the "Register"
            button in the pool card.
          </p>
          <p className="text-sm">
            When you register for an IDO, your level is recorded (for this
            specific IDO). There's no way to change it to a higher level after
            registration. So make sure you are on the level you want before
            registering. You will be able to stake more and register for other
            IDOs with a higher level though.
          </p>
        </div>
      </div>
    </div>
  );
}
