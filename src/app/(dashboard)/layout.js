import { Inter } from "next/font/google";
import "../globals.css";
import Header from "./dashboard/header";
import Nav from "./dashboard/nav";
import { AuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HDB Insights",
  description: "an app to help you find your dream HDB home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="container mx-auto h-screen">
            <div className="flex flex-col mt-10">
              <Header />
              <div className="flex w-full justify-center ">
                <div className={`px-5 mt-10 `}>
                  <Nav />
                </div>
                <div className="flex justify-center w-full items-center ">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
