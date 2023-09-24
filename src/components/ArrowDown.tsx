"use client";
import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

type Props = {};

const GotoPageMiddle = () => {
  document.getElementById("pageMiddle")?.scrollIntoView({
    behavior: "smooth",
  });
};
const ArrowDown = (props: Props) => {
  return (
    <ArrowCircleDownIcon
      className="w-[100px] bg-transparent md:lg:xl:h-[100px] cursor-pointer h-[50px] mb-2"
      onClick={GotoPageMiddle}
    />
  );
};

export default ArrowDown;
