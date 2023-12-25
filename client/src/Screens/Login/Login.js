import React from "react";
import logo from "../../Assets/img/logo.png";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative w-full bg-hero-login bg-cover bg-fixed bg-no-repeat ">
      <header className="absolute w-full flex items-center h-44 py-10">
        <img src={logo} alt="" className=" absolute left-16 w-16 " />
      </header>
      <div className="max-[450px]:p-9 max-[450px]:text-center w-100% p-2 text-3xl h-screen flex flex-col justify-center items-center bg-backgroundColorFadeL">
        <div className="bg-black rounded-radius p-28 max-[450px]:p-6 bg-opacity-50 w-45 max-[450px]:w-full h-height">
          <h3 className="text-primary text-6xl font-semibold text-left">
            Sign In
          </h3>
          <div className="max-[450px]:flex-col max-[450px]:items-center max-[450px]:gap-9 flex flex-col gap-6 mt-10">
            <label className="flex gap-3 items-center bg-backgroundColor bg-opacity-50 border-textColor border rounded-lg py-5 px-6 w-full text-white text-2xl">
              <MdEmail className="text-textColor" />
              <input
                className="bg-transparent w-full 
              outline-0"
                type="email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email address"
              />
            </label>
            <label className="flex gap-3 items-center bg-backgroundColor bg-opacity-50 border-textColor border rounded-lg py-5 px-6 w-full text-white text-2xl">
              <MdLock />
              <input
                className="bg-transparent w-full 
              outline-0"
                type="password"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
            </label>
            <Link
              className="bg-accent hover:bg-red-800 flex gap-3 items-center text-primary rounded-lg px-9 py-6 text-3xl my-9 justify-center max-[450px]:w-full"
              to="/"
            >
              <button type="submit">Sign In</button>
            </Link>
          </div>
          <div className="text-textColor flex items-center gap-3">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="text-textColorS max-[450px]:text-left">
            <h4 className=" mt-28 mb-10">
              New to GloryDrip?{" "}
              <span className="text-primary">Sign up now</span>
            </h4>
            <h5>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <span className="text-accent">Learn more.</span>
            </h5>
          </div>
        </div>
      </div>
      <ul className="max-[450px]:text-2xl absolute w-full flex flex:col gap-20 justify-center text-3xl text-textColorS items-center h-44 bottom-0 bg-black bg-opacity-50 py-10">
        <li className="hover:text-accent">About Us</li>
        <li className="hover:text-accent">Privacy</li>
        <li className="hover:text-accent">Terms of Use</li>
        <li className="hover:text-accent">Help</li>
      </ul>
    </div>
  );
};

export default Login;
