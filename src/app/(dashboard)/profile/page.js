"use client";
import { config } from "@/config";
import React, { useState, useEffect } from "react";
import "@/app/(dashboard)/usersetting/styles/index.css";
import { useRouter } from "next/navigation";
const serverUrl = config.serverUrl;
export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    password: "",
    email: "",
    contactNumber: "",
  });

  async function fetchProfile() {
    // fetch data from API
    try {
      // ... fetch data from API ...
      let fetchurl = serverUrl + "/api/usersetting/getProfile";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
      });
      let data = await response.json();
      console.log(data);
      setProfile(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    // the first time the page is loaded, fetch data from API
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function isIntWithinRange(value) {
    var intValue = parseInt(value);
    if (isNaN(intValue) || intValue < -2147483648 || intValue > 2147483647) {
      return false;
    }
    return true;
  }

  const handleSave = async () => {
    if (parseInt(profile.contactNumber) <= 0 || !isIntWithinRange(profile.contactNumber)  ||!/^\d+$/.test(profile.contactNumber) ) {
      window.alert("ContactNumber is valid.");
      return;
    }
    try {
      console.log(JSON.stringify(profile));
      let fetchurl = serverUrl + "/api/usersetting/saveProfile";
      let response = await fetch(fetchurl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });
      if (response.ok) {
        window.alert("save success");
        await fetchProfile();
        router.refresh();
      } else {
        window.alert("save failed");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="main-container  flex flex-col items-center w-full  bg-[#fff]  overflow-hidden mx-auto my-0">
      <div className=" flex flex-col items-center">
        <table className="font-['Inter'] md:text-[25px] sm:text-[12.5px] font-semibold leading-[38px] text-[#000] border-collapse ">
          <tbody className="text-center ">
            <tr>
              <td>Name</td>
              <td className="flex items-center w-full ">
                <div className="rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                  />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody className="text-center ">
            <tr>
              <td>Password</td>
              <td className="flex items-center w-full ">
                <div className="rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)]  z-[15]  mr-0 mb-0 ml-[12px]">
                  <input
                    type="password"
                    name="password"
                    value={profile.password}
                    onChange={handleChange}
                    className="[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                  />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody className="text-center ">
            <tr>
              <td>Email</td>
              <td className="flex items-center w-full ">
                <div className="rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)]  z-[15]  mr-0 mb-0 ml-[12px]">
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
                  />
                </div>
              </td>
            </tr>
          </tbody>

          <tbody className="text-center ">
            <tr>
              <td>ContactNumber</td>
              <td className="flex items-center w-full ">
                <div className="rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)]  z-[15]  mr-0 mb-0 ml-[12px]">
                  <input
                    type="text"
                    name="contactNumber"
                    value={profile.contactNumber}
                    onChange={handleChange}
                    className="[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
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
  );
}
