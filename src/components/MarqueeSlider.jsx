// components/Marquee.js
import React from 'react';
import SliderOne from '../assets/slider-one.svg';

const MarqueeSlider = () => {
    return (
        <div className="overflow-hidden my-4">
            <div className="flex items-center whitespace-nowrap animate-marquee">
                <img src={SliderOne} alt="Bitcoinst" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="News BTC" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="Finbold" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="Cryptonews" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="Inside Bitcoins" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="Techopedia" className="h-12 mx-6 inline-block" />
                <img src={SliderOne} alt="News BTC" className="h-12 mx-6 inline-block" /> {/* Repeat for continuous effect */}
            </div>
        </div>
    );
};

export default MarqueeSlider;
