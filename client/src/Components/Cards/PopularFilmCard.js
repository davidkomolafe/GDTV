import React from "react";

const PopularFilmCard = () => {
  return (
    <div className="w-20 h-popular flex flex-col border-textColorS rounded-xl  bg-backgroundColorFadeL p-4 ">
      <div className="bg-hero-hps bg-cover bg-center bg-no-repeat w-full h-full  "></div>
      <div>
        <div className="flex items-center justify-between mt-4">
          <h3 className="font-semibold text-3xl">Vengeance</h3>
          <span className="text-textColorS">2021</span>
        </div>
        <div className="flex items-center mt-2 justify-between text-textColorS text-xl">
          <h3>❤❤❤❤</h3>
          <span>7.8 (4,223)</span>
        </div>
      </div>
    </div>
  );
};

export default PopularFilmCard;
