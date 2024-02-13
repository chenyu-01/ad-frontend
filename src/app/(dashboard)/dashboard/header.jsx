"use client";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { config } from "@/config";
const serverUrl = config.serverUrl;



export default function Header() {
  const { userData, isAuthenticated, logout } = useContext(AuthContext);
  const pathname = usePathname();
  const router = useRouter();
  function LogButton() {
    if (isAuthenticated) {
      return <Button onClick={() => logout()}>Logout</Button>;
    } else {
      return <Button onClick={() => router.push("/login")}>Login</Button>;
    }
  }

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

  return (
    <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-end mt-9 text-3xl font-bold tracking-tighter leading-10 text-stone-950 max-md:max-w-full">
        Hi,{profile.name} <span className="font-medium"> Welcome Back </span>
    <div className="">
      <div className="flex justify-between items-center  text-3xl px-5 ">
        <div className="text-blue-400 font-bold">HDB Market Insights</div>

        <div className="md:space-x-3 flex">
          <div className=" font-bold">
            {userData && <h1>Welcome {userData.name} </h1>}
          </div>
          {pathname !== "/login" && <LogButton />}
          {pathname !== "/register" && !isAuthenticated && (
            <Button onClick={() => router.push("/register")}>Register</Button>
          )}
        </div>
      </div>
    </div>
  );
}


