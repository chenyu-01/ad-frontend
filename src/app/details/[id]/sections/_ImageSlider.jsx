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


  const getNextImageIndexes = () => {
    const nextIndexes = [];
    for (let i = 1; i <= 3; i++) {
      let nextIndex = (currentIndex + i) % images.length;
      nextIndexes.push(nextIndex);

      if (nextIndexes.length === images.length - 1) break;
    }
    return nextIndexes;
  };

  return (
    <div className="relative">
      <div className="flex inset-0  items-center justify-center">
      {images[currentIndex] && (
        <div className="relative w-full h-auto items-center justify-center"> 
          <Image
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            layout="responsive"
            width={500}
            height={300}
            objectFit="cover"
            className="block"

          />
          <div className="absolute" style={{ top: '0%', right: '0%' }}>
            <Image
              src="/details/sell.png" 
              alt="sale"
              width={100} 
              height={100} 
              className="block"
            />
          </div>
        </div>
      )}


      </div>

  <div className="relative mt-2">
    {images.length > 1 && (
      <>
        <button
          onClick={goToPrevious}
          aria-label="Previous"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-5"
        >
          <Image
            src="/details/Larrow.png"
            alt="<"
            width={40}
            height={40}
          />
        </button>

        <button
          onClick={goToNext}
          aria-label="Next"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-5" 
        >
          <Image
            src="/details/Rarrow.png"
            alt=">"
            width={40}
            height={40}
          />
        </button>
      </>
    )}

    <div className="flex justify-center space-x-2"> 
      {getNextImageIndexes().map((index) => (
        <Image
          key={index}
          src={images[index]}
          alt={`Thumbnail ${index + 1}`}
          width={100}
          height={60}
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
</div>
  );
}