"use client";
import React, { useState, useEffect } from "react";
import { config } from "@/config";
import { useRouter } from "next/navigation";

const serverUrl = config.serverUrl;
function PropertyList() {
  const router = useRouter();
  const [propertylists, setPropertylists] = useState([]);

  async function fetchPropertylists(customerid) {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl =
        serverUrl + "/api/usersetting/getPropertyList";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      let data = await response.json();
      if(response.ok)
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

  const handleClick = async (id,propertyStatus) =>{
    try {
      let fetchurl = serverUrl + "/api/usersetting/savePropertyInfo/" + id + "&" + propertyStatus;
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.alert("Ready to update property");
        router.push("/addproperty");
      } else {
        window.alert("failed to update property");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="">
      <div className="main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0 ">
        <table className="">
          {propertylists.map((propertylist) => (
              <button key={propertylist.id} onClick={() => handleClick(propertylist.id,propertylist.propertyStatus)}>
            <tbody key={propertylist.id}>
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
              </button>
          ))}
        </table>
      </div>
    </div>
  );
}

export default PropertyList;
