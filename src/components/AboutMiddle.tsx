"use client";
import React from "react";
import { motion } from "framer-motion";
import company from "../../public/about.jpg";
import Image from "next/image";
type Props = {};

const AboutMiddle = (props: Props) => {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.5, bounce: 0 }}
        className="flex flex-col items-center justify-center z-20  h-full w-full absolute top-0  my-8    text-white "
      >
        <div className="my-16 w-full sm:lg:md:xl:flex-row flex-col items-center justify-center p-4 ">
          {/* <div className="sm:md:lg:xl:text-5xl  text-md w-full flex  justify-center font-bold tracking-wider">
          <div className="text-center w-full">WHY ENDLESS EVENTS?</div>
        </div>
        <div className="w-64 h-1.5 rounded-lg bg-white my-4 text-center mx-auto"></div> */}
          {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
        </div>
      </motion.div>
      <div className="relative mt-8 pageMiddle">
        <div className="grid grid-cols-4 gap-8 text-primary rounded-md w-full md:w-11/12 lg:w-4/5 mx-auto shadow-xl mt-8 p-6">
          <div className="col-span-4 md:col-span-2">
            <h2 className="text-3xl font-bold leading-10">
              Endless Events is an Innovative, Technology-Driven Event
              Management Company
            </h2>
            <div className=" text-base  sm:md:lg:xl:text-lg my-6 text-justify w-full">
              Our team of experienced professionals collaborates with our
              customers to address their needs, identify areas of opportunity,
              and elevate their event experience. Our goal is to help our
              customers evolve their events by combining our team’s experience
              with cutting-edge event technology to create an unforgettable
              event experience for all stakeholders and attendees.
            </div>
            <div className=" w-full text-justify my-4 text-base sm:md:lg:xl:text-xl font-semibold">
              Endless Events specializes in:
            </div>

            <div className=" w-full flex flex-col mt-8 text-base  sm:md:lg:xl:text-lg">
              <div className="text-justify">
                Endless Events is proud to rank at the top of the industry in
                overall customer satisfaction and continually score at the top
                of our industry, according to G2.com. Endless is proud to have
                achieved a 90% customer retention rate, reflecting our
                dedication to establishing and maintaining long-term
                relationships. Endless showcases effective event management by
                ensuring our customers prove measurable ROI on their events year
                after year.
              </div>
            </div>
          </div>
          <div className="col-span-2 hidden md:block">
            <Image
              src={company}
              alt="Company"
              width={500}
              height={400}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMiddle;
