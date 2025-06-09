import React from "react";
import { logo, instagram, facebook, twitter, linkedin } from "../assets";
const Footer = () => {
  return (
    <div className="flex flex-col w-[80%] mx-auto">
      <div className="flex justify-between border-b-1 pb-6 border-gray-700">
        <div className="flex flex-col gap-4  m-0 px-4">
          <img src={logo} alt="" className="w-[266px] h-[72px] " />
          <p className="text-lg font-normal leading-[32px] w-[312px] h-[64] text-[#FFFFFFB2]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-medium leading-[150%] mb-1">Useful Links</h1>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Content</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">How it Works</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Create</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Explore</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Terms & Services</p>
        </div>
        <div>
          <h1 className="text-lg font-medium leading-[150%] mb-1 ">Community</h1>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Help Center</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Partners</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Suggestions</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Blog</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Newsletters</p>
        </div>
        <div>
          <h1 className="text-lg font-medium leading-[150%] mb-1">Partner</h1>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Our Partner</p>
          <p className="text-base font-normal leading-[150%] text-[#FFFFFFB2]">Become a Partner</p>
          
        </div>
      </div>
      <div className="flex justify-between my-4 pr-4 ">
        <div className="flex text-lg leading-[150%] text-[#FFFFFF99] gap-2">
          <p>Copyright</p>
          <p>©</p>
          <p>2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex gap-4">
          <img src={instagram} alt="" className="h-[21px] w-[21px]" />
          <img src={facebook} alt=""  className="h-[21px] w-[21px]"/>
          <img src={twitter} alt=""   className="h-[21px] w-[21px]"/>
          <img src={linkedin} alt=""  className="h-[21px] w-[21px]"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
