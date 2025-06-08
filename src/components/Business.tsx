// import React from "react";
import { star, shield, send } from "../assets";
const Business = () => {
  return (
    <div className="flex justify-between mb-10 items-center w-full px-[10%]  text-oveflow  mt-auto  ">
      <div className=" max-w-[622px]">
        <h1 className="text-5xl font-semibold leading-[160%]">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-lg font-normal leading-[170%] text-[#FFFFFFB2] ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="text-lg leading-[150%] font-medium bg-gradient-to-bl  from-[#cbf5f6]  to-[#33BBCF] h-16 w-40 text-center rounded-2xl text-black mt-14">
          Get Started
        </button>
      </div>
      <div className="  flex flex-col items-start max-w-[470px] ">
        <div className="w-[470px] hover:bg-gradient-to-b from-white/10 to-[#141217] rounded-4xl px-4 h-[115px] gap-4 flex items-center ">
          <div>
            <img src={star} alt="" className="h-16"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold leading-[130%]">Rewards</h1>

            <p className="text-base text-[#FFFFFFB2] font-normal">
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>
        <div className="w-[470px] h-[115px] hover:bg-gradient-to-b from-white/10 to-[#141217] rounded-4xl px-4 gap-4  flex items-center ">
          <div>
            <img src={shield} alt="" className="h-16"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold leading-[130%]">100% Secured</h1>

            <p className="text-base text-[#FFFFFFB2] font-normal">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div className="w-[470px] h-[115px] hover:bg-gradient-to-b from-white/10 to-[#141217] rounded-4xl px-4 gap-4  flex items-center ">
          <div>
            <img src={send} alt="" className="h-16"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold leading-[130%]">Balance Transfer</h1>

            <p className="text-base text-[#FFFFFFB2] font-normal">
              A balance transfer credit card can save you a lot of money in
              interest charges
            </p>
          </div>
        </div>
        {/* <div>
          <img src={shield} alt="" />
          <div>
            <h1 className="text-lg font-semibold leading-[130%]">
              100% Secured
            </h1>
            <p className="text-base text-[#FFFFFFB2] font-normal">
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>
        <div>
          <img src={send} alt="" />
          <div>
            <h1 className="text-lg font-semibold leading-[130%]">
              Balance Transfer
            </h1>
            <p className="text-base text-[#FFFFFFB2] font-normal">
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Business;
