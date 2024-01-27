import React from "react";
import Image from "next/image";

export function FloatInfoComponent(props) {
  return (
    <div className="fixed bottom-4 right-4 bg-zinc-300 p-4 rounded-2xl shadow-lg max-w-sm">
      <h2 className="text-slate-900 text-2xl font-bold leading-tight">
        Information
      </h2>
      <div className="my-4 border-t border-black"></div> 
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center">
          <Image
            src="/detailPage/bed.svg"
            alt="Bedroom"
            width={49}
            height={49}
          />
          <span className="text-gray-400 text-xs mt-2">Bedroom</span>
          <span className="text-black text-xl font-medium">2</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/detailPage/bathIcon.svg"
            alt="Bathroom"
            width={53}
            height={53}
          />
          <span className="text-gray-400 text-xs mt-2">Bathroom</span>
          <span className="text-black text-xl font-medium">1</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/detailPage/areaIcon.svg"
            alt="Area"
            width={53}
            height={53}
          />
          <span className="text-gray-400 text-xs mt-2">Area (ft²)</span>
          <span className="text-black text-xl font-medium">100</span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/detailPage/psfIcon.svg"
            alt="Price psf"
            width={49}
            height={49}
          />
          <span className="text-gray-400 text-xs mt-2">Price psf</span>
          <span className="text-black text-xl font-medium">$100</span>
        </div>
      </div>
      {/* buttom add later */}
    </div>
  );
}