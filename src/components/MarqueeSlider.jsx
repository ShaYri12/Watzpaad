// components/Marquee.js
import React from 'react';
import SliderOne from '../assets/slider-one.svg';
import SliderTwo from '../assets/slider-two.svg';
import SliderThree from '../assets/slider-three.svg';
import SliderFour from '../assets/slider-four.svg';
import SliderFive from '../assets/slider-five.svg';
import SliderSix from '../assets/slider-six.svg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const MarqueeSlider = () => {
    // Slick slider settings
    const settings = {
        speed: 5000,              // Speed of sliding
        autoplay: true,           // Enable autoplay
        autoplaySpeed: 0,         // Set to 0 for continuous sliding
        centerMode: true,         // Center mode to focus on middle slide
        cssEase: 'linear',        // Linear easing for smooth scroll
        slidesToShow: 1,          // Show 1 slide at a time
        slidesToScroll: 1,        // Scroll 1 slide at a time
        variableWidth: true,      // Dynamic width based on content
        infinite: true,           // Infinite loop
        arrows: false,            // Hide arrows
        buttons: false,           // Hide buttons
        initialSlide: 1           // Start on the second slide
    };
    return (
        <div className="marquee-wrapper overflow-hidden my-4 mt-10">
            <Slider className="slick marquee " {...settings}>
                <img src={SliderOne} alt="Bitcoinst" className=" aspect-auto h-10 mx-6 inline-block" />
                <img src={SliderTwo} alt="News BTC" className="h-10 mx-6 inline-block" />
                <img src={SliderThree} alt="Finbold" className="h-10 mx-6 inline-block" />
                <img src={SliderFour} alt="Cryptonews" className="h-10 mx-6 inline-block" />
                <img src={SliderFive} alt="Inside Bitcoins" className="h-10 mx-6 inline-block" />
                <img src={SliderSix} alt="Techopedia" className="h-10 mx-6 inline-block" />
            </Slider>
        </div>
    );
};

export default MarqueeSlider;
