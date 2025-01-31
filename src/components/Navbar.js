import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="top-0 sticky z-10">
      <div className="w-[1440px] h-[120px] mx-auto  sticky top-0 z-10 bg-black">
        <div className="flex justify-start items-center gap-[71px] pl-[80px] py-[36px]">
          <div className="text-white text-[32px] font-bold font-['DM Sans'] leading-[48px]">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </div>
          <div className="text-white text-[32px] font-bold font-['DM Sans'] leading-[48px]">
            <Link to="journey" smooth={true} duration={500}>
              About
            </Link>
          </div>
          <div className="text-white text-[32px] font-bold font-['DM Sans'] leading-[48px]">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </div>
          <div className="text-white text-[32px] font-bold font-['DM Sans'] leading-[48px]">
            <Link to="contacts" smooth={true} duration={500}>
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
