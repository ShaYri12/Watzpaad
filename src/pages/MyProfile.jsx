"use client";
import { useState } from "react";
import { FaSignOutAlt, FaCopy, FaCheck } from "react-icons/fa";
export default function MyProfile() {
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    });
  };

  const walletAddress = "0x757884044e6df94bab96aba972409317531bef82";
  const referralLink2 = "https://blockboost.io/buyref=4ca5b4d094";
  return (
    <div className="mt-16 lg:mt-4 min-h-screen text-white py-6 w-full max-w-[1280px] mx-auto lg:px-[30px] md:px-[15px] px-[20px]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <button className="flex items-center text-gray-300 hover:text-white">
          Logout <FaSignOutAlt className="ml-2 h-5 w-5" />
        </button>
      </header>

      <div className="bg-[#1F2835CC] rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">$BBT Holdings</span>
          <span className="text-gray-400">Wallet Address</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl sm:text-2xl font-bold">0.00 BBT</span>
          <div className="flex items-center">
            <span className="text-blue-400 mr-2 text-sm text-ellipsis overflow-hidden w-[130px] sm:w-full">
              0x757884044e6df94bab96aba972409317531bef82
            </span>
            <button
              onClick={() => copyToClipboard(walletAddress)}
              className="focus:outline-none"
              aria-label="Copy wallet address"
            >
              {copiedText === walletAddress ? (
                <FaCheck className="h-4 w-4 text-green-400" />
              ) : (
                <FaCopy className="h-4 w-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1F2835CC] rounded-lg p-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">0</h2>
          <p className="text-gray-400">Your Referral</p>
        </div>
        <div className="bg-[#1F2835CC] rounded-lg p-4">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2">0 BlockBoost</h2>
          <p className="text-gray-400">Referral Earning</p>
        </div>
      </div>

      <div className="bg-[#1F2835CC] rounded-lg p-4">
        <h2 className="text-gray-400 mb-2">Referral Link</h2>
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-blue-400 text-sm">
              https://blockboost.io/buyref=4ca5b4d094
            </span>
            <button
              onClick={() => copyToClipboard(referralLink2)}
              className="focus:outline-none"
              aria-label="Copy second referral link"
            >
              {copiedText === referralLink2 ? (
                <FaCheck className="h-4 w-4 text-green-400" />
              ) : (
                <FaCopy className="h-4 w-4 text-gray-400 hover:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
