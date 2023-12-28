import React from "react";
import { MdPlayArrow } from "react-icons/md";

const NewFilmCard = () => {
  return (
    <div className="flex gap-8 bg-backgroundColorFadeL  w-40 h-30 p-5 rounded-2xl ">
      <div className="bg-hero-hps bg-cover bg-center bg-no-repeat w-25 h-full  "></div>
      <div className="text-textColorS w-full p-2 whitespace-normal">
        <h3 className="font-semibold text-3xl text-textColor">Kate</h3>
        <div className="flex gap-3 my-4">
          <span> 2021 </span>
          <span> Adventures, Drama </span>
        </div>
        <p className="text-xl my-4 h-watch">
          loremd disdnin dhsbdisdns sbdsidnowdeyhw sxbsyudbweuid edbqsydgyeu
          weudbeuqwd edbqwie eudbwiqeu edbqdbieub edqybdieu
        </p>
        <span> IMBD </span>
        <div className="flex gap-3 mt-4 text-xl">
          <span> 🧡🧡🧡🧡 </span>
          <span> 6.5 (3,233) </span>
        </div>

        <div className="relative mt-8 flex items-center w-watch">
          <h3 className="w-full p-watch pl-7 rounded-s-radius bg-accent">
            Watch Now
          </h3>
          <MdPlayArrow className="bg-textColor absolute -right-6 text-accent outline-8 outline-textColor/50 outline ring-opacity-80 rounded-radius p-3 text-6xl " />
        </div>
      </div>
    </div>
  );
};

export default NewFilmCard;
