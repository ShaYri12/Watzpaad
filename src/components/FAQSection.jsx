import React, { useState, useEffect } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const FAQItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  // State to store the answer as an array
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    // Check if the answer is an array or a string and set the state accordingly
    if (Array.isArray(item.answer)) {
      setAnswer(item.answer);
    } else {
      setAnswer([item.answer]); // If it's a string, wrap it in an array
    }
  }, [item.answer]);

  return (
    <div className="mb-[19px] max-w-[900px]">
      <button className="card-border-faq w-full p-[2px]">
        <div
          className="w-full text-left px-[18.22px] md:px-[30px] py-[16.5px] bg-[#121C29] rounded-[13.34px] flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-teal-500 gap-1"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backdropFilter: "blur(33.34968948364258px)",
          }}
        >
          <span className="text-grayish md:text-[18px] text-[14.04px]">
            {item.question} {/* Use translation for question */}
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
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="mt-2 px-[50px] py-4 bg-[#1f2c40] rounded-lg text-gray-300 md:text-[16px] text-[14.04px]">
          {answer.map((ans, index) => (
            <div key={index} className="mt-1">
              {ans} {/* Render answer directly */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection({ faqData }) {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[900px] mx-auto">
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
