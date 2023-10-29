"use client";
import React from "react";
import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ScienceIcon from "@mui/icons-material/Science";
import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
type Props = {};

const PageMiddleDiv = (props: Props) => (
  <motion.div
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{ duration: 2 }}
    className="flex  flex-col items-center justify-center relative z-20  h-full w-full mt-4 md:mt-12   text-white "
  >
    <div className="w-full px-4 py-2 flex lg:flex-row flex-col lg:gap-2 gap-5">
      <div className="text-base lg:w-1/2 w-full tracking-wider px-4">
          {/* <div className="md:xl:lg:sm:w-2/5 w-full">WHY ENDLESS EVENTS?</div> */}
          <h3 className="sm:md:lg:xl:text-md text-justify w-full mx-auto text-lg leading-8">
            Our team of experienced professionals collaborates with our
            customers to address their needs, identify areas of opportunity, and
            elevate their event experience. Our goal is to help our customers
            evolve their events by combining our team’s experience with
            cutting-edge event technology to create an unforgettable event
            experience for all stakeholders and attendees.
          </h3>
          <h3 className="text-justify text-lg mt-4 leading-8">
            Endless Events is proud to rank at the top of the industry in
            overall customer satisfaction and continually score at the top of
            our industry, according to G2.com. Endless is proud to have
            achieved a 90% customer retention rate, reflecting our dedication
            to establishing and maintaining long-term relationships. Endless
            showcases effective event management by ensuring our customers
            prove measurable ROI on their events year after year.
          </h3>
        </div>
      <div className="flex flex-col lg:w-1/2 w-full">
        <div className=" w-full text-center sm:md:lg:xl:text-md mx-auto text-lg">
          Endless Events specializes in:
        </div>
        <div className="flex flex-col mt-8 text-sm w-64 md:w-80 sm:md:lg:xl:text-md justify-center items-center mx-auto">
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1.2],
              backgroundColor: "white",
              color: "black",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer flex p-4 border w-full  text-center text-sm sm:md:lg:xl:text-md justify-center"
          >
            <SettingsIcon />
            <div className="ml-4"> Event Management</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1.2],
              backgroundColor: "#96ca4c",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer flex mt-4 p-4 border w-full text-center justify-center"
          >
            <StarBorderIcon />
            <div className="ml-4"> Event Technology</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1.2],
              backgroundColor: "white",
              color: "black",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer flex p-4 border w-full mt-4 text-center justify-center"
          >
            <ScienceIcon />
            <div className="ml-4"> Event Production</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1.2],
              backgroundColor: "#96ca4c",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer flex mt-4 p-4 border w-full text-center justify-center"
          >
            <CreateIcon />
            <div className="ml-4"> Event Creative</div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1.2],
              backgroundColor: "white",
              color: "black",
            }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer flex p-4 border w-full mt-4 text-center justify-center"
          >
            <LightbulbIcon />
            <div className="ml-4"> Event Strategy</div>
          </motion.div>
        </div>
      </div>
      {/* <div className="w-32 h-1 border bg-green-500 border-green-500 rounded"></div> */}
    </div>
  </motion.div>
);

export default PageMiddleDiv;
