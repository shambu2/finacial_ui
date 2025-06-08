import { useState } from "react";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-8 my-6  border border-black bg-[#00040F]/50 -z-10  flex justify-between items-center max-w-[80%] mx-auto  ">
      <img src={logo} alt="logo of site" className="w-[124px] h-[32px]" />

      <div className="hidden relative sm:block">
        <div className="absolute h-[400px] w-[400px] rounded-4xl  bg-gradient-to-b to-[#687bd8] from-white blur-[123px] -top-96  right-16 z-10"/>
        {/* <div className="absolute h-[200px] w-[300px] bg-gradient-to-b from-[#c7b2c7] to-[#4961d9] blur-3xl -top-56 right-96 z-10"/> */}
        {/* <div className="absolute h-[35%] w-[20%] bg-gradient-to-b from-[#dac4da] to-[#9e2f2f] blur-3xl left-1/4 z-0 top-[100p]"/> */}
        <ul className="flex backdrop-blur-3xl z-50 shadow-2xl bg-black/10 items-center justify-center gap-8 text-xl font-bold ">
          <li>Home</li>
          <li>About Us</li>
          <li>Features</li>
          <li>solution</li>
        </ul>
      </div>
      <div className="sm:hidden flex flex-cols ">
        <div>
          <img
            src={toggle ? close : menu}
            alt=""
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            }  items-center justify-center gap-4 absolute p-6 top-20 right-0 mx-4 min-w-[140px] rounded-xl bg-gradient-to-b from-white/20 to-black/30 border border-gray-700  `}
          >
            <ul className="gap-4 text-lg flex flex-col ">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>solution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
