import React from "react";
import Header from "../../Components/Header/Header";
import { MdKeyboardArrowDown } from "react-icons/md";

const Catalog = () => {
  return (
    <div className="h-screen bg-backgroundColor">
      <Header />
      <ul className="flex gap-10 justify-center items-center text-2xl h-32 w-full text-textColor">
        <ul className="flex items-center justify-between gap-7 rounded-2xl px-6 py-3 border">
          <li>Catalog</li>
          <li className="text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl px-6 py-3 border">
          <li>Sort By Year</li>
          <li className="text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl px-6 py-3 border">
          <li>Sort By Hours</li>
          <li className="text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
        <ul className="flex items-center justify-between gap-7 rounded-2xl px-6 py-3 border">
          <li>Sort By Rating</li>
          <li className="text-3xl">
            <MdKeyboardArrowDown />
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default Catalog;
