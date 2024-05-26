import { Outlet } from "react-router-dom";
import { AuthSidebar } from "./AuthSidebar";

export const AuthLayout = () => {
  return (
    <div className="p-6 sm:p-10 h-screen">
      <div className="flex h-full  md:gap-14 lg:gap-16 xl:gap-20">
        <div className="max-w-[550px] hidden md:block flex-1">
          <AuthSidebar />
        </div>

        <div className="flex-1 flex items-center">
          <div className="max-w-[485px] w-full mx-auto md:mx-[unset] overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
