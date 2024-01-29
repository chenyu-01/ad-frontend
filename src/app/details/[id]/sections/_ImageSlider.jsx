import React, { useState } from "react";
import Image from "next/image";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      {/* Display the current image */}
      {images[currentIndex] && (
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={500}
          height={300}
          objectFit="cover"
        />
      )}

      {/* Previous button */}
      <button
        onClick={goToPrevious}
        aria-label="Previous"
        className="absolute left-0"
      >
        {"<"}
      </button>

      {/* Next button */}
      <button onClick={goToNext} aria-label="Next" className="absolute right-0">
        {">"}
      </button>
    </div>
  );
}
