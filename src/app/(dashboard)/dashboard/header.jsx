"use client";
import { AuthContext } from "../AuthProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Header() {
  const { userData, isAuthenticated, logout } = useContext(AuthContext);
  const pathname = usePathname();
  console.log("userData", userData);
  const router = useRouter();
  function LogButton() {
    if (isAuthenticated) {
      return <Button onClick={() => router.push("/logout")}>Logout</Button>;
    } else {
      return <Button onClick={() => logout()}>Login</Button>;
    }
  }
  return (
    <div className="flex justify-between items-center px-5 text-3xl">
      <div className="  font-bold  ">
        {userData && <h1>Welcome {userData.name} </h1>}
      </div>
      <div className="space-x-3">
        {pathname !== "/login" && <LogButton />}
        {pathname !== "/register" && (
          <Button onClick={() => router.push("/register")}>Register</Button>
        )}
      </div>
    </div>
  );
}
