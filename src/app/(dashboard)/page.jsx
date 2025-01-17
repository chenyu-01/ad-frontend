"use client";
"use strict";
import * as React from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { config } from "@/config";
import { useEffect, useState } from "react";
import Image from "next/image";

const serverUrl = config.serverUrl;
export default function Dashboard() {
  const { userData } = useContext(AuthContext);
  const customerId = userData?.customerId;
  const [propertyList, setPropertyList] = useState([]);
  const getRecommendedProperties = async (customerId) => {
    try {
      let fetchurl = serverUrl + "/api/property/recommend/" + customerId;
      let response = await fetch(fetchurl);
      let data = await response.json();
      if (response.ok) {
        const list = [];
        for (let i = 0; i < 8; i++) {
          let property = await fetchPropertyDetail(data[i]);
          console.log(property);
          list.push(property);
        }
        setPropertyList(list);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchPropertyDetail = async (propertyId) => {
    try {
      let fetchurl = serverUrl + "/api/property/dashboard/" + propertyId;
      let response = await fetch(fetchurl);
      let data = await response.json();
      data.id = propertyId;
      if (response.ok) {
        return data;
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    console.log(customerId);
    if (customerId) {
      getRecommendedProperties(customerId);
    }
  }, [customerId]);
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="text-3xl md:text-4xl font-semibold mb-8">
        Popular Collection
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[70vh]">
        {propertyList?.map((property, index) => (
          <Card
            key={index}
            src={property.imageUrl}
            alt={property.town}
            caption={property.price}
            propertyId={property.id}
          />
        ))}
      </div>
    </div>
  );
}

// Card component for displaying images with captions
function Card({ src, alt, caption, propertyId }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/details/${propertyId}`);
  };

  return (
    <div
      className="flex flex-col items-center justify-center cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={src}
        alt={alt}
        className="w-full h-auto md:max-w-full md:max-h-full rounded-lg"
        width={300}
        height={200}
      />
      <div className="text-xl md:text-2xl font-semibold text-center mt-2">
        {alt} ${caption}
      </div>
    </div>
  );
}
