import React from "react";
import MoreItem from "./sections/_MoreItem";

export default function MoreList({ items }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((itemKey, index) => (  
          <MoreItem
            key={index}  
            itemId={itemKey}  
          />
        ))}
      </div>
    </div>
  );
}
