"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { config } from "@/config";
const serverUrl = config.serverUrl;

export default function Login() {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/customer/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(account),
        credentials: "include",
      });

      if (response.ok) {
        router.push("/");
      } else {
        const data = await response.json();
        if (data && data.message) {
          setError(data.message);
        } else {
          setError("An unknown error occurred while logging in");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-10 rounded-3xl md:p-5 md:max-w-screen-md mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="text-blue-400 text-4xl font-bold mb-5 md:mb-10">
            HDB Market Insights
          </div>
          <img
            loading="lazy"
            src="dream.jpg"
            className="w-full md:max-w-lg md:mx-auto"
            alt="Dream Home"
          />
        </div>
        <div className="w-full md:w-1/2 mt-5 md:mt-0 md:ml-10">
          <div className="text-blue-600 text-4xl mb-5 md:mb-10">
            <span className="font-bold text-blue-400">Hello, DreamHome</span>
            <span className="text-5xl text-blue-400">!</span>
          </div>
          <div className="flex flex-col items-stretch">
            <div className="text-slate-500 text-2xl font-bold mb-5">Login</div>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="mb-5 p-2 w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                required
                className="mb-5 p-2 w-full"
              />
              <button
                type="submit"
                className="bg-slate-600 text-white font-bold py-2 px-4 rounded"
              >
                Login
              </button>
              {error && <div className="text-red-500">{error}</div>}
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="bg-slate-600 text-white font-bold py-2 px-4 mt-3 rounded"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
