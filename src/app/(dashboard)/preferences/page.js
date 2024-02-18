"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import Switchbtn from "@/app/(dashboard)/usersetting/compoents/switchbtn";
import { useRouter } from "next/navigation";
const serverUrl = config.serverUrl;

export default function Preferences() {
  const [enumOptions, setEnumOptions] = useState([]);
  const [preferences, setPreferences] = useState([]);

  const [enumFlatTypes, setEnumFlatTypes] = useState([]);
  const router = useRouter();
  async function fetchPreferences() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getPreferences";
      let response = await fetch(fetchurl, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if(response.ok){
        setPreferences(data);
      }

    } catch (error) {
      window.alert("Please set");
      console.error(error.message);
    }
  }

  async function fetchTownName() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getTownNames";
      let response = await fetch(fetchurl, {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumOptions(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchFlatType() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getFlatTypes";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumFlatTypes(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchTownName();
    fetchFlatType();
    fetchPreferences();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e;
    console.log(name);
    console.log(value);
    console.log(type);
    console.log(checked);
    if (type == "change") {
      const { name, value, type, checked } = e.target;
      setPreferences((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setPreferences((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    }
  };

  function isIntWithinRange(value) {
    var intValue = parseInt(value);
    if (isNaN(intValue) || intValue < -2147483648 || intValue > 2147483647) {
      return false;
    }
    return true;
  }

  const handleSave = async () => {
    if (parseInt(preferences.highPrice) <= parseInt(preferences.lowPrice)) {
      window.alert("High price must be greater than low price.");
      return;
    }
    if(!isIntWithinRange(preferences.highPrice) || !isIntWithinRange(preferences.lowPrice)){
      window.alert("Price is valid.");
      return;
    }
    if (parseInt(preferences.highPrice) <=0 || parseInt(preferences.lowPrice) <=0) {
      window.alert("High price must be greater than low price.");
      return;
    }
    if (parseInt(preferences.storyRange) <= 0 || preferences.storyRange == "" || !isIntWithinRange(preferences.storyRange)  ) {
      window.alert("StoryRange is valid.");
      return;
    }
    console.log(preferences);
    try {
      let fetchurl = serverUrl + "/api/usersetting/savePreferences";
      let response = await fetch(fetchurl, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      });
      if (response.ok) {
        window.alert("save success");
        await fetchPreferences();
        router.refresh();
      } else {
        window.alert("save failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0">
        <div className=" flex flex-col items-center">
          <table className="font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000] border-collapse ">
            <tbody className="text-center ">
              <tr>
                <td>Town</td>
                <td className="flex items-center justify-center w-full ">
                  <div>
                    <select
                      name="town"
                      value={preferences.town}
                      defaultValue={enumOptions[0]}
                      onChange={handleChange}
                      className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    >
                      {enumOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="flex items-center ml-3 truncate  "
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td>StoreyRange</td>
                <td className="flex items-center justify-center w-full ">
                  <div className="flex items-center justify-center rounded-[6px] h-[50px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
                    <input
                      type="text"
                      name="storyRange"
                      value={preferences.storyRange}
                      onChange={handleChange}
                      className="flex items-center  h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                    />
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[0]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="one_ROOM"
                      checked={preferences.one_ROOM}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[1]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="two_ROOM"
                      checked={preferences.two_ROOM}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[2]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="three_ROOM"
                      checked={preferences.three_ROOM}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[3]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="four_ROOM"
                      checked={preferences.four_ROOM}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[4]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="five_ROOM"
                      checked={preferences.five_ROOM}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[5]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="executive"
                      checked={preferences.executive}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td className="flex-grow">{enumFlatTypes[6]}</td>
                <td className="flex items-center justify-center  w-full ">
                  <div className="flex items-center justify-center ">
                    <Switchbtn
                      name="multi_GENERATION"
                      checked={preferences.multi_GENERATION}
                      onChange={handleChange}
                      className=" my-auto"
                    ></Switchbtn>
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td>LowPrice</td>
                <td className="flex items-center justify-center w-full ">
                  <div className="flex items-center justify-center rounded-[6px] h-[50px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
                    <input
                      type="text"
                      name="lowPrice"
                      value={preferences.lowPrice}
                      onChange={handleChange}
                      className="flex items-center  h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                    />
                  </div>
                </td>
              </tr>
            </tbody>

            <tbody className="text-center ">
              <tr>
                <td>HighPrice</td>
                <td className="flex items-center justify-center w-full ">
                  <div className="flex items-center justify-center rounded-[6px] h-[50px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
                    <input
                      type="text"
                      name="highPrice"
                      value={preferences.highPrice}
                      onChange={handleChange}
                      className="flex items-center  h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className=" flex justify-center w-full mt-4">
            <button
              type="submit"
              onClick={handleSave}
              className="flex w-[200px] h-[45px] justify-center items-center rounded-[6px] bg-[#24265f] font-['Inter'] text-[20px] font-medium  text-[#fff]  whitespace-nowrap z-[41]"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
