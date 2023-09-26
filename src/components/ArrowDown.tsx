"use client";
import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
type Props = {};

const GotoPageMiddle = () => {
  document.getElementById("pageMiddle")?.scrollIntoView({
    behavior: "smooth",
  });
};
const ArrowDown = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
      }}
      animate={{
        x: 0,
        y: -10,
      }}
      transition={{
        type: "spring",
        repeat: Infinity,
        duration: 0.8,
        ease: "linear",
      }}
    >
      <ExpandMoreIcon
        className="w-[100px] bg-transparent md:lg:xl:h-[100px] cursor-pointer h-[50px] mb-2"
        onClick={GotoPageMiddle}
      />
    </motion.div>
  );
};

export default ArrowDown;
