import { AuthStar, MainLogo } from "../../../assets";

export const AuthSidebar = () => {
  return (
    <div className="bg-[#005199] h-full rounded-2xl px-8 py-14 flex flex-col justify-between pb-24">
      <div>
        <MainLogo fill="#fff" className="block" />
      </div>
      <div>
        <AuthStar />
        <div className="mt-8">
          <p className="max-w-[440px] text-[#E4E7EC] text-base xl:text-lg mt-6">
            Create a free account and get full access to all features.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8">
          {/* <p className="text-[#E4E7EC] text-sm xl:text-base font-medium">
            Join 40,000+ users
          </p> */}
        </div>
      </div>
    </div>
  );
};
