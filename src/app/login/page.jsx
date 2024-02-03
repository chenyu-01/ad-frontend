"use client"
import * as React from "react";
// import { FormEvent } from 'react'
 import { useRouter } from 'next/navigation'

export default function Login() {


   const router = useRouter();
  // async function handleSubmit(event) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.currentTarget)
  //   const email = formData.get('email')
  //   const password = formData.get('password')
 
  //   const response = await fetch('/api/auth/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password }),
  //   })
 
  //   if (response.ok) {
  //     router.push('/profile')
  //   } else {
  //     // Handle errors
  //   }
  // }


  return (
    <div className="bg-white pl-10 pr-20 py-12 rounded-3xl max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch mt-7 max-md:max-w-full max-md:mt-10">
            <div className="text-blue-400 text-6xl font-bold w-[452px] ml-5 max-md:text-4xl max-md:ml-2.5">
              HDB Market
              <br />
              Insights
              <br />
            </div>
            <img
              loading="lazy"
              src="dream.jpg"
              className="aspect-[1.67] object-contain object-center w-full mt-12 max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-stretch mt-7 max-md:max-w-full max-md:mt-10">
            <div className="text-blue-600 text-6xl max-md:max-w-full max-md:text-4xl">
              <span className="font-bold text-blue-400">Hello, DreamHome</span>
              <span className="text-5xl text-blue-400">!</span>
            </div>
            <div className="flex flex-col items-stretch mt-16 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="self-center flex w-[273px] max-w-full items-stretch justify-between gap-5">
                <div className="flex flex-col items-stretch flex-1">
                  <div className="text-slate-500 text-4xl font-bold self-center">
                    Login
                  </div>
                  <div className="bg-slate-500 shrink-0 h-[3px] mt-1.5" />
                </div>
              </div>
              <form>
              {/* <div className="text-slate-500 text-opacity-60 text-2xl mt-32 max-md:max-w-full max-md:mt-10">
                Enter your email
              </div> */}
              <input type="email" name="email" placeholder="Enter your email" required />
              <div className="bg-slate-500 w-[432px] shrink-0 max-w-full h-[3px] mt-3.5" />
              <div className="flex items-stretch justify-between gap-5 mt-16 pr-2.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                {/* <div className="text-slate-500 text-opacity-60 text-2xl grow shrink basis-auto my-auto">
                  Enter Password
                </div> */}
                <input type="password" name="password" placeholder="Enter Password" required />
              </div>
              <div className="bg-slate-500 w-[432px] shrink-0 max-w-full h-[5px]" />
              {/* <div className="text-white text-2xl font-bold bg-slate-600 justify-center items-center mt-16 px-16 py-4 max-md:max-w-full max-md:mt-10 max-md:px-5">
                Login
              </div> */}
              <button type="submit" onClick={() => router.push('/dashboard')}className="text-white text-2xl font-bold bg-slate-600 justify-center items-center mt-16 px-16 py-4 max-md:max-w-full max-md:mt-10 max-md:px-5">
                Login
              </button>
              <button type="submit" onClick={() => router.push('/register')}className="text-white text-2xl font-bold bg-slate-600 justify-center items-center mt-16 px-16 py-4 max-md:max-w-full max-md:mt-10 max-md:px-5">
                Register
              </button>
              </form>
              <div className="text-slate-500 text-opacity-60 text-2xl self-center mt-11 max-md:mt-10">
              </div>
              <div className="self-center flex w-[123px] max-w-full items-stretch justify-between gap-5 mt-12 max-md:mt-10">
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}