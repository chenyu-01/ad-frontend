"use strict";
"use client";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
const serverUrl = config.serverUrl;
export const AuthContext = createContext(undefined);
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
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
  const checkAuth = async () => {
    try {
      const response = await fetch(`${serverUrl}/api/customer/check-auth`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        setIsAuthenticated(true);
        const data = await response.json();
        setUserData(data);
        router.push("/");
      } else {
        setIsAuthenticated(false);
        setUserData(null);
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
