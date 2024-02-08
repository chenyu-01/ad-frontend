"use client";
import { forwardRef, useState } from "react";
import { config } from "@/config";
import { fetchListByProps } from "@/app/(dashboard)/property-list/fetchListByProps";
import InputLabel from "@/app/(dashboard)/property-list/advanced/InputLabel";
import { number } from "zod";

const serverUrl = config.serverUrl;

const SearchDialogue = forwardRef(function SearchDialogue(props, ref) {
  const [searchParams, setSearchParams] = useState({});
  const [properties, setProperties] = useState([]);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.currentTarget; // destructure the event
    setSearchParams((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? !checked : value, // if type is checkbox, then toggle the value, else set the value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      let response = await fetchListByProps(searchParams);
      let data = await response.json();
      setProperties(data.properties);
      setRecords(data.totalRecords);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <dialog className="mt-5 container mx-auto " ref={ref}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 text-lg "
      >
        <InputLabel
          id={"lowPrice"}
          label={"Low Price"}
          type={number}
          min={0}
          value={searchParams.lowPrice}
          onChange={handleChange}
        />
        <InputLabel
          id={"highPrice"}
          label={"High Price"}
          type={number}
          min={0}
          value={searchParams.highPrice}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <label htmlFor="town" className="hidden sm:block">
            Town
          </label>
          <input
            id="town"
            type="text"
            name="town"
            value={searchParams.town}
            onChange={handleChange}
            placeholder="Town"
            className="sm:w-4/5 "
            required
          />
        </div>
        <div className="flex justify-between">
          <label className="whitespace-nowrap hidden sm:flex">Flat Type</label>
          <div className="flex sm:w-4/5 sm:space-x-5">
            <div className="">
              <label className="items-center" htmlFor="roomOne">
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
            </div>

            <div className=" ">
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
    </dialog>
  );
});

export default SearchDialogue;
