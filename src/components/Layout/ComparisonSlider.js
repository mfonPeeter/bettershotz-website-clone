import { useState, useRef } from 'react';

import firstImage from '../../assets/comparison-slider/image-1.jpg';
import secondImage from '../../assets/comparison-slider/image-2.jpg';

const ComparisonSlider = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const slide = xPosition => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();

    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const handleTouchMove = event => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = event => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div id="themes" className="px-5 -mt-16 mb-8">
      <div
        ref={imageContainer}
        className="relative max-w-[1200px] w-full mx-auto mt-10 select-none"
      >
        <img
          src={firstImage}
          alt="Fashion and lifestyle"
          className="w-full h-full pointer-events-none rounded-lg"
        />
        <img
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src={secondImage}
          alt="Glorious florence"
          className="w-full h-full absolute inset-0 pointer-events-none rounded-lg"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0"
        >
          <div className="relative h-full">
            <div className="absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
            <div
              style={{ touchAction: 'none' }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-12 w-12 -ml-6 -mt-6 border-2 rounded-full bg-blackGray absolute top-1/2 flex items-center justify-center cursor-col-resize"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white rotate-90 transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
