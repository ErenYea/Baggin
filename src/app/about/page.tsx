import AboutIntro from "@/components/AboutIntro";
import AboutMiddle from "@/components/AboutMiddle";
import Intro from "@/components/Intro";
import Header from "@/pages/Header";
import PageIntro from "@/pages/PageIntro";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen">
      {/* <AboutIntro /> */}
      <Intro title='About Us' bgImage={'https://helloendless.com/wp-content/uploads/2022/06/About-Us-Header.jpg'}/>
      <AboutMiddle />
    </div>
  );
};

export default About;
