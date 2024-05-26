import { Outlet } from "react-router-dom";
import { NavbarContent } from "./Navbar";

export const DashboardLayout = () => {
  return (
    <div className="max-w-[1500px] mx-auto">
      <div className="p-4 shadow-md">
        <NavbarContent />
      </div>
      <div className="p-4 md:p-10">
        <Outlet />
      </div>
    </div>
  );
};
