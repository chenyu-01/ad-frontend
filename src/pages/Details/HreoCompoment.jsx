import React from "react";
import Image from "next/image";
import { FloatInfoComponent } from "./FloatInfoComponent"; 
import { ImageSlider } from '../components/ImageSlider';

export function HeroComponent() {
  return (
    <div className="relative mx-7 my-4 max-w-full">

      <div className="flex justify-between items-center mb-4">
        <button onClick={() => window.history.back()} aria-label="Back" className="flex items-center justify-center">

          <Image
            src="/detailPage/backIcon.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </button>
        <div className="text-xl font-bold">TYPE > NAME</div>
        <div /> 
      </div>

      <div className="flex flex-col items-center w-full md:w-1/2">
        <ImageSlider images={imageList} />
      </div>

      {/* 右边文本信息区 */}
      <div className="w-full md:w-1/2 md:pl-5 mt-4">
        <h2 className="text-6xl font-bold text-zinc-800">NAME</h2>
        <p className="text-red-500 text-6xl font-bold mt-4">
          S$ 0,000
        </p>
        {/* 其他信息 */}
      </div>

      {/* FloatInfoComponent将固定在屏幕右下角 */}
      <FloatInfoComponent />
    </div>
  );
}