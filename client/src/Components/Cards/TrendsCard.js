import React from "react";

const TrendsCard = () => {
  return (
    <div className="h-trend bg-popular w-30 rounded-3xl flex flex-col justify-between p-6">
      <div className="text-3xl flex justify-between">
        <h3 className="w-3/5">AVENGERS: END GAME</h3>
        <h4 className="text-right ">HD</h4>
      </div>
      <p className="mt-5 text-2xl">Rating</p>
    </div>
  );
};

export default TrendsCard;
