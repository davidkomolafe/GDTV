import React from "react";
import Header from "../../Components/Header/Header";
import Filters from "./Filters";
import { Movies } from "../../Data/MovieData";
import NewFilmCard from "../../Components/Cards/NewFilmCard";
// import TrendsCard from "../../Components/Cards/TrendsCard";
// import PopularCard from "../../Components/Cards/PopularCard";
// import PopularFilmCard from "../../Components/Cards/PopularFilmCard";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Header />
      <Filters />
      <p className="text-lg font-medium my-6">
        Total{" "}
        <span className="font-bold text-accent" {...Movies?.length}>
          Items found
        </span>
      </p>
      <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
        {Movies.map((movie, index) => (
          <NewFilmCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
