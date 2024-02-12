"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";

const serverUrl = config.serverUrl;
const customerid = 2;
function PropertyList() {
  const [propertylists, setPropertylists] = useState([]);

  async function fetchPropertylists() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getPropertyList";
      let response = await fetch(fetchurl, {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      console.log(data);
      setPropertylists(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchPropertylists();
  }, []);

  return (
    <div className="">
      <div className="main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0 ">
        <table className="">
          {propertylists.map((propertylist) => (
            <tbody key={propertylist.propertyid}>
              <tr className="border" key={propertylist.id}>
                <table className="w-[318px] h-[122px]  bg-white rounded-[20px] shadow mt-[10px]  z-10">
                  <tr className="border">
                    <td rowSpan="2" className=" border">
                      <img
                        className=""
                        src="pixel-city-1.png"
                        alt="placeholder"
                      />
                    </td>
                    <td className="border text-stone-950 text-base font-medium font-['SF UI Display'] whitespace-normal">
                      {propertylist.town}
                      {propertylist.streetName}
                    </td>
                  </tr>

                  <tr className="border">
                    <td className="text-neutral-400 text-sm font-medium font-['SF UI Display']">
                      {propertylist.propertyStatus}
                      <div>{propertylist.price}</div>
                    </td>
                  </tr>
                </table>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default PropertyList;
