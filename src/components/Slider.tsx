"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

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
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] "
            style={{
              backgroundImage:
                "url('https://helloendless.com/wp-content/uploads/2021/12/Background.jpg')",
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-start container w-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full items-center">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              About Us
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-lg font-semibold tracking-wide text-white ">
            <div>
              A consulting firm specializing in business development and
              financing solutions for Africa focused companies. Founded in 2015,
              we are a boutique firm strategically placed in the U.S.A, France
              and Kenya to capitalize on available funding and project
              opportunities. Our wide range of partnerships ensure we advise on
              projects with the lowest credit and off-take risks.
            </div>
            <div className="mt-2">
              We make it easier for your business to cross into other African
              markets by acting as representatives or resident consultants.
            </div>
            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              Our role
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:lg:xl:text-lg font-semibold tracking-wide text-white ">
            <div>
              We accompany your business in sourcing finance to expand in
              various African markets. Our goal is to have a bespoke approach in
              selecting and matching your vision for expansion with various
              investors in our network. Our company is dedicated to finding the
              best funding fit that matches your company values.
            </div>

            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] "
            style={{
              backgroundImage:
                "url('https://helloendless.com/wp-content/uploads/2021/12/IMG_20190604_082306.jpg')",
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-start container w-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full items-center">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              About Us
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-lg font-semibold tracking-wide text-white ">
            <div>
              A consulting firm specializing in business development and
              financing solutions for Africa focused companies. Founded in 2015,
              we are a boutique firm strategically placed in the U.S.A, France
              and Kenya to capitalize on available funding and project
              opportunities. Our wide range of partnerships ensure we advise on
              projects with the lowest credit and off-take risks.
            </div>
            <div className="mt-2">
              We make it easier for your business to cross into other African
              markets by acting as representatives or resident consultants.
            </div>
            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              Our role
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:lg:xl:text-lg font-semibold tracking-wide text-white ">
            <div>
              We accompany your business in sourcing finance to expand in
              various African markets. Our goal is to have a bespoke approach in
              selecting and matching your vision for expansion with various
              investors in our network. Our company is dedicated to finding the
              best funding fit that matches your company values.
            </div>

            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-full z-10">
          {/* <Slider /> */}
          <div
            className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about h-[200px] "
            style={{
              backgroundImage:
                "url('https://helloendless.com/wp-content/uploads/2022/04/oscars-2022-scaled.jpg')",
            }}
          >
            {/* <div className="about-divider"></div> */}
          </div>
        </div>
        <div className="flex  flex-col items-center justify-start container w-full absolute top-0 mt-4 md:xl:lg:mt-32 right-0  text-white pl-1">
          <div className="flex w-full items-center">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              About Us
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:xl:lg:text-lg font-semibold tracking-wide text-white ">
            <div>
              A consulting firm specializing in business development and
              financing solutions for Africa focused companies. Founded in 2015,
              we are a boutique firm strategically placed in the U.S.A, France
              and Kenya to capitalize on available funding and project
              opportunities. Our wide range of partnerships ensure we advise on
              projects with the lowest credit and off-take risks.
            </div>
            <div className="mt-2">
              We make it easier for your business to cross into other African
              markets by acting as representatives or resident consultants.
            </div>
            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
          <div className="flex w-full items-center mt-4">
            <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div>
            <div className="ml-4 text-2xl font-semibold text-white ">
              Our role
            </div>
          </div>
          <div className="flex flex-col w-4/5 items-start justify-center mt-2 md:lg:xl:mt-10 text-sm md:lg:xl:text-lg font-semibold tracking-wide text-white ">
            <div>
              We accompany your business in sourcing finance to expand in
              various African markets. Our goal is to have a bespoke approach in
              selecting and matching your vision for expansion with various
              investors in our network. Our company is dedicated to finding the
              best funding fit that matches your company values.
            </div>

            {/* <div className="mt-2">Advisory Services</div> */}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
