import React from "react";
import { Link } from "react-router-dom";

const PopularCard = (movie) => {
  return (
    <div className="h-popular bg-hero w-30 p-6 rounded-3xl text-textColor flex flex-col justify-between outline outline-offset-4 outline-1 outline-textColorS">
      <Link>
        <div className="text-3xl flex flex-col">
          <h4 className="text-right">HD</h4>
          <h3>{movie.name}</h3>
        </div>
        <ul className="text-2xl">
          <li>Genre: Fantasy</li>
          <li>Premiere: July 24, 2019</li>
          <li>Director</li>
          <li>Year: {movie.year}</li>
          <li className="mt-5">Rating</li>
        </ul>
      </Link>
    </div>
  );
};

export default PopularCard;
