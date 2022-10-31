import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-black w-full flex flex-row justify-evenly p-3">
      <div className="w-1/4 p-3 mx-2">
        <img
          src={logo}
          alt="logo"
        ></img>
        <p className="text-white text-justify mt-2">
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial
        </p>
        <div className="text-white flex w-full justify-around mt-4">
          <a
            href="www.google.com"
            className="text-lg"
          >
            <AiFillGoogleCircle></AiFillGoogleCircle>
          </a>
          <a
            href="www.twitter.com"
            className="text-lg"
          >
            <AiFillTwitterCircle></AiFillTwitterCircle>
          </a>
          <a
            href="www.instagram.com"
            className="text-lg"
          >
            <AiFillInstagram></AiFillInstagram>
          </a>
          <a
            href="www.linkedin.com"
            className="text-lg"
          >
            <AiFillLinkedin></AiFillLinkedin>
          </a>
        </div>
      </div>
      <div className="w-1/4 p-3 mx-2">
        <h4 className="text-white text-lg font-bold">About</h4>
        <ul className="text-white flex flex-col">
          <Link
            className="mt-2"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="mt-2"
            to="/services"
          >
            Service
          </Link>
          <Link
            className="mt-2"
            to="/contact"
          >
            Contact
          </Link>
        </ul>
      </div>
      <div className="w-1/4 p-3 mx-2">
        <h4 className="text-white text-lg font-bold">Company</h4>
        <ul className="text-white flex flex-col">
          <Link
            className="mt-2"
            to="/blog"
          >
            Why Car Doctor
          </Link>
          <Link
            className="mt-2"
            to="/about"
          >
            About
          </Link>
        </ul>
      </div>
      <div className="w-1/4 p-3 mx-2">
        <h4 className="text-white text-lg font-bold">Support</h4>
        <ul className="text-white flex flex-col">
          <Link
            className="mt-2"
            to=""
          >
            Support Center
          </Link>
          <Link
            className="mt-2"
            to=""
          >
            Feedback
          </Link>
          <Link
            className="mt-2"
            to=""
          >
            Accessibility
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
