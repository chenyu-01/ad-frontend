"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./dashboard/header";
import Nav from "./dashboard/nav";

const inter = Inter({ subsets: ["latin"] });
/*
export const metadata = {
  title: "HDB Insights",
  description: "an app to help you find your dream HDB home",
};
*/

export default function RootLayout({ children }) {
  // const router = useRouter();
  // const pathName = usePathname();
  // const searchParams = useSearchParams();
  // const isLoginPage = pathName === '/login';
  //
  // const isRegisterPage = pathName === '/register';
  // const hasQueryParams = searchParams.length > 0;
  //
  // if ((isLoginPage || isRegisterPage) && !hasQueryParams) {
  //
  //     return(
  //       <html lang="en">
  //         <body className={inter.className}>
  //           {children}
  //         </body>
  //       </html>
  //     )
  //
  //   }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <div>
            <Header />
          </div>

          <div className="flex w-full">
            <Nav />
            <div className="flex justify-center items-center w-full ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
