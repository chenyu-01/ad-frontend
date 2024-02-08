"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center bg-white p-4 md:p-8">
      <div className="text-3xl md:text-4xl font-semibold mb-8">
        Popular Collection
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Replace src paths with your actual image paths */}
        <Card
          onClick={() => router.push("/details/1")}
          src="hou1.jpeg"
          alt="Outram Park Sale"
          caption="Outram Park Sale $800k"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="hou2.jpeg"
          alt="Lakeside Sale"
          caption="Lakeside Sale $680k"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="hou3.jpeg"
          alt="Jurong West Rent"
          caption="Jurong West Rent $2000"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="dream.jpg"
          alt="Jurong West Sale"
          caption="Jurong West Sale $770k"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="pic2.jpeg"
          alt="Buona Vista Sale"
          caption="Buona Vista Sale $900k"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="pic3.jpeg"
          alt="Pasir Ris Rent"
          caption="Pasir Ris Rent $1800"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="pic4.jpeg"
          alt="Ang Mo Kio Sale"
          caption="Ang Mo Kio Sale $750k"
        />
        <Card
          onClick={() => router.push("/details/1")}
          src="pic6.avif"
          alt="Clementi Rent"
          caption="Clementi Rent $2200"
        />
      </div>
    </div>
  );
}


function Card({ onClick, src, alt, caption }) {
  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto md:max-w-full md:max-h-full rounded-lg"
        style={{ width: "300px", height: "200px" }} // Set a fixed size for the images
      />
      <div className="text-xl md:text-2xl font-semibold text-center mt-2">
        {caption}
      </div>
    </div>
  );
}


