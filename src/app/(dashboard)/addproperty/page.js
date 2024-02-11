"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";

const serverUrl = config.serverUrl;
const customerid = 2;
function AddProperty() {
  const [status, setStatus] = useState("");
  const [property, setProperty] = useState({
    propertyid: "",
    town: "",
    propertyStatus: "",
    flatType: "",
    storeyRange: "",
    streetName: "",
    floorArea: "",
    price: "",
    contractMonthPeriod: "",
    block: "",
    leaseCommenceDate: "",
    remainingLease: "",
    bedrooms: "1",
  });
  const [enumStatusOptions, setEnumStatusOptions] = useState([]);
  const [enumTownOptions, setEnumTownOptions] = useState([]);
  async function fetchPropertyStatus() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getPropertyStatus";
      let response = await fetch(fetchurl, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumStatusOptions(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function fetchTownName() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getTownName";
      let response = await fetch(fetchurl, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      setEnumTownOptions(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchPropertyStatus();
    fetchTownName();
    // the first time the page is loaded, fetch data from API
    //SelectStatus({target:{value:'rented'}});
    setProperty((prevProperty) => {
      return {
        ...prevProperty,
        propertyStatus: "rented",
      };
    });
  }, []);

  useEffect(() => {
    handleChange({ target: { name: "town", value: enumTownOptions[0] } });
  }, [enumTownOptions]);

  const handleSave = async () => {
    try {
      console.log(property);
      let fetchurl = serverUrl + "/api/usersetting/saveProperty/" + customerid;
      let response = await fetch(fetchurl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(property),
      });
      console.log(JSON.stringify(property));

      if (response.ok) {
        window.alert("save success");
      } else {
        window.alert("save failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="main-container w-full  flex flex-col items-center mx-auto my-0 overflow-y-auto">
        <div className="w-full  bg-[#fff]  top-0 left-0  z-[3]">
          <div className="w-full  text-[0px] bg-[rgba(255,255,255,0.2)] rounded-[3.0px] border-solid border-[5px] border-[#eff0f6]  z-[4] mt-0 mr-0 mb-0 ml-0">
            <table className="w-full table-auto  border-collapse overflow-y-auto font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000] ">
              <tbody className="text-center ">
                <tr>
                  <td colSpan={2}>
                    <div className="flex justify-center items-center text-[35px]   font-medium  text-gray-900   text-left z-[13] ">
                      Register Property
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <td>
                    <div className=" h-[50px]   mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                        <span
                          id="listbox-Status"
                          className="flex items-center  text-[25px]   font-medium leading-6 text-gray-900"
                        >
                          Status
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center  mt-2">
                      <select
                        name="propertyStatus"
                        value={property.propertyStatus}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      >
                        {enumStatusOptions.map((option) => (
                          <option
                            key={option}
                            value={option}
                            className="flex items-center ml-3  truncate  "
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
                  <td>
                    <div className=" h-[50px] relative  mt-[5px]">
                      <div className="flex items-center gap-[8px] flex-nowrap absolute inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          Town
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  w-full">
                      <select
                        name="town"
                        value={property.town}
                        onChange={handleChange}
                        className=" w-full  cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      >
                        {enumTownOptions.map((option) => (
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
                  <td>
                    <div className=" h-[50px]   mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          FlatType
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  mt-2">
                      <input
                        name="flatType"
                        value={property.flatType}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px]  mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px]  font-medium leading-6 text-gray-900"
                        >
                          StoryRange
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center   mt-2">
                      <input
                        name="storeyRange"
                        value={property.storeyRange}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px]   mt-[5px]">
                      <div className="flex items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          StreetName
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center   mt-2">
                      <input
                        name="streetName"
                        value={property.streetName}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px]   mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          FloorArea
                        </span>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="flex items-center   mt-2">
                      <input
                        name="floorArea"
                        value={property.floorArea}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px]  mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          Block
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  mt-2">
                      <input
                        name="block"
                        value={property.block}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px] relative  mt-[5px]">
                      <div className="flex  items-center gap-[8px] flex-nowrap absolute inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                        >
                          BedRooms
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  mt-2">
                      <select
                        name="bedrooms"
                        value={property.bedrooms}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      >
                        <option
                          value="1"
                          className="flex items-center ml-3  truncate "
                        >
                          1
                        </option>
                        <option
                          value="2"
                          className="flex items-center ml-3  truncate "
                        >
                          2
                        </option>
                        <option
                          value="3"
                          className="flex items-center ml-3  truncate "
                        >
                          3
                        </option>
                        <option
                          value="4"
                          className="flex items-center ml-3  truncate "
                        >
                          4
                        </option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tbody className="text-center ">
                <tr>
                  <td>
                    <div className=" h-[50px]   mt-[5px]">
                      <div className="flex items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                        <span
                          id="listbox-label"
                          className="flex items-center  text-[25px]  font-medium leading-6 text-gray-900"
                        >
                          Price
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center  relative mt-2">
                      <input
                        name="price"
                        value={property.price}
                        onChange={handleChange}
                        className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>

              {(property.propertyStatus === "forSale" ||
                property.propertyStatus === "soldOut") && (
                <>
                  <tbody className="text-center ">
                    <tr>
                      <td>
                        <div className=" h-[50px]   mt-[5px]">
                          <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                            <span
                              id="listbox-label"
                              className="flex items-center  text-[25px] font-medium leading-6 text-gray-900"
                            >
                              LeaseCommenceDate
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center  mt-2">
                          <input
                            type="date"
                            name="leaseCommenceDate"
                            value={property.leaseCommenceDate}
                            onChange={handleChange}
                            className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>

                  <tbody className="text-center ">
                    <tr>
                      <td>
                        <div className=" h-[50px]   mt-[5px]">
                          <div className="flex  items-center gap-[8px] flex-nowrap inset-x-0 top-0   ">
                            <span
                              id="listbox-label"
                              className="flex items-center  text-[25px]  font-medium leading-6 text-gray-900"
                            >
                              RemainingLease
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center  mt-2">
                          <input
                            name="remainingLease"
                            value={property.remainingLease}
                            onChange={handleChange}
                            className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              )}

              {(property.propertyStatus === "forRent" ||
                property.propertyStatus === "rented") && (
                <>
                  <tbody className="text-center ">
                    <tr>
                      <td>
                        <div className=" h-[50px]   mt-[5px]">
                          <div className="flex  items-center gap-[8px] flex-nowrap  inset-x-0 top-0   ">
                            <span
                              id="listbox-label"
                              className="flex items-center  text-[25px]   font-medium leading-6 text-gray-900"
                            >
                              ContractMonthPeriod
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center mt-2">
                          <input
                            name="contractMonthPeriod"
                            value={property.contractMonthPeriod}
                            onChange={handleChange}
                            className=" w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </>
              )}

              <tbody className="text-center ">
                <tr>
                  <td colSpan={2}>
                    <div className="flex justify-center items-center">
                      <button
                        type="submmit"
                        onClick={handleSave}
                        className="h-[40px]  w-[400px]  flex-nowrap bg-[#4a3aff] rounded-[3.0px] border-none  z-[39] pointer mt-[9.6px] mr-0 mb-0 ml-[22.0px]"
                      >
                        <span className=" h-[30px] shrink-0 basis-auto font-['Inter'] text-[25px] font-normal  text-[#fff]  text-left whitespace-nowrap z-40">
                          Continue
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddProperty;