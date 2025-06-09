// import React from "react";

const Cta = () => {
  return (
    <div className="w-[80%] mx-auto   flex justify-between items-center p-10  rounded-4xl bg-gradient-to-bl from-[#636262] to-[#11101D] mb-10">
      <div>
        <h1 className="text-5xl font-semibold leading-[140%] text-[#FFFFFF] h-[67px] w-[670px]">
          Let’s try our service now!
        </h1>
        <p className="text-lg font-normal leading-[160%] text-[#FFFFFFB2] w-[445px] h-[58px]">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button className="text-lg font-medium leading-[150%] text-[#00040E] w-[170px] h-[64px]      rounded-2xl bg-gradient-to-b from-[#BEF3F5] to-[#33BBCF]">
        Get Started
      </button>
    </div>
  );
};

export default Cta;
