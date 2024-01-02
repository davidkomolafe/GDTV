import React from "react";

import Header from "../Components/Header/Header";
import Banner from "../Components/Featured/Banner";
import TopRated from "../Components/Featured/TopRated";
// import Popular from "../Components/Featured/Popular";

const Layout = () => {
  return (
    <div className="h-full bg-hero max-[450px]:w-screen">
      <Header />
      <div className="text-2xl relative h-hero max-[450px]:w-full">
        <Banner />
        <TopRated />
      </div>
      <div className=" bg-accent h-20 flex justify-center items-center gap-10 p-24 max-[450px]:flex-wrap">
        {/* <Popular /> */}
      </div>
    </div>
  );
};

export default Layout;
