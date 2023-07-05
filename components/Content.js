import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const Content = (props) => {
  const games = props?.games;
  const client = createClient({
    projectId: "03zqzche",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  const [sliderRef, setSliderRef] = useState(null);
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(false);
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="Content"
    >
      <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-2 px-12 pb-10">
        <div className="">
          <Image
            src={"/assets/logometal.png"}
            width={600}
            height={460}
            className="rounded-lg"
          />
        </div>
        <div className="mt-8" id="about">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            METAL GAMES
          </h3>
          <p className="leading-normal w-12/12 sm:w-12/12 lg:w-12/12 mx-auto my-2 text-left mt-4">
            Metal Games is a hyper-casual game studio founded in March 2022.
          </p>
          <p className="leading-normal w-12/12 sm:w-12/12 lg:w-12/12 mx-auto my-2 text-left mt-4">
            Metal Games aspires to provide innovative gaming in the industry.
            The team indulges in executing numerous types of Mobile Games. We
            aim to create great addictive free-to-play hyper-casual games.
          </p>
        </div>
      </div>

      <div
        id="our-latest-games"
        className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center"
      >
        <div className="flex flex-col w-full">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            OUR LATEST GAMES
          </h3>
          <p className="leading-normal w-12/12 sm:w-7/12 lg:w-8/12 mx-auto my-2 text-center">
            We are a mobile video game studio that will take you around the
            world by blowing everything up in your path, while cleaning the
            dirty walls of the cities you encounter seated in a Paper Plane!
          </p>
          <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 pb-10">
            {games?.map((e, i) => {
              return (
                <div className="px-3 flex items-stretch mt-10" key={i}>
                  <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg flex flex-col ">
                    <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                      <div className="">
                        <Image
                          src={builder.image(e.featurImage).url()}
                          width={300}
                          height={200}
                          alt="Icon People"
                          className="rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="flex flex-col text-center my-5">
                          <p className="text-lg text-black-600 capitalize">
                            {e.title}
                          </p>
                          <p className="text-sm text-black-500 capitalize">
                            {e.appStoreLink !== undefined &&
                            e.playStoreLink !== undefined
                              ? "Available on iOS & Android"
                              : e.appStoreLink !== undefined
                              ? "Available on iOS"
                              : e.playStoreLink !== undefined
                              ? "Available onAndroid"
                              : null}
                          </p>
                        </div>
                        <div className="my-5">
                          <button
                            onClick={() => {
                              setPopUpContent(e);
                              setPopUp(true);
                            }}
                            className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                          >
                            Get More Information
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col w-full my-16" id="more-games">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-12/12 sm: lg:w-12/12 mx-auto">
            More Games
          </h3>
          {/* <p className="leading-normal mx-auto mb-2 mt-4 w-12/12 sm:w-12/12 lg:w-12/12">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p> */}
          <div className="w-full flex flex-col py-5">
            <Slider
              {...settings}
              arrows={false}
              ref={setSliderRef}
              className="flex items-stretch justify-items-stretch"
            >
              {games.map((e, i) => (
                <div className="px-3 flex items-stretch mt-10" key={i}>
                  <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg flex flex-col">
                    <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                      <div className="">
                        <Image
                          src={builder.image(e.featurImage).url()}
                          width={500}
                          height={300}
                          alt="Icon People"
                          className="rounded-tl-lg rounded-tr-lg"
                        />
                        <div className="flex flex-col text-center my-5">
                          <p className="text-lg text-black-600 capitalize">
                            {e.title}
                          </p>
                          <p className="text-sm text-black-500 capitalize">
                            {e.appStoreLink !== undefined &&
                            e.playStoreLink !== undefined
                              ? "Available on iOS & Android"
                              : e.appStoreLink !== undefined
                              ? "Available on iOS"
                              : e.playStoreLink !== undefined
                              ? "Available on Android"
                              : null}
                          </p>
                        </div>
                        <div className="my-5">
                          <button
                            onClick={() => {
                              setPopUpContent(e);
                              setPopUp(true);
                            }}
                            className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
                          >
                            Get More Information
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="flex w-full items-center justify-end">
              <div className="flex flex-none justify-between w-auto mt-14">
                <div
                  className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                  onClick={sliderRef?.slickPrev}
                >
                  <ArrowBack className="h-6 w-6 " />
                </div>
                <div
                  className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                  onClick={sliderRef?.slickNext}
                >
                  <ArrowNext className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {popUp == true ? (
        <div
          class="relative z-10 bg-white-500"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="false"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"></div>
          <div class="fixed z-10 inset-0 overflow-y-auto">
            <div class="flex items-end sm:items-center justify-center min-h-full p-1 text-center sm:p-0">
              <div class="mainPopUprelative bg-white-500 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                <div class="bg-white-500 px-1 pt-5 pb-4 sm:p-5 sm:pb-4">
                  <div class="sm:flex sm:items-start lg:flex lg:items-start md:flex md:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        {popUpContent.title}
                      </h3>
                      <div className="mt-4">
                        <Image
                          src={builder.image(popUpContent.featurImage).url()}
                          width={650}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                      <div class="mt-2">
                        <p class="text-sm">{popUpContent.body}</p>
                      </div>
                    </div>
                    <button onClick={() => setPopUp(false)}>
                      <img
                        src="/assets/Icon/cancel.png"
                        width={45}
                        height={45}
                        className="cancleIcon"
                      />
                    </button>
                  </div>
                </div>
                <div class="bg-gray-50 px-4  py-3  sm:px-6 sm:flex playStoreContainer">
                  <div className="mt-5">
                    <span className="text-sm">
                      Release date: {popUpContent._createdAt.slice(0, 10)}
                    </span>
                  </div>
                  <div class="bg-gray-50 px-7 py-3 sm:flex lg:flex sm:flex-row lg:flex-row playStoreIcons">
                    {popUpContent.appStoreLink !== undefined &&
                    popUpContent.playStoreLink !== undefined ? (
                      <div>
                        {" "}
                        <a href={popUpContent.appStoreLink} target={"_blank"}>
                          {" "}
                          <Image
                            src="/assets/appstore.png"
                            width={140}
                            height={50}
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                          />
                        </a>
                        <a href={popUpContent.playStoreLink} target={"_blank"}>
                          <Image
                            src="/assets/playstore.png"
                            width={140}
                            height={50}
                            className="mx-5 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                          />
                        </a>
                      </div>
                    ) : popUpContent.appStoreLink !== undefined ? (
                      <a href={popUpContent.appStoreLink} target={"_blank"}>
                        <Image
                          src="/assets/appstore.png"
                          width={140}
                          height={50}
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                        />
                      </a>
                    ) : popUpContent.playStoreLink !== undefined ? (
                      <a href={popUpContent.playStoreLink} target={"_blank"}>
                        <Image
                          src="/assets/playstore.png"
                          width={140}
                          height={50}
                          className="mx-5 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 sm:ml-3 sm:w-auto sm:text-sm"
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
