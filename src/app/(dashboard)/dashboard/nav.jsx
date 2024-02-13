"use client";
import DashboardIcon from "./icons/DashboardIcon";
import Propic from "./icons/profilepic";
import Seticon from "./icons/setting";
import Appoinments from "./icons/appoinment";
import OwnerListIcon from "./icons/OwnerListIcon";
import Logout from "./icons/logout";
import Find from "./icons/find";
import { useRouter } from "next/navigation";
import { config } from "@/config";
import Link from "next/link";
import AddNewIcon from "./icons/AddNewIcon";
let serverUrl = config.serverUrl;
export default function Nav() {
  const router = useRouter();

  function logout() {
    fetch(serverUrl + "/api/customer/logout", {
      method: "POST",
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        router.push("/login");
      }
    });
  }

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
        <NavLink href={`/addproperty`} icon={<AddNewIcon />}>
          Add New Property
        </NavLink>
        <NavLink href={"/propertylist"} icon={<OwnerListIcon />}>
          Owner Property List
        </NavLink>
        <NavLink href="/property-list" icon={<Find />}>
          Search
        </NavLink>

        <button
          className="flex gap-4 items-center self-stretch text-red-500"
          onClick={() => logout()}
        >
          <Logout />
          <div>Logout</div>
        </button>
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
      <div className="flex-auto my-auto">{children}</div>
    </Link>
  );
}
