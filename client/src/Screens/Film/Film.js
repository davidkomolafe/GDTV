import React from "react";
import Header from "../../Components/Header/Header";
import NewFilmCard from "../../Components/Cards/NewFilmCard";
import PopularFilmCard from "../../Components/Cards/PopularFilmCard";
import { MdKeyboardArrowDown } from "react-icons/md";

const Film = () => {
  return (
    <div className="h-full bg-backgroundColor  ">
      <Header />
      <div className="flex p-16 w-full relative">
        <div className="h-height w-30 bg-backgroundColorFadeL fixed rounded-xl z-10 text-textColor px-8 text-2xl flex flex-col">
          <div className="flex justify-between items-center py-4 pt-8 border-b-2 border-popular">
            <p className="">Catalog</p>
            <MdKeyboardArrowDown className="bg-popular rounded-lg p-1 text-3xl" />
          </div>

          <div className="flex justify-between items-center py-4 pt-8 border-b-2 border-popular">
            <p className="">Year</p>
            <MdKeyboardArrowDown className="bg-popular rounded-lg p-1 text-3xl" />
          </div>
          <div className="flex justify-between items-center py-4 pt-8 border-b-2 border-popular">
            <p className="">Hours</p>
            <MdKeyboardArrowDown className="bg-popular rounded-lg p-1 text-3xl" />
          </div>
          <div className="flex justify-between items-center py-4 pt-8 border-b-2 border-popular">
            <p className="">Rating</p>
            <MdKeyboardArrowDown className="bg-popular rounded-lg p-1 text-3xl" />
          </div>
        </div>
        <div className="w-full relative pl-35">
          <div className="w-full items-start flex flex-col gap-4">
            <h3 className="text-textColor text-3xl">New Films</h3>
            <ul className="flex gap-5 mx-0 my-auto items-center text-2xl text-textColor">
              <NewFilmCard />
              <NewFilmCard />
              <NewFilmCard />
            </ul>
          </div>
          <div className="w-full items-start mt-10 flex flex-col gap-4">
            <h3 className="text-textColor text-3xl">Popular Movies</h3>
            <ul className="flex gap-5 mx-0 my-auto w-full flex-wrap items-center text-2xl text-textColor">
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
              <PopularFilmCard />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
