import { useState } from "react";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-8 mt-6  flex justify-between items-center max-w-[80%] mx-auto  ">
      <img src={logo} alt="logo of site" className="w-[124px] h-[32px]" />

      <div className="hidden sm:block">
        <ul className="flex items-center justify-center gap-8 text-xl font-bold ">
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
