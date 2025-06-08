import React from "react";
import { bill, apple, google } from "../assets";
const CardDeal = () => {
  return (
    <div className="flex w-full mt-28 mb-10 px-[10%] justify-between z-50 relative">
      <div className=" absolute h-[10%] w-[20%]  blur-[123px] z-0 bg-gradient-to-bl from-[#FFFFFF99] to-[#ffffffd4] -left-40  -top-4 "/>
      <div className=" absolute h-[40%] w-[32%]  blur-[300px] z-0 bg-gradient-to-r  from-[#F4C4F3] to-[#FC67FA] -left-52 -bottom-40 "/>
      <div className="w-1/2">
        <img src={bill} alt="" className="h-[455px] w-[530px]" />
      </div>
      <div className="grid items-center w-1/2 justify-between">
        <div className="text-5xl font-semibold leading-[160%] max-w-[470px] text-[#FFFFFF] text-wrap">
          Easily control your billing & invoicing.
        </div>
        <div className="text-lg font-normal leading-[160%] text-[#FFFFFFB2] text-wrap">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </div>
        <div className="flex">
          <img src={apple} alt="" className="w-[128px]" />
          <img src={google} alt="" className="w-[144px]" />
        </div>
      </div>
    </div>
  );
};

export default CardDeal;
