import { Inter } from "next/font/google";
import "../globals.css";
import { AuthProvider } from "../(dashboard)/AuthProvider";
import Header from "../(dashboard)/dashboard/header";
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
            <div className="flex flex-col">
              <Header />
              <div className={`px-5 mt-10`}>{children}</div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
