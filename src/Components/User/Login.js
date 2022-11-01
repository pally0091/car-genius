import React from "react";
import login from "../../assets/images/login/login.svg";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineGoogle, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-32 p-10">
      <div className="flex flex-row m-9/12 mx-auto">
        <div className="w-1/2 p-10 border-2 border-y-black border-x-green-500">
          <h1 className="text-3xl text-center">Login</h1>

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full mt-5 text-3xl rounded-lg p-4 text-white"
          ></input>
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            className="w-full mt-5 text-3xl rounded-lg p-4 text-white"
          ></input>
          <button className="bg-gray-500 hover:bg-blue-500 w-full mt-5 p-4 rounded-xl">
            Login
          </button>
          <div>
            <p className="text-center mt-6">Login with--</p>
            <div className="mt-4 flex flex-row justify-evenly">
              <button className="rounded-full text-3xl border-2 border-black ">
                <FiFacebook></FiFacebook>
              </button>
              <button className="rounded-full text-3xl border-2 border-black ">
                <AiOutlineGoogle></AiOutlineGoogle>
              </button>
              <button className="rounded-full text-3xl border-2 border-black ">
                <AiFillGithub></AiFillGithub>
              </button>
            </div>
          </div>
          <p className="text-center mt-5 ">
            New here please
            <span className="text-blue-400 mx-2">
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </div>
        <div className="w-1/2 p-10">
          <img
            src={login}
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
