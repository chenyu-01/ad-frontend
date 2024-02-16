import { config } from "@/config";
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function MoreItem( {itemId } ) {
  const [item, setItem] = useState(null);
  const serverUrl = config.serverUrl;

  useEffect(() => {
    fetch(serverUrl + `/api/property/details/${itemId}`)
      .then((response) => response.json())
      .then((responseData) => {
        setItem(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  , [itemId]);

  return item && (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <Link href={`/details/${itemId}`} passHref>
      <Image
        src={item.imageUrl}
        alt={item.streetName}
        width={150}
        height={150}
        objectFit="cover"
      />
      </Link>
      <h3 className="text-lg font-bold mt-2">{item.streetName}</h3>
      <p className="text-gray-500">$ {item.price}</p>
      <p className="text-sm text-gray-600 mt-1">{item.town}</p>
    </div>
  );
}
