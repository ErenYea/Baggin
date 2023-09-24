"use client";
import React from "react";
import { motion } from "framer-motion";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ScienceIcon from "@mui/icons-material/Science";
import CreateIcon from "@mui/icons-material/Create";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
type Props = {};

const PageMiddleDiv = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 2 }}
      className="flex  flex-col items-center justify-center z-20  h-full w-full absolute top-[95%] sm:md:xl:lg:top-[85%] mt-4 md:xl:lg:mt-32   text-white "
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
          <div className="md:xl:lg:sm:w-3/4 w-full flex flex-col mt-8 text-sm sm:md:lg:xl:text-md justify-center items-center">
            <motion.div
              whileHover={{
                scale: [null, 1.3, 1.2],
                backgroundColor: "white",
                color: "black",
              }}
              transition={{ duration: 0.3 }}
              className="cursor-pointer flex p-4 border w-3/5 text-center text-sm sm:md:lg:xl:text-md justify-center"
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
              className="cursor-pointer flex mt-4 p-4 border w-3/5 text-center justify-center"
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
              className="cursor-pointer flex p-4 border mt-4 w-3/5 text-center justify-center"
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
              className="cursor-pointer flex mt-4 p-4 border w-3/5 text-center justify-center"
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
              className="cursor-pointer flex p-4 border mt-4 w-3/5 text-center justify-center"
            >
              <LightbulbIcon />
              <div className="ml-4"> Event Strategy</div>
            </motion.div>
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

export default PageMiddleDiv;
