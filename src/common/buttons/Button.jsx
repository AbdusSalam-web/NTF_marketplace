import { GoPerson } from "react-icons/go";
import { MdOutlineRocketLaunch } from "react-icons/md";

export const SingUpBtn = () => {
  return (
    <>
      <button className="px-[30px] py-[19px] bg-[#A259FF] font-workSans font-semibold text-[16px] text-white rounded-[20px] leading-[23px] flex items-center gap-3">
        <GoPerson />
        Sign Up
      </button>
    </>
  );
};

export const GetStartedBtn = ({btnMd}) => {
  return (
    <>
      <button
        className={` ${btnMd} sm:w-full  py-[19px] bg-[#A259FF] font-workSans font-semibold text-[16px] text-white rounded-[20px] leading-[23px] flex items-center justify-center gap-3`}
      >
        <MdOutlineRocketLaunch />
        Get Started
      </button>
    </>
  );
};
