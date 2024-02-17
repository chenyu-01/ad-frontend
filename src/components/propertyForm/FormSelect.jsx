"use client";
import { config } from "@/config";
import { set } from "date-fns";
import { useEffect, useState } from "react";
const serverUrl = config.serverUrl;
const FormSelect = ({ name, value, label }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  let fetchurl;
  switch (name) {
    case "town":
      fetchurl = serverUrl + "/api/usersetting/getTownNames";
      // replace town value ' ' with '_'
      value = value.replace(" ", "_");
      break;

    case "flatType":
      fetchurl = serverUrl + "/api/usersetting/getFlatTypes";
      switch (value) {
        case "1 ROOM":
          value = "1_ROOM";
          break;
        case "2 ROOM":
          value = "2_ROOM";
          break;
        case "3 ROOM":
          value = "3_ROOM";
          break;
        case "4 ROOM":
          value = "4_ROOM";
          break;
        case "5 ROOM":
          value = "5_ROOM";
          break;
        case "EXECUTIVE":
          value = "EXECUTIVE";
          break;
        case "MULTI-GENERATION":
          value = "MULTI_GENERATION";
          break;
        default:
          break;
      }
      break;
    case "flatModel":
      switch (value) {
        case "2-room":
          value = "TWO_ROOM";
          break;
        case "3Gen":
          value = "THREE_GEN";
          break;
        default:
          value = value.toUpperCase().replace(" ", "_");
          break;
      }
      fetchurl = serverUrl + "/api/usersetting/getFlatModels";
      break;
    default:
      fetchurl = serverUrl + "/api/usersetting/getPropertyStatus";
      break;
  }
  useEffect(() => {
    fetchOptions(fetchurl).then((data) => {
      setOptions(data);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex justify-between items-center container mx-auto">
      <label
        htmlFor={name}
        className="block text-xl font-medium text-gray-700"
      >{`${label}:`}</label>
      <select
        id={name}
        name={name}
        defaultValue={value}
        className=" w-2/3 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl sm:leading-6"
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="flex items-center ml-3 truncate"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
async function fetchOptions(fetchurl) {
  // fetch data from API
  try {
    // ... fetch data from API ...
    let response = await fetch(fetchurl, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
export default FormSelect;
