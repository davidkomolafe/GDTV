import React from "react";

const PopularCard = () => {
  return (
    <div className="h-popular bg-hero w-wTrend p-10 rounded-3xl text-textColor flex flex-col justify-between outline outline-offset-4 outline-1 outline-textColorS">
      <div className="text-3xl flex flex-col">
        <h4 className="text-right ">HD</h4>
        <h3>AVENGERS: ENDGAME</h3>
      </div>
      <ul className="text-2xl">
        <li>Genre: Fantasy</li>
        <li>Premiere: July 24, 2019</li>
        <li>Director</li>
        <li>Year: 2019</li>
        <li className="mt-5">Rating</li>
      </ul>
    </div>
  );
};

export default PopularCard;
