"use client";
import { config } from "@/config";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/app/AuthProvider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const serverUrl = config.serverUrl;
export default function Profile() {
  const { userData } = useContext(AuthContext);
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  useEffect(() => {
    if (userData) {
      setProfile({
        name: userData.name,
        email: userData.email,
        contactNumber: userData.contactNumber,
      });
    }
  }, [userData]);

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
    if (
      parseInt(profile.contactNumber) <= 0 ||
      !isIntWithinRange(profile.contactNumber) ||
      !/^\d+$/.test(profile.contactNumber)
    ) {
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
        <table className="text-xl border-collapse ">
          <InputField
            label="Name"
            name="name"
            type="text"
            value={profile.name}
            handleChange={handleChange}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={profile.password}
            handleChange={handleChange}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={profile.confirmPassword}
            handleChange={handleChange}
          />
          <InputField
            label="Email"
            name="email"
            type="email"
            value={profile.email}
            handleChange={handleChange}
          />
          <InputField
            label="ContactNumber"
            name="contactNumber"
            type="text"
            value={profile.contactNumber}
            handleChange={handleChange}
          />
        </table>

        <div className=" flex justify-center w-full mt-4">
          <Button type="submit" onClick={handleSave} className="flex w-full">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
function InputField({ label, name, type, value, handleChange, ...props }) {
  return (
    <tbody>
      <tr>
        <td>{label}</td>
        <td className="flex items-center w-full ">
          <div className="rounded-[6px] border-solid border border-[rgba(83,76,76,0.14)]   mr-0 mb-0 ml-[12px]">
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
              {...props}
              className="h-[30px] font-['Inter'] md:text-[25px] sm:text-[20px] font-medium px-4 text-[#534c4c]"
            />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
