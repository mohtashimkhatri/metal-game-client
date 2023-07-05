import React from "react";
import Image from "next/image";
const Hero = ({
  listUser = [
    {
      name: "MILLION DOWNLOADS",
      number: "450",
      icon: "/assets/Icon/download.png",
    },
    {
      name: "RANK #1 COUNTRIES MULTIPLE TIMES",
      number: "55",
      icon: "/assets/Icon/win.png",
    },
    {
      name: "YEARS OF NON STOP GAMING",
      number: "1000",
      icon: "/assets/Icon/calendar.png",
    },
    {
      name: "BILLION GAMES PLAYED",
      number: "100",
      icon: "/assets/Icon/games.png",
    },
  ],
}) => {
  return (
    <div className=" mt-24 " >
      <img src="/assets/secondherobg.jpeg" style={{ width: '100%' }} />
      {/* <div className="relative w-full flex" id='kpi'>
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-4 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-12/12 px-2 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="flex mx-auto w-80 sm:w-auto">
                <div className="flex items-center justify-center  w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-10 w-10" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Hero;
