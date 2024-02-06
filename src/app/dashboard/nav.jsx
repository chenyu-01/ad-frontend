"use client";
import SettingsIcon from "./icons/settings";
import Propic from "./icons/profilepic";
import Seticon from "./icons/setting";
import Appoinments from "./icons/appoinment";
import Favorites from "./icons/fav";
import Logout from "./icons/logout";
import { useRouter } from "next/navigation"; // Import from "next/router" instead of "next/navigation"

export default function Nav() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-stretch py-11 text-base font-semibold tracking-tight bg-white basis-0">
      <div className="flex gap-4 justify-between items-stretch self-start px-5 mt-28 whitespace-nowrap text-stone-950 max-md:mt-10">
        <div className="flex flex-col w-1 h-6 bg-green-700 rounded-2xl" />
        <SettingsIcon />
        <div className="flex-auto my-auto">Dashboard</div>
      </div>

      <div className="flex flex-col items-center px-10 mt-12 font-medium text-stone-300 max-md:px-5 max-md:mt-10">
        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 whitespace-nowrap">
          <Propic/>
          <div className="flex-auto my-auto">Profile</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch  text-blue-500 mt-12 max-md:mt-10">
          <Seticon/>
          <div className="flex-auto my-auto">Settings</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 mt-12 max-md:mt-10">
          <Appoinments/>
          <div className="flex-auto">Appoinments</div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 mt-12 max-md:mt-10 flex-shrink-0">
          <Favorites/>
          <div className="flex-auto">Favorites</div>
          </div>

          <div className="flex gap-4 justify-between items-stretch self-stretch text-red-500 mt-12 max-md:mt-10">
            <Logout/>
          <div className="flex-auto" onClick={()=>router.push("/login")}>Logout</div> 
          </div>
      </div>
    </div>
  
  );
}
