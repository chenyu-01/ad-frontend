import Header from "../(dashboard)/dashboard/header";

export default function RootLayout({ children }) {
  return (
    <div className="container mx-auto h-screen max-w-screen-lg">
      <div className="flex flex-col">
        <div className="">
          <Header />
        </div>
        <div className={`flex w-full justify-center mt-10`}>{children}</div>
      </div>
    </div>
  );
}
