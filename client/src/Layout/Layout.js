import React from "react";

import TrendsCard from "../Components/Cards/TrendsCard";
import PopularCard from "../Components/Cards/PopularCard";
import { MdPlayArrow } from "react-icons/md";
import Header from "../Components/Header/Header";

const Layout = () => {
  return (
    <div className="h-screen bg-gray-500 max-[450px]:w-fit">
      <Header />
      <div className="text-3xl relative h-hero bg-hero max-[450px]:w-full">
        <div className="h-0 w-0 border-l-1 border-r-1  border-r-transparent border-l-transparent border-t-30 border-textColor absolute top-40 left-28 z-1 max-[450px]:hidden"></div>
        <div className="text-textColor bg-hero-hps w-full bg-cover bg-center bg-fixed bg-no-repeat h-full  px-50 max-[450px]:px-20">
          <div className="absolute top-40 ">
            <h3 className="text-lg text-textColorS">POPULAR</h3>
            <h3 className="font-semibold text-6xl mt-5">Batman: DC FIlms</h3>
            <h4 className="mt-5 mb-5">Rating</h4>
            <p className="text-2xl text-textColorS w-40">
              Lorem ipdsajdnsidjm pdsajdnsidjm dhfdkafd djfadkfad jdkaedjei
              ascdhakfwebjpdsajdnsidjm dhfdkafd djfadkfad jdkaedjei ascdhakfwebj
              dhfdkafd djfadkfad jdkaedjei ascdhakfwebj{" "}
            </p>
            <h3 className="text-accent mt-10 mb-3">Fantasy</h3>
            <p>2021</p>
            <div className="relative mt-10 flex items-center w-80">
              <h3 className="w-64 p-4 pl-8 rounded-s-radius bg-accent">
                Watch Online
              </h3>
              <MdPlayArrow className="bg-textColor absolute right-5 text-accent outline-8 outline-textColor/50 outline ring-opacity-80 rounded-radius p-3 text-7xl " />
            </div>
          </div>
        </div>
        <div
          className="text-textColor top-20 right-60
 absolute flex flex-col gap-5 
        max-[450px]:bottom-16
        max-[450px]:top-auto
        max-[450px]:right-auto
        max-[450px]:height-10
        max-[450px]:overflow-scroll
        max-[450px]:w-full
        max-[450px]:pl-20
        max-[450px]:-webkit-scrollbar-hidden
        
        max-[450px]:flex-col "
        >
          <h3 className="text-center max-[450px]:hidden ">Top Trends</h3>
          <div className="flex flex-col gap-7 max-[450px]:flex-row max-[450px]:w-full max-[450px]:gap-10">
            <div className="flex items-center gap-10">
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
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-popular flex justify-center items-center gap-10 p-24 max-[450px]:flex-wrap">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
};

export default Layout;
