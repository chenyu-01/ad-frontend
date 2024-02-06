"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { config } from "@/config";
const serverUrl = config.serverUrl;
function SearchProperties() {
  const [searchParams, setSearchParams] = useState({
    lowPrice: 0,
    highPrice: 0,
    town: "",
    roomOne: false,
    roomTwo: false,
    roomThree: false,
    roomFour: false,
  });
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(serverUrl + "/api/property/list/search/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchParams),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      let data = await response.json();
      setProperties(data);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch properties. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="number"
            name="lowPrice"
            value={searchParams.lowPrice}
            onChange={handleChange}
            placeholder="Low Price"
            className="w-full"
          />
          <Input
            type="number"
            name="highPrice"
            value={searchParams.highPrice}
            onChange={handleChange}
            placeholder="High Price"
            className="w-full"
          />
          <Input
            type="text"
            name="town"
            value={searchParams.town}
            onChange={handleChange}
            placeholder="Town"
            className="md:col-span-2"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          <Checkbox
            label="1 Room"
            name="roomOne"
            checked={searchParams.roomOne}
            onChange={handleChange}
          />
          <Checkbox
            label="2 Rooms"
            name="roomTwo"
            checked={searchParams.roomTwo}
            onChange={handleChange}
          />
          <Checkbox
            label="3 Rooms"
            name="roomThree"
            checked={searchParams.roomThree}
            onChange={handleChange}
          />
          <Checkbox
            label="4 Rooms"
            name="roomFour"
            checked={searchParams.roomFour}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
          {isLoading ? <Spinner size="sm" /> : "Search"}
        </Button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="space-y-2">
        {properties &&
          properties.map((property, index) => (
            <div key={index} className="p-4 shadow rounded-lg">
              <p>
                {property.title} - {property.price}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default SearchProperties;

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
