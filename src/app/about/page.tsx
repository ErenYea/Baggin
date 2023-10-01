import AboutIntro from "@/components/AboutIntro";
import AboutMiddle from "@/components/AboutMiddle";
import Header from "@/pages/Header";
import PageIntro from "@/pages/PageIntro";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen">
      <AboutIntro />
      <AboutMiddle />
    </div>
  );
};

export default About;
