"use client";
import { motion } from "framer-motion";
import ArrowDown from "./ArrowDown";

const Intro = ({title,bgImage}:IntroProps) => {
    return (
        <motion.div
      initial={{
        // scale: 3,
        zoom: 5,
        // position: "center",
      }}
      animate={{
        // scale: 1,
        zoom: 1,
      }}
      transition={{
        type: "spring",
        // repeat: Infinity,
        bounce: 0,
        duration: 3,
        // ease: "linear",
        // damping: 25,
        // stiffness: 120,
      }}
      className="h-full z-10"
    >
        <div className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center backdrop-brightness-50" style={{backgroundImage:`url(${bgImage})`}}>
            <div className='w-full h-full absolute top-0 left-0 z-[1] backdrop-container'></div>
            <h2 className="text-5xl text-md w-full flex justify-center font-bold tracking-wider relative z-[2]">{title}</h2>
            <div className="w-56 h-1.5 rounded-lg bg-white my-4 text-center mx-auto z-[2]"></div>
        </div>
        <div className="flex w-full justify-center md:lg:xl:h-[70px] bg-transparent absolute bottom-4 z-[100]  text-white">
        <ArrowDown />
      </div>
        </motion.div>
     );
}
 
export default Intro;


type IntroProps= {
    title:string,
    bgImage:string
}