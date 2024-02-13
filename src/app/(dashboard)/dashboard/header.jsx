"use client";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
  return (
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
