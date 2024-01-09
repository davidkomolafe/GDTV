import React from "react";
import TrendsCard from "../Cards/TrendsCard";
import { Movies } from "../../Data/MovieData";
import {
  Swiper,
  // SwiperSlide
} from "swiper/react";

const TopRated = () => {
  return (
    <div
      className="text-textColor top-20 right-40 absolute flex flex-col gap-5 
        max-[450px]:left-0 max-[450px]:bottom-16 max-[450px]:top-auto max-[450px]:right-auto max-[450px]:h-auto max-[450px]:overflow-scroll max-[450px]:w-full
        max-[450px]:px-4 z-10 "
    >
      <h3 className="text-center max-[450px]:hidden ">Top Trends</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={false}
        speed={1000}
        scrollbar={{ draggable: true }}
      >
        <div className="flex flex-col  gap-7 max-[450px]:flex-row max-[450px]:w-70 max-[450px]:gap-4">
          {Movies.slice(0, 3).map((movie, index) => (
            // <SwiperSlide>
            <TrendsCard key={index} movie={movie} />
            // </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default TopRated;
