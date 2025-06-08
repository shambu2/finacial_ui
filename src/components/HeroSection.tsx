// import React from 'react'
import { discount, arrowUp, robot } from "../assets";
const HeroSection = () => {
  return (
    <div className=" flex pl-[10%] h-[100vh] pr-[10%] justify-between">
      <div className="h-[324px] w-[162px] rounded-full bg-white -left-16 top-[252px] blur-[200px] z-20 absolute" />
      <div className="pt-28">
        <div className="flex items-center  bg-gradient-to-r from-amber-50/15 to-black rounded-full">
          <img src={discount} alt="" />
          <p>
            <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className=" flex items-center">
          <div className="text-7xl leading-[1.4] font-semibold">
            <p>The Next</p>
            <p className="bg-gradient-to-r from-cyan-600 to-blue-100 text-transparent bg-clip-text">
              Generation
            </p>
          </div>

          <div className=" bg-gradient-to-b from-cyan-600 to-blue-100  h-20 w-20 rounded-full p-0.5 ">
            <div className="flex flex-col justify-center items-center  h-full w-full bg-black rounded-full">
              <p className="flex  items-center justify-center  bg-gradient-to-b from-cyan-600 to-blue-100 bg-clip-text text-transparent ">
                <span>Get</span>
                <span>
                  <img src={arrowUp} alt="" />
                </span>
              </p>
              <p className="bg-gradient-to-b from-cyan-600 to-blue-100 bg-clip-text text-transparent">
                Started
              </p>
            </div>
          </div>
        </div>
        <div className="text-7xl leading-[1.4] font-semibold">
          <p>Payment</p>
          <p>Method.</p>
        </div>
        <div>
          <p className="w-[483px] mt-6 text-[#FFFFFFB2] opacity-70">
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. <br /> We examine annual
            percentage rates, annual fees. <br />
          </p>
        </div>
      </div>
      <div className="flex pt-10 object-cover">
        <div className="absolute h-[571px] w-[578px] border z-10  bg-gradient-to-b from-[#BCA5FF] to-[#214D76] left-[797px] top-[73px] blur-[123px] opacity-40"></div>
        <div className="left-[998px] absolute   top-24  w-[400px] h-[471px] blur-[750px] z-20  bg-white  rounded-b-full"></div>
        <img src={robot} alt="something" className="w-[669px] h-[674px] " />
      </div>
    </div>
  );
};

export default HeroSection;
