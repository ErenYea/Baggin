import React from "react";
import { motion } from "framer-motion";
import PageMiddleDiv from "@/components/PageMiddleDiv";

type Props = {};

const PageMiddle = (props: Props) => {
  return (
    <div className="w-full h-full pageMiddle">
      <div className="h-full z-10">
        <div
          className=" about h-full bg-cover"
          style={{
            backgroundImage:
              "url('https://helloendless.com/wp-content/uploads/2022/05/Mask-group-10.jpg')",
          }}
        >
          <PageMiddleDiv />
        </div>
      </div>
    </div>
  );
};

export default PageMiddle;
