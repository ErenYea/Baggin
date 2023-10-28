import React from "react";
import Slider from "../components/Slider";
import ArrowDown from "../components/ArrowDown";

type Props = {};

const PageIntro = (props: Props) => {
  return (
    <div className="w-full h-screen  z-20">
      <Slider />
      <div className="flex w-full justify-center md:lg:xl:h-[100px] bg-transparent absolute bottom-0 z-[100]  text-white">
        <ArrowDown />
      </div>
    </div>
  );
};

export default PageIntro;
