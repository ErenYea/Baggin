"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const AboutMiddle = (props: Props) => {
  return (
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
      className="flex  flex-col items-center justify-center z-20  h-full w-full absolute top-0      text-white "
    >
      <div className="flex w-full sm:lg:md:xl:flex-row flex-col items-center justify-center p-4 ">
        <div className="sm:md:lg:xl:text-5xl  text-md sm:md:lg:xl:w-1/2 w-full flex  justify-center font-bold tracking-wider">
          <div className="md:xl:lg:sm:w-2/5 w-full">WHY ENDLESS EVENTS?</div>
        </div>
        <div className="flex flex-col sm:md:lg:xl:w-1/2 w-full sm:md:lg:xl:mt-0 mt-4">
          <div className=" text-sm  sm:md:lg:xl:text-md text-justify md:xl:lg:sm:w-3/4 w-full">
            Our team of experienced professionals collaborates with our
            customers to address their needs, identify areas of opportunity, and
            elevate their event experience. Our goal is to help our customers
            evolve their events by combining our team’s experience with
            cutting-edge event technology to create an unforgettable event
            experience for all stakeholders and attendees.
          </div>
          <div className="md:xl:lg:sm:w-3/4 w-full text-justify mt-4 text-sm sm:md:lg:xl:text-md">
            Endless Events specializes in:
          </div>

          <div className="md:xl:lg:sm:w-3/4 w-full flex flex-col mt-8 text-sm  sm:md:lg:xl:text-md">
            <div className="text-justify">
              Endless Events is proud to rank at the top of the industry in
              overall customer satisfaction and continually score at the top of
              our industry, according to G2.com. Endless is proud to have
              achieved a 90% customer retention rate, reflecting our dedication
              to establishing and maintaining long-term relationships. Endless
              showcases effective event management by ensuring our customers
              prove measurable ROI on their events year after year.
            </div>
          </div>
        </div>
        {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
      </div>
    </motion.div>
  );
};

export default AboutMiddle;
