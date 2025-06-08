import React from "react";

const Stats = () => {
  return (
    // <div className=" absolute h-20  w-[80%] ml-[9%] ">Stats</div>
    <div className="flex w-[100%] px-[10%] mb-10 justify-between">
      <p className="text-4xl font-semibold">3800+ <span className="text-xl bg-radial from-[#33BBCF] via-[#9DEDF0] to-[#DEF9FA] text-transparent bg-clip-text font-normal ">USER ACTIVE</span></p>
      <p className="text-4xl font-semibold">230+  <span className="text-xl bg-radial from-[#33BBCF] via-[#9DEDF0] to-[#DEF9FA] text-transparent bg-clip-text font-normal ">TRUSTED BY COMPANY</span></p>
      <p className="text-4xl font-semibold">$230+ <span className="text-xl bg-radial from-[#33BBCF] via-[#9DEDF0] to-[#DEF9FA] text-transparent bg-clip-text font-normal ">TRANSACTION</span></p>
    </div>
  );
};

export default Stats;
