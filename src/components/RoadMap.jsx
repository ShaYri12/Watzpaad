import React from "react";

const RoadMap = () => {
    const phases = [
        {
          title: 'PHASE 1',
          date: 'Q3 2024',
          description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
        },
        {
          title: 'PHASE 2',
          date: 'Q4 2024',
          description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
        },
        {
          title: 'PHASE 3',
          date: 'Q1 2025',
          description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
        },
        {
          title: 'PHASE 4',
          date: 'Q3 2025',
          description: 'Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.',
        },
      ];
  return (
    <div className="px-4 mt-10 py-10">
      <div className="max-w-[1280px] m-auto w-full">
        <h1 className="text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[500px] mx-auto text-center">
          Road Map
        </h1>
        <p className="text-white text-[18px] leading-[24px] font-space font-light text-center max-w-[769px] mx-auto mt-6">Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. </p>
        <div className="mt-[60px]">
       
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
