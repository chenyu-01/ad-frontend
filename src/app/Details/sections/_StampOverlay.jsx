import React from 'react';

const StampOverlay = ({ imageSrc, stampType }) => {
  const stampSrcMap = {
    sale: '/detail/path-to-for-sale-stamp.png', 
    rent: '/detail/path-to-for-rent-stamp.png',
   
  };

  return (
    <div className="relative">
      <img src={imageSrc} alt="Property" className="w-full" />
      <img
        src={stampSrcMap[stampType]}
        alt={stampType}
        className="absolute top-0 right-0 m-2" // Adjust margins as needed
        style={{ width: '100px' }} // Adjust width as needed
      />
    </div>
  );
};

export default StampOverlay;