import React from "react";
import { Movies } from "../../Data/MovieData";
import PopularCard from "../Cards/PopularCard";
import { Swiper } from "swiper/react";

const Popular = () => {
  return (
    <>
      <h3>Popular</h3>
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        // modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className=" bg-popular flex justify-center items-center gap-10 p-24 max-[450px]:flex-wrap"
      >
        {Movies.slice(0, 8).map((index) => (
          <Movies key={index} movie={PopularCard} />
        ))}
      </Swiper>
    </>
  );
};

export default Popular;
