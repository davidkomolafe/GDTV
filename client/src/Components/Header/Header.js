import React from "react";
import logo from "../../Assets/img/logo.png";
import profile from "../../Assets/img/photo.png";
import { HiMenuAlt3, HiOutlineSearch } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const hover = "hover:text-accent text-textColor";
  const Hover = ({ isActive }) => (isActive ? "text-accent" : hover);
  return (
    <>
      <header className="sticky z-20 bg-header top-0 text-textColor text-2xl flex items-center justify-between px-10 h-36 max-[450px]:h-32">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="left-16 w-16 ml-7 max-[450px]:ml-0 max-[450px]:w-12"
          />
        </Link>
        <ul className="flex flex-row gap-14 left-30 items-center justify-center max-[450px]:hidden">
          <NavLink className={Hover} to="/popular">
            <li>Popular</li>
          </NavLink>
          <NavLink className={Hover} to="/film">
            <li>Films</li>
          </NavLink>
          <NavLink className={Hover} to="/tv-series">
            <li>TV series</li>
          </NavLink>
          <NavLink className={Hover} to="/catalog">
            <li>Catalog</li>
          </NavLink>
        </ul>
        <div className="text-2xl flex flex-row items-center justify-center gap-6">
          <Link to="/">
            <p className="px-7 py-3 bg-accent rounded-2xl hover:outline-double outline-accent max-[450px]:hidden ">
              Premium
            </p>
          </Link>

          <div className="cursor-pointer flex flex-row items-center justify-center gap-6">
            <img
              className="w-16 rounded-full hover:outline outline-offset-2 outline-1 outline-accent max-[450px]:w-12"
              src={profile}
              alt="user-profile"
            />
            {/* <h3 className="text-3xl ">David Komolafe</h3> */}
            <HiOutlineSearch className="cursor-pointer teext-3xl max-[450px]:hidden" />
            <HiMenuAlt3 className="hidden text-3xl max-[450px]:block" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
