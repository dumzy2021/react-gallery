import { Outlet } from "react-router-dom";
import { AuthSidebar } from "./AuthSidebar";
import { MainLogo } from "../../../assets";

export const AuthLayout = () => {
  return (
    <div className="p-6 sm:p-10 h-screen">
      <div className="flex h-full  md:gap-14 lg:gap-16 xl:gap-20">
        <div className="max-w-[550px] hidden md:block flex-1">
          <AuthSidebar />
        </div>

        <div className="flex-1 flex flex-col  justify-center">
          <div className="max-sm:flex md:hidden flex justify-end ">
            <MainLogo
              fill="#005199"
              className=" h-9 sm:h-12 w-20 sm:w-[unset]"
            />
          </div>
          <div className="max-w-[485px] flex flex-col  justify-center flex-1 max-h-[600px] w-full mx-auto md:mx-[unset] overflow-y-auto pb-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
