import React from "react";
import Image from 'next/image'
const Footer = () => {
  return (
    <div className="bg-white-300 pt-5 pb-5" id="contact">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src="/assets/logoicon.png"
            width={80}
            height={60}
            className="h-8 w-auto mb-6" />
          <p className="mb-4 mt-6">
            <strong className="font-medium"> Metal Games </strong> aspires to provide innovative gaming in the industry. The team indulges in executing numerous types of Mobile Games.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.linkedin.com/company/metal-games/" target={"_blank"}>
                <Image src="/assets/Icon/linkedin.png" width={20}
                  height={20} />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/metalgames202/" target={"_blank"}>
                <Image src="/assets/Icon/instagram.png" width={20}
                  height={20} />
              </a>
            </div>
          </div>
          <p className="text-gray-400">Copyright 2022 Metal Games | All Right Reserved | Developed by <a href="www.webixnow.com" target={"_blank"}>WebixNow</a></p>
        </div>
        <div className="secondgridfooter row-span-3 sm:col-span-2 sm:col-start-12 sm:col-end-9 flex flex-col mt-10">
          <a href="https://play.google.com/store/apps/dev?id=5523153216300081887" target={"_blank"}>
            <img
              src="/assets/playstore.png"
              className="playstorefootericon inline-flex justify-center rounded-md border border-transparent shadow-sm py-2 sm:ml-3 sm:w-auto sm:text-sm"
            />
          </a>
          <p className="text-black-600 font-medium text-lg mt-4">Email:<a href="mailto:hello@metal-games.com" className="text-orange-500"> hello@metal-games.com</a> </p>

          {/* <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Download{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Locations{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Server{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul> */}
        </div>
      </div>
    </div >
  );
};

export default Footer;
