import React from "react";
import logo from "../../Assets/img/logo.png";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="relative w-full bg-hero-signup">
      <header className="absolute w-full flex items-center h-44 py-10">
        <img src={logo} alt="" className=" absolute left-16 w-16 " />
        <Link
          className="bg-accent hover:bg-red-800 text-primary text-2xl rounded-lg px-6 py-3 right-16 absolute"
          to="/login"
        >
          <button>Sign in</button>
        </Link>
      </header>
      <div className="max-[450px]:p-14 max-[450px]:text-center w-100% bg-backgroundColorFade shadow-bx  bg-cover bg-fixed bg-no-repeat p- text-3xl  h-screen flex flex-col justify-center items-center">
        <h3 className="text-primary text-center text-6xl font-semibold">
          Unlimited Movies, TV Shows and more...
        </h3>
        <p className="text-textColor my-7">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="max-[450px]:flex-col max-[450px]:items-center max-[450px]:gap-7 flex flex-row gap-6">
          <label className="flex gap-3 items-center bg-backgroundColor bg-opacity-50 border-textColor border rounded-lg py-4 px-6 w-30 text-white text-2xl">
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
          <button
            className="bg-accent hover:bg-red-800 flex gap-3 items-center text-primary rounded-lg px-6 py-3 text-3xl"
            type="submit"
          >
            Get Started <IoMdArrowDroprightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
