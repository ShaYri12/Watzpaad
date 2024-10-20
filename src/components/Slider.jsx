import React, { useRef, useState } from "react";

const Slider = () => {
  const thumbRef = useRef(null);
  const sliderRef = useRef(null);
  const [thumbPosition, setThumbPosition] = useState(0); // State to manage thumb position

  const updateSlider = (left) => {
    setThumbPosition(left); // Update the thumb position in state
    const activeWidth = left + thumbRef.current.offsetWidth / 2;
    sliderRef.current.style.setProperty("--active-width", `${activeWidth}px`);
  };

  const handleMouseMove = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const maxLeft = sliderRect.width - thumbRef.current.offsetWidth;

    // Calculate the left position of the thumb
    let left =
      event.clientX - sliderRect.left - thumbRef.current.offsetWidth / 2;
    left = Math.max(0, Math.min(maxLeft, left)); // Constrain to slider bounds

    updateSlider(left); // Update the slider position
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent text selection
    handleMouseMove(e); // Update position immediately on mousedown

    // Add event listeners for mousemove and mouseup
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTrackClick = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const left = e.clientX - sliderRect.left - thumbRef.current.offsetWidth / 2;

    // Update the position based on the click
    updateSlider(
      Math.max(
        0,
        Math.min(left, sliderRect.width - thumbRef.current.offsetWidth)
      )
    );
  };

  return (
    <div className="flex justify-center items-center bg-gray-800 mt-5">
      <div className="relative w-full" onMouseDown={handleTrackClick}>
        <div className="relative h-2 bg-gray-600 rounded-full">
          <div
            ref={sliderRef}
            className="w-full absolute h-full bg-cyan-500 rounded-l-full transition-all duration-300"
            style={{ width: "var(--active-width, 0)" }} // Dynamic width for active track
          />
        </div>
        <div
          ref={thumbRef}
          onMouseDown={handleMouseDown}
          className="absolute w-6 h-6 bg-cyan-500 rounded-full border-2 border-white shadow-lg cursor-pointer"
          style={{ left: `${thumbPosition}px`, top: "-7px" }} // Use state for position
        />
      </div>
    </div>
  );
};

export default Slider;
