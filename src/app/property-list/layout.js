import Link from "next/link";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
