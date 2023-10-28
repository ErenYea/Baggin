"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const AboutIntro = (props: Props) => {
  return (
    <motion.div
      initial={{
        // scale: 3,
        zoom: 30,
        // position: "center",
      }}
      animate={{
        // scale: 1,
        zoom: 0,
      }}
      transition={{
        type: "spring",
        // repeat: Infinity,
        bounce: 0,
        duration: 30,
        // ease: "linear",
        // damping: 25,
        // stiffness: 120,
      }}
      className="h-full z-10"
    >
      {/* <Slider /> */}
      <div
        className="pt-[54px] pr-[0px] pl-[0px] pb-[0px] about "
        style={{
          backgroundImage:
            "url('https://helloendless.com/wp-content/uploads/2022/06/About-Us-Header.jpg')",
        }}
      >
        {/* <div className="about-divider"></div> */}
      </div>
    </motion.div>
  );
};

export default AboutIntro;
