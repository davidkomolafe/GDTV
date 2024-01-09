import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const TrendsCard = ({ movie }) => {
  return (
    <div className="relative h-trend rounded-3xl w-30 flex flex-col hover:transition hover:scale-1 max-[450px]:w-30">
      <Link to={`/movies/${movie.name}`} className="w-full h-full">
        <img
          src={`/img/${movie.image}`}
          alt={movie.title}
          className="w-full h-full object-cover rounded-3xl object-center"
        />
        <div className="absolute w-full top-0 left-0 p-6 text-3xl font-semibold flex justify-between">
          <h3 className="w-3/5">{movie.name}</h3>
          <h4 className="text-right ">HD</h4>
        </div>
        <p className="absolute bottom-0 p-6 text-2xl text-accent flex gap-2">
          <Rating value={movie.rate} />
        </p>
      </Link>
    </div>
  );
};

export default TrendsCard;
