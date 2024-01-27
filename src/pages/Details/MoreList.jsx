import React from 'react';
import { MoreItem } from './MoreItem';

export function MoreList({ items }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6">MORE</h2>
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