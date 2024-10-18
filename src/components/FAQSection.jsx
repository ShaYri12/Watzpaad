import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqData = [
  {
    question:
      "What is blockboost token?",
    answer:
      "Unique WEB3 Crowdfunding Ecosystem with unique rewards systems.",
  },
  {
    question:
      "Where can I purchase the Blockboost Token and when I will receive it?",
    answer:
      "During the presale you can purchase $BBT tokens from our official website www.blockboost.io you can claim your tokens from presale page after presale ends.",
  },
  {
    question:
      "Will my rewards always paid hourly?",
    answer:
      "Yes, you have to claim the reward from our official dapp via connecting your wallet.",
  },
  {
    question:
      "How can I eligible for the presale rewards?",
    answer:
      "You can get your referral link from presale page and purchase made through it will be auto credited to your account on presale page. You can check it via connecting wallet to presale page.",
  },
  {
    question:
      "How many stage are there in presale?",
    answer:
      "There are 10 stages in presale and the price of $BBT will increase at each stage.",
  },
  {
    question:
      "Is there staking on $BBT and when it will be available to stake?",
    answer:
      "Yes, please see the staking page for complete information on staking pools and rewards.",
  },
];

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-[19px]">
      <button
        className="w-full text-left px-[18.22px] md:px-[48px] py-[16.5px] bg-[#121C29] rounded-[13.34px] flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-teal-500 gap-1"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backdropFilter: "blur(33.34968948364258px)",
        }}
      >
        <span className="text-[#798DA3] md:text-[18px] text-[14.04px]">
          {item.question}
        </span>
        <div
          className={`md:w-[40.95px] md:h-[40.95px] md:min-w-[40.95px] md:min-h-[40.95px] w-[24.07px] h-[24.07px] min-w-[24.07px] min-h-[24.07px] flex items-center justify-center text-[#1D1D23] rounded-[6.02px] md:rounded-[10.24px] ${
            isOpen ? "bg-white" : "bg-primaryColor"
          }`}
        >
          {isOpen ? (
            <FiMinus
              strokeWidth="3px"
              className="md:w-[20px] w-[15px] md:h-[20px] h-[15px]"
            />
          ) : (
            <FiPlus className="md:w-[20px] w-[15px] md:h-[20px] h-[15px]" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="mt-2 px-[50px] py-4 bg-[#1f2c40] rounded-lg text-gray-300 md:text-[16px] text-[14.04px]">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[1150px] mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
