import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MovieData";
import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative w-full h-hero ">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={3000}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full h-hero overflow-hidden "
      >
        {Movies.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative text-textColor ">
            <div className="absolute top-40 max-[450px]:hidden">
              <div className="h-0 w-0 border-l-1 border-r-1 border-r-transparent border-l-transparent border-t-30 border-textColor absolute top-0 left-28 z-1"></div>
              <div className="move-in absolute top-0 left-navigate w-6 h-6 bg-textColor rounded-full"></div>
            </div>

            <img
              src={`/img/${movie.image}`}
              alt={movie.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute top-40 max-[450px]:left-0 ">
              <div className="absolute left-44 top-0 max-[450px]:left-20 ">
                <h3 className="text-2xl text-textColorS">{movie.type}</h3>
                <h3 className="font-semibold text-6xl mt-5">{movie.name}</h3>
                <h4 className="mt-5 mb-5">Rating</h4>
                <p className="text-2xl text-textColorS w-40">{movie.desc} </p>
                <h3 className="text-accent mt-10 mb-3">{movie.category}</h3>
                <p>{movie.year}</p>
                <div className="relative mt-10 flex flex-col items-start w-80">
                  <h3 className="w-64 p-4 pl-8 rounded-s-radius bg-accent">
                    Watch Online
                  </h3>
                  <Link to={`/img/${movie.name}`}>
                    <MdPlayArrow className="bg-textColor -top-1 absolute right-5 text-accent outline-8 outline-textColor/50 outline ring-opacity-80 rounded-radius p-3 text-7xl " />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
