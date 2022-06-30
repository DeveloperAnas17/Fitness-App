import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  // const activestyle = "border-"

  return (
    <div className="flex items-center shadow-sm py-2 w-full">
      <Link to="/" className="flex items-center mx-5 md:mx-14">
        <h3>Goldgyms</h3>
        <img src={Logo} alt="" className="w-[40px] h-[40px] object-contain " />
      </Link>

      <div className="flex items-center flex-[1]  space-x-12 mx-5 md:mx-14 text-2xl justify-end ">
        <Link to="/">Home</Link>
        <Link to="/exercisedetails">Blog</Link>
        <a href="#exercises" className=" decoration-0 text-[#3a1212]">
          Exercises
        </a>
      </div>
    </div>
  );
};

export default Navbar;
