"use client";
import { useState } from "react";
import { config } from "@/config";

const serverUrl = config.serverUrl;

function SearchProperties() {
  const [searchParams, setSearchParams] = useState({});
  const [properties, setProperties] = useState([]);
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
    <div className="mt-5 container mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 text-lg "
      >
        <div className="flex justify-between ">
          <label htmlFor="lowPrice" className="whitespace-nowrap">
            Low Price
          </label>
          <input
            type="number"
            min={0}
            name="lowPrice"
            id="lowPrice"
            value={searchParams.lowPrice}
            onChange={handleChange}
            placeholder="Low Price"
            className=" sm:w-4/5 "
          />
        </div>
        <div className="flex  justify-between">
          <label htmlFor="highPrice" className="whitespace-nowrap">
            High Price
          </label>
          <input
            id="highPrice"
            min={0}
            type="number"
            name="highPrice"
            value={searchParams.highPrice}
            onChange={handleChange}
            placeholder="High Price"
            className="sm:w-4/5"
          />
        </div>
        <div className="flex  justify-between">
          <label htmlFor="town" className="">
            Town
          </label>
          <input
            id="town"
            type="text"
            name="town"
            value={searchParams.town}
            onChange={handleChange}
            placeholder="Town"
            className="sm:w-4/5"
            required
          />
        </div>
        <div className="flex  justify-between">
          <label className="whitespace-nowrap">Flat Type</label>
          <div className="flex flex-wrap gap-x-3 justify-between   w-4/5">
            <label className="inline-flex items-center" htmlFor="roomOne">
              1 Room
              <input
                type="checkbox"
                name="roomOne"
                id="roomOne"
                checked={searchParams.roomOne}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="roomTwo" className="inline-flex items-center">
              2 Rooms
              <input
                id="roomTwo"
                type="checkbox"
                name="roomTwo"
                checked={searchParams.roomTwo}
                onChange={handleChange}
              />
            </label>

            <label className="inline-flex items-center" htmlFor="roomThree">
              3 Rooms
              <input
                id="roomThree"
                type="checkbox"
                name="roomThree"
                checked={searchParams.roomThree}
                onChange={handleChange}
                className="form-checkbox"
              />
            </label>
            <label className="inline-flex items-center" htmlFor="roomFour">
              4 Rooms
              <input
                id="roomFour"
                type="checkbox"
                name="roomFour"
                checked={searchParams.roomFour}
                onChange={handleChange}
                className="form-checkbox"
              />
            </label>
          </div>
        </div>
        <button type="submit" className="bg-gray-800 text-white p-2 rounded-lg">
          Search
        </button>
      </form>
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
