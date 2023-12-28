import React from "react";
import Header from "../../Components/Header/Header";
import { MdKeyboardArrowDown } from "react-icons/md";

const Catalog = () => {
  return (
    <div className="h-screen bg-backgroundColor">
      <Header />
      <ul className="flex gap-10 justify-center items-center text-2xl h-32 w-full text-textColor">
        <ul className="flex items-center justify-between gap-7 rounded-2xl  border divide-x-2">
          <li className="px-5 py-3">Catalog</li>
          <li className="cursor-pointer px-4 py-3 text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl divide-x-2 border">
          <li className="px-5 py-3">Sort By Year</li>
          <li className="cursor-pointer px-4 py-3 text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl divide-x-2 border">
          <li className="px-5 py-3">Sort By Hours</li>
          <li className="cursor-pointer px-4 py-3 text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl divide-x-2 border">
          <li className="px-5 py-3">Sort By Rating</li>
          <li className="cursor-pointer px-4 py-3 text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Catalog;
