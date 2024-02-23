import Header from "./dashboard/header";
import Nav from "./dashboard/nav";

export default function Dashboard({ children }) {
  return (
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
  );
}
