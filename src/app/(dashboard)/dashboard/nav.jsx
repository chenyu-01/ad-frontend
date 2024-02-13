"use client";
import DashboardIcon from "./icons/DashboardIcon";
import Propic from "./icons/profilepic";
import Seticon from "./icons/setting";
import Appoinments from "./icons/appoinment";
import OwnerListIcon from "./icons/OwnerListIcon";
import Find from "./icons/find";
import Link from "next/link";
import AddNewIcon from "./icons/AddNewIcon";
import { AuthContext } from "@/app/(dashboard)/AuthProvider";
import { useContext } from "react";
export default function Nav() {
  const { userData } = useContext(AuthContext);
  const isOwner = userData?.role === "owner"; // if user is owner
  return (
    <div className="flex flex-col items-stretch text-base font-semibold tracking-tight bg-white basis-0">
      <div className="flex flex-col items-center font-medium text-stone-300">
        <NavLink href={`/`} icon={<DashboardIcon />}>
          Dashboard
        </NavLink>
        <NavLink href={`/profile`} icon={<Propic />}>
          Profile
        </NavLink>

        <NavLink href={`/preferences`} icon={<Seticon />}>
          Preferences
        </NavLink>
        <NavLink href={`/appointment`} icon={<Appoinments />}>
          Appoinments
        </NavLink>
        {isOwner && (
          <>
            <NavLink href={`/addproperty`} icon={<AddNewIcon />}>
              Add New Property
            </NavLink>
            <NavLink href={"/propertylist"} icon={<OwnerListIcon />}>
              My Properties
            </NavLink>
          </>
        )}
        <NavLink href="/property-list" icon={<Find />}>
          Search
        </NavLink>
      </div>
    </div>
  );
}

function NavLink({ href, children, icon }) {
  return (
    <Link
      className="flex gap-4 items-center self-stretch  text-blue-500 mb-10"
      href={href}
    >
      {icon}
      <div className="flex-auto my-auto whitespace-nowrap md:text-2xl">
        {children}
      </div>
    </Link>
  );
}
