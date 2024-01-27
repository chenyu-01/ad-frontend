import React from 'react';
import Image from 'next/image';

function MoreItem({ imageUrl, name, price, description }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <Image
        src={imageUrl}
        alt={name}
        width={150} 
        height={150} 
        objectFit="cover" 
      />
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <p className="text-gray-500">{price}</p>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}