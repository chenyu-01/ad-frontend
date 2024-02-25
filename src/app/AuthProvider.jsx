"use client";
import { config } from "@/config";
import { useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";
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
        setIsAuthenticated(false);
        setUserData(null);
        router.push("/login");
      }
    });
  }
  const checkAuth = useCallback(async () => {
    try {
      let fetchurl = serverUrl + "/api/customer/check-auth";
      let response = await fetch(fetchurl, {
        method: "GET",
        credentials: "include",
      });
      let data = await response.json();
      if (response.ok) {
        setUserData(data);
        setIsAuthenticated(true);
        router.push("/");
      } else {
        setIsAuthenticated(false);
        router.push("/login");
      }
    } catch (error) {
      console.error(error.message);
    }
  }, []);
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
