"use client";
import SettingsIcon from "./icons/settings";
import Propic from "./icons/profilepic";
import Seticon from "./icons/setting";
import Appoinments from "./icons/appoinment";
import Favorites from "./icons/fav";
import Logout from "./icons/logout";
import Find from "./icons/find";
import { useRouter } from "next/navigation";

export default function Nav() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-stretch py-11 text-base font-semibold tracking-tight bg-white basis-0">
      <div className="flex gap-4 justify-between items-stretch self-start px-5 mt-28 whitespace-nowrap text-stone-950 max-md:mt-10">
        <div className="flex flex-col w-1 h-6 bg-green-700 rounded-2xl" />
        <SettingsIcon />
        <div
          className="flex-auto my-auto"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </div>
      </div>

      <div className="flex flex-col items-center px-10 mt-12 font-medium text-stone-300 max-md:px-5 max-md:mt-10">
        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 whitespace-nowrap">
          <Propic />
          <div
            className="flex-auto my-auto"
            onClick={() => router.push("/profile")}
          >
            Profile
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch  text-blue-500 mt-12 max-md:mt-10">
          <Seticon />
          <div
            className="flex-auto my-auto"
            onClick={() => router.push("/preferences")}
          >
            Settings
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 mt-12 max-md:mt-10">
          <Appoinments />
          <div
            className="flex-auto"
            onClick={() => router.push("/appointment")}
          >
            Appoinments
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 mt-12 max-md:mt-10 flex-shrink-0">
          <Appoinments />
          <div
            className="flex-auto"
            onClick={() => router.push("/addproperty")}
          >
            Add New Property
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-blue-500 mt-12 max-md:mt-10 flex-shrink-0">
          <Favorites />
          <div
            className="flex-auto"
            onClick={() => router.push("/propertylist")}
          >
            Property List
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-yellow-500 mt-12 max-md:mt-10">
          <Find />
          <div className="flex-auto" onClick={() => router.push("/search")}>
            Search
          </div>
        </div>

        <div className="flex gap-4 justify-between items-stretch self-stretch text-red-500 mt-12 max-md:mt-10">
          <Logout />
          <div className="flex-auto" onClick={() => router.push("/login")}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}
