import React from 'react';
import  MoreItem  from './sections/_MoreItem';

export default function MoreList({ items }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {items.map(item => (
          <MoreItem
            key={item.id}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}