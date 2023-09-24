import React from "react";
import { motion } from "framer-motion";
import PageMiddleDiv from "@/components/PageMiddleDiv";
type Props = {};

const PageMiddle = (props: Props) => {
  return (
    <div className="w-full h-full " id="pageMiddle">
      <div className="h-full z-10">
        <div
          className=" about h-full "
          style={{
            backgroundImage:
              "url('https://helloendless.com/wp-content/uploads/2022/05/Mask-group-10.jpg')",
          }}
        ></div>
      </div>
      <PageMiddleDiv />
    </div>
  );
};

export default PageMiddle;
