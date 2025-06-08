// import React from 'react'
import { discount, arrowUp, robot } from "../assets";
const HeroSection = () => {
  return (
    <div className=" relative bg-[#00040F] flex flex-col justify-center md:justify-between md:flex-row pl-[10%] md:pl-[10%] pr-[10%] h-auto  md:h-[100vh]  overflow-x-hidden ">
      <div className="h-[35%] w-[20%] bg-gradient-to-r from-blue-100 to-blue-900 blur-[123px] -left-10 top-1/4 z-10 absolute" />
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-10  right-10 bg-gradient-to-r from-[#BCA5FF] to-[#214D76] blur-[123px]"/> */}
      <div className="pt-28 ">
        <div className="flex items-center  bg-gradient-to-r from-amber-50/15 to-black rounded-full">
          <img src={discount} alt="" />
          <p>
            <span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT
          </p>
        </div>
        <div className=" flex items-center  ">
          <div className="text-7xl leading-[1.4] font-semibold ">
            <p>The Next</p>
            <p className=" bg-gradient-to-r from-cyan-600 to-blue-100 text-transparent bg-clip-text ">
              Generation
            </p>
          </div>

          <div className="hidden md:block bg-gradient-to-b from-cyan-600 to-blue-100  h-20 w-20 rounded-full p-0.5 ">
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
        <div className="text-7xl leading-[1.4] font-semibold ">
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
      <div className=" pt-10  relative ">
        <img src={robot} alt="something" className="w-[669px] h-[674px] z-50 relative " />
        <div className="absolute z-[0] w-[40%] h-[35%] top-10  right-16 bg-gradient-to-r from-[#BCA5FF] to-[#214D76] blur-[123px]"/>
        {/* <div className="absolute  w-[40%] h-[50%]  z-0  bg-gradient-to-r from-[#BCA5FF] to-[#214D76]  blur-[123px] opacity-40"></div> */}
        {/* <div className="left-[998px] absolute   top-24  w-[40%] h-[50%] blur-[750px] -z-10  bg-white  rounded-b-full"></div> */}
      </div>
    </div>
  );
};

export default HeroSection;
// 
