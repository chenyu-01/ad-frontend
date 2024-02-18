import React from "react";
import Image from "next/image";
import FloatInfoComponent from "./_FloatInfoComponent";
import ImageSlider from "./sections/_ImageSlider";

export default function HeroComponent(props) {
  //const imageList = ["/pixel-city-1.png", "/pixel-city-2.png"];
    //fortest
  const imageList = [props.ImageUrl,"/pixel-city-1.png", "/pixel-city-2.png"];

  const { type, name, price, ImageUrl, info } = props;
  const TYPE = type === "forRent" ? "Rent" : "Sale";

  return (
    <div className="relative mx-7 my-4 max-w-full">
      <div className="flex justify-start items-center mb-4">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          aria-label="Back"
          className="flex items-center justify-center mr-4"
        >
          <Image
            src="/details/backIcon.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </button>
        {/* Title and Type */}
        <span className="text-lg">{TYPE}</span> {" > "}
        <span className="text-xl font-bold">{name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-[250px] rounded-lg">
          <ImageSlider images={imageList} type={TYPE} />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-6xl font-bold text-zinc-800">{name}</h2>
            <p className="text-red-500 text-6xl font-bold">
              S$ {price} {type === "forRent" && "/mo"}
            </p>
            <div className="p-2 border rounded-full bg-white"></div>
          </div>

          <div className="mt-4">
            <FloatInfoComponent info={info} type={TYPE} price={price} />
          </div>
        </div>
      </div>
    </div>
  );
}
