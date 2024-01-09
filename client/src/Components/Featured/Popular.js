import React, { useState } from "react";
import { Movies } from "../../Data/MovieData";
import { Link } from "react-router-dom";
import Rating from "../Cards/Rating";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Navigation, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Popular = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:text-accent text-3xl w-28 flex-col h-popular flex items-center justify-center text-textColor h-full bg-black px-14 bg-opacity-90 ";
  return (
    <div className="">
      <h3 className="text-textColor text-3xl  font-semibold ml-14 mt-5">
        Popular Movies
      </h3>
      <div className="mt-14 relative">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={7.5}
          spaceBetween={1}
          loop={true}
          speed={1000}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-popular w-25  rounded-3xl border border-opacity-45 border-textColorS p-3 overflow-hidden">
                <img
                  src={`/img/${movie.titleImage}`}
                  alt={movie.title}
                  className="w-full h-full object-cover rounded-3xl object-center"
                />

                <div className="absolute opacity-100 hover:opacity-100 hover:bg-accent hover:bg-opacity-70 h-full w-full top-0 left-0 p-6 flex flex-col justify-between">
                  <div className="text-3xl  font-semibold flex flex-col">
                    <h4 className="text-right">HD</h4>
                    <Link to={`/img/${movie.name}`} className="hover:underline">
                      {movie.name}
                    </Link>
                  </div>
                  <ul className="text-2xl  hover:text-textColor ">
                    <li>Genre: {movie.category}</li>
                    <li>Premiere: July 24, 2019</li>
                    <li>Director</li>
                    <li>Year: {movie.year}</li>
                    <li className="mt-5 flex gap-2 text-accent">
                      <Rating value={movie.rate} />
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full absolute top-0 flex justify-between items-center z-50 flex-row ">
          <button
            className={`${classNames}, linear-l`}
            ref={(node) => setPrevEl(node)}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`${classNames}, linear-p`}
            ref={(node) => setNextEl(node)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
