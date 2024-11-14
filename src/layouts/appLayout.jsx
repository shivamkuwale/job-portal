import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="min-h-screen w-[90vw] mx-auto ">
        <Header />
        <Outlet />
      </div>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made by Samarjeet Singh Kheda
      </div>
    </div>
  );
};

export default AppLayout;
