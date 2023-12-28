import React from "react";
import logo from "../../Assets/img/logo.png";
import profile from "../../Assets/img/photo.png";
import { HiMenuAlt3, HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky z-10 top-0">
      <header className="relative flex items-center justify-between px-10 top-0 h-40 bg-header text-textColor ">
        <img src={logo} alt="" className="left-16 w-16 ml-7 max-[450px]:ml-0" />
        <ul className="flex flex-row gap-10 left-30 items-center justify-center text-3xl cursor-pointer max-[450px]:hidden">
          <Link to="/popular">
            <li className="hover:text-accent">Popular</li>
          </Link>
          <Link to="/film">
            <li className="hover:text-accent">Films</li>
          </Link>
          <Link to="/tv-series">
            <li className="hover:text-accent">TV series</li>
          </Link>
          <Link to="/catalog">
            <li className="hover:text-accent">Catalog</li>
          </Link>
        </ul>
        <div className="text-3xl flex flex-row items-center gap-10">
          <p className="text-2xl px-7 py-3.5 bg-accent rounded-3xl transition delay-100 ease-in hover:scale-75 hover:outline-double outline-accent max-[450px]:hidden ">
            Premium
          </p>
          <div className="flex flex-row items-center gap-5 max-[450px]:flex-row-reverse">
            <img className="w-16 max-[450px]:w-14" src={profile} alt="" />
            <h3 className="text-3xl ">David Komolafe</h3>
          </div>
          <HiOutlineSearch className=" max-[450px]:hidden" />
          <HiMenuAlt3 />
        </div>
      </header>
    </div>
  );
};

export default Header;
