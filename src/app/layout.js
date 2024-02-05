import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HDB Insights",
  description: "an app to help you find your dream HDB home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}
