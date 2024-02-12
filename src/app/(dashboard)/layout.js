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
      <div className="mx-48">
        <div className = "grid grid-rows-4 grid-flow-col gap-4">
          <div className="row-span-4">
            <Nav />
          </div>
          <div className="col-span-2">
            <Header />
          </div>
          <div className=" row-span-3 col-span-2">
            {children}
          </div>
        </div>
      </div>
      </body>
      </html>
  );
}
