import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./dashboard/header";
import Nav from "./dashboard/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HDB Insights",
  description: "an app to help you find your dream HDB home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto  h-screen">
          <div className="flex flex-col">
            <Header />
            <div className="flex w-full justify-center">
              <Nav />
              <div className="flex justify-center items-center w-full ">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
