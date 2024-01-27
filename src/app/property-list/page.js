"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function PropertyList() {
  // Assuming 'properties' is the array of property data and 'categories' for the dropdown
  const router = useRouter();

  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Property 1",
      location: "Location 1",
      price: 100000,
      // More property details
    },
    {
      id: 2,
      name: "Property 2",
      location: "Location 2",
      price: 200000,
      // More property details
    },
    {
      id: 3,
      name: "Property 3",
      location: "Location 3",
      price: 300000,
      // More property details
    },
  ]);
  // Handlers for category change and search (to be implemented)
  const handleDetail = (e) => {
    e.preventDefault();
    // Navigate to property detail page
    router.push(`/property/${property.id}`);
  };
  const handleSearch = (e) => {
    /* ... */
  };
  return (
    <div className="container mx-auto p-4">
      <form className="flex justify-between mb-4 items-center">
        <label className="mr-4 flex-shrink-0">Search Property:</label>

        <div className="w-full">
          <input
            type="text"
            placeholder="Search while typing property name"
            className="border border-gray-300 rounded p-2 w-full"
            onChange={handleSearch}
          />
        </div>
      </form>
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Property Name</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Detail</th>
            {/* More columns as needed */}
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td className="border px-4 py-2">{property.name}</td>
              <td className="border px-4 py-2">{property.location}</td>
              <td className="border px-4 py-2">{property.price}</td>
              <td className="border px-4 py-2">
                <button className=" py-2 px-4 rounded" onClick={handleDetail}>
                  Detail
                </button>
              </td>
              {/* More property details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
