import React, { useState } from "react";

export default function IDOStaking() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  const handleMaxStake = () => {
    // Set the max stakable amount (for demo, let's assume it's 100 BBT )
    setStakeAmount("100");
  };

  const handleMaxUnstake = () => {
    // Set the max unstakable amount (for demo, let's assume it's 50 BBT )
    setUnstakeAmount("50");
  };

  return (
    <div className="flex flex-col md:flex-row gap-[31px] text-white mx-auto max-w-[1280px]">
      <div className="card-border md:w-1/2 w-full bg-[#1F2835CC]">
        <div className="rounded-[13.34px] overflow-hidden md:px-[29px] px-[9px] py-[24px] relative z-[2]">
          <h2 className=" capitalize text-[20.28px] md:text-[24px] font-[700] md:mb-[14px] mb-[22px]">
            Stake for IDO Participation
          </h2>
          <p className="text-[13.52px] md:text-[16px] mb-[18px]">
            Once staked, you need to register for every IDO, so we can calculate
            the guaranteed allocation. Once registered, we lock your tokens, but
            you still can participate in other IDOs.
          </p>
          <p className="text-[13.52px] md:text-[16px] mb-[25px] md:mb-[32px] flex flex-col">
            <span>Level: none</span>
            <span>Staked:</span>
            <span>0 BBT </span>
            <span>Your tokens are unlocked</span>
          </p>
          {/* Input sections */}
          <div className="flex justify-between gap-[13px] flex-wrap">
            {/* Stake Input */}
            <div className="relative flex-1 bg-[#121C29] px-[14px] md:px-[16px] py-[12px] rounded-lg flex items-center border border-primaryColor text-[11.83px] md:text-[14px] justify-between">
              <div className="flex gap-[4px] md:gap-[6px] items-center">
                Balance:
                <input
                  type="number"
                  className="bg-transparent text-right text-white w-[35px] md:w-[40px] outline-none"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="0"
                />
                BBT
              </div>
              <div className="flex md:gap-[12px] gap-[10px] items-center">
                <button
                  className="bg-primaryColor px-[16px] py-[5px] rounded-[5px] text-black"
                  onClick={handleMaxStake}
                >
                  Max
                </button>
                <span className="text-white">BBT </span>
              </div>
            </div>

            {/* Unstake Input */}
            <div className="relative flex-1 bg-[#121C29] px-[14px] md:px-[16px] py-[12px] rounded-lg flex items-center border border-primaryColor text-[11.83px] md:text-[14px] justify-between">
              <div className="flex gap-[4px] md:gap-[6px] items-center">
                Balance:
                <input
                  type="number"
                  className="bg-transparent text-right text-white w-[35px] md:w-[40px] outline-none"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                  placeholder="0"
                />
                BBT
              </div>
              <div className="flex gap-[12px] items-center">
                <button
                  className="bg-primaryColor px-[16px] py-[5px] rounded-[5px] text-black"
                  onClick={handleMaxUnstake}
                >
                  Max
                </button>
                <span className="text-white">BBT </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[13px] mt-[15px] flex-wrap">
            <button className="flex-grow bg-primaryColor hover:bg-teal-300 min-w-[235px] text-[19px] md:text-[24px] transition text-black py-[11px] px-4 rounded-full">
              Approve
            </button>
            <button className="flex-grow bg-transparent hover:bg-gray-700 text-white min-w-[235px] text-[19px] md:text-[24px] transition py-[11px] px-4 rounded-full border border-white">
              Unstake
            </button>
          </div>
        </div>
      </div>
      <div className="card-border md:w-1/2 w-full bg-[#1F2835CC]">
        <div className="rounded-[13.34px] overflow-hidden md:px-[29px] px-[9px] py-[24px] relative z-[2]">
          <h2 className="text-[20.28px] md:text-[24px] font-[700] md:mb-[14px] mb-[22px]">
            $BBT Levels
          </h2>
          <p className="text-[13.68px] md:text-[16px] mb-[25px]">
            To be eligible for any of the tiers you are required to stake the
            following:
          </p>
          <ul className="text-[13.68px] md:text-[16px] mb-[25px]">
            <li>
              <span className="text-primaryColor font-[700]">BBT Of $200</span>{" "}
              for chance (10% lottery) 5 days
            </li>
            <li>
              <span className="text-primaryColor font-[700]">BBT Of $500</span>{" "}
              for prospect (25% lottery) 5 days
            </li>
            <li>
              <span className="text-primaryColor font-[700]">BBT Of $1000</span>{" "}
              for affiliate (50% lottery) 5 days
            </li>
            <li>
              <span className="text-primaryColor font-[700]">BBT Of $2000</span>{" "}
              for member 5 days
            </li>
            <li>
              <span className="text-primaryColor font-[700]">BBT Of $5000</span>{" "}
              for club 5 days
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                BBT Of $10000
              </span>{" "}
              for associate 5 days
            </li>
          </ul>
          <p className="text-primaryColor text-[13.68px] md:text-[16px] font-[700] mb-[5px]">
            You need to register for an IDO after you staked.
          </p>
          <p className="text-[11.97px] md:text-[14px] mb-4">
            When IDO registration period starts (usually 24h before the IDO
            start), you need to open the Pools page and click the "Register"
            button in the pool card.
          </p>
          <p className="text-[11.97px] md:text-[14px]">
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
