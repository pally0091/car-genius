import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { BsCart } from "react-icons/bs";

const Header = () => {
  return (
    <navbar className="bg-white fixed top-0 w-full flex justify-between items-center border-2 border-b-black p-3">
      <div className="mx-2">
        <img
          src={logo}
          alt="logo"
        />
      </div>
      <div className="flex flex-row">
        <Link
          className="mx-4 text-lg font-bold hover:text-red-500"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="mx-4 text-lg font-bold hover:text-red-500"
          to="/about"
        >
          About
        </Link>
        <Link
          className="mx-4 text-lg font-bold hover:text-red-500"
          to="/services"
        >
          Services
        </Link>
        <Link
          className="mx-4 text-lg font-bold hover:text-red-500"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="mx-4 text-lg font-bold hover:text-red-500"
          to="/contact"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center justify-between w-4/10">
        <div className="mx-2">
          <Link>
            <BsCart></BsCart>
          </Link>
        </div>
        <div className="mx-2">
          <button className="font-bold border-2 border-[#FF3811] p-3 hover:text-[#FF3811]">
            Appointment
          </button>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
