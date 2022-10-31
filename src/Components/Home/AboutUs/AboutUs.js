import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import part from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="flex flex-row ">
      <div className="w-3/5 -z-10">
        <img
          className="w-3/4 mx-auto "
          src={person}
          alt="person"
        />
        <div className="w-1/2 mt-[-10rem] ml-[30rem] border-4 z-10 border-white">
          <img
            className="w-3/4 "
            src={part}
            alt="part"
          />
        </div>
      </div>
      <div className="w-2/5 p-10 text-justify">
        <h5 className="text-[#FF3811] font-bold text-lg">About Us</h5>
        <h1 className="text-3xl font-semibold">
          We are qualified & of experience in this field
        </h1>
        <p className="mt-3">
          ther are many variations of passages of lorem Ipsum. Available, But
          the majority have suffered alteration in some from, by injection
          humour, or randomised words which dont look even belivable.
          <br />
          <br />
          The majority have suffered alteration in some from, by injection
          humour, or randomised words which dont look even belivable.
        </p>
        <button className="bg-[#FF3811] mt-6 p-4 hover:text-white font-semibold">
          <Link to="/about">Get More Info</Link>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
