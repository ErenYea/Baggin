"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../public/slider/slider-1.jpg";
import slider2 from "../../public/slider/slider-2.jpg";
import slider3 from "../../public/slider/slider-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
type Props = {};

const Slider = (props: Props) => {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper h-full"
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${slider1.src})`,
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center  h-full w-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full flex-col items-center justify-center p-4">
            {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
            <div className="ml-4 text-2xl lg:xl:md:text-4xl font-semibold text-white text-center">
              Expert Event Solutions
            </div>
            <div className="flex flex-col w-4/5 items-center justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-3xl font-semibold tracking-wide text-white ">
              <div>
                Cutting-edge technology and innovative solutions that elevate
                your events
              </div>

              {/* <div className="mt-2">Advisory Services</div> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${slider2.src})`,
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center  w-full h-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full flex-col items-center justify-center p-4">
            {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
            <div className="ml-4 text-2xl font-semibold text-white lg:xl:md:text-4xl ">
              Nationwide Event Management Services
            </div>
            <div className="flex flex-col w-4/5 items-center justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-3xl font-semibold tracking-wide text-white ">
              <div>Nationwide Event Management Services</div>

              {/* <div className="mt-2">Advisory Services</div> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] bg-cover bg-bottom"
            style={{
              backgroundImage: `url(${slider3.src})`,
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center  h-full w-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full flex-col items-center justify-center p-4">
            {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
            <div className="ml-4 text-2xl font-semibold text-white lg:xl:md:text-4xl">
              Maximize Your ROI with Endless Event Management
            </div>
            <div className="flex flex-col w-4/5 items-center justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-3xl font-semibold tracking-wide text-white ">
              <div>
                Our team of experts will help you execute your best event yet
              </div>

              {/* <div className="mt-2">Advisory Services</div> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
