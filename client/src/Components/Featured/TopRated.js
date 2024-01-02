import React from "react";
import TrendsCard from "../Cards/TrendsCard";
import { Movies } from "../../Data/MovieData";

const TopRated = () => {
  return (
    <div
      className="text-textColor top-20 right-40
 absolute flex flex-col gap-5 
 max-[450px]:left-0
        max-[450px]:bottom-16
        max-[450px]:top-auto
        max-[450px]:right-auto
        max-[450px]:h-auto
        max-[450px]:overflow-scroll
        max-[450px]:w-full
        max-[450px]:px-4
         "
    >
      <h3 className="text-center max-[450px]:hidden ">Top Trends</h3>
      <div className="flex flex-col overflow-scroll gap-7 max-[450px]:flex-row max-[450px]:w-50 max-[450px]:gap-4">
        {Movies.slice(0, 3).map((movie, index) => (
          <TrendsCard key={index} movie={movie} />
        ))}
        {/* <div className="flex items-center gap-10">
          <div>1</div>
          <TrendsCard />
        </div>
        <div className="flex items-center gap-10">
          <div>2</div>
          <TrendsCard />
        </div>
        <div className="flex items-center gap-10">
          <div>3</div>
          <TrendsCard />
        </div> */}
      </div>
    </div>
  );
};

export default TopRated;
