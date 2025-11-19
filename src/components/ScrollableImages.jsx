import React from 'react';

const ScrollableImages = ({ images }) => {
  return (
    <div className="flex overflow-x-auto gap-4 p-4 scrollbar-thin scrollbar-thumb-gray-400">
      {images.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`Slide ${index}`} 
          className="h-64 rounded-lg flex-shrink-0 object-cover"
        />
      ))}
    </div>
  );
};

export default ScrollableImages;
