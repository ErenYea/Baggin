"use client";
import { ProgressCircle } from "@tremor/react";

const ProgressCircleComp = () => {
  return (
    <>
      <ProgressCircle
        value={75}
        //   radius={50}
        strokeWidth={15}
        tooltip="75%"
        size="xl"
        className="mt-4"
      >
        <span className="text-3xl text-gray-200 font-medium">75%</span>
      </ProgressCircle>
      <div className="flex justify-around mt-8">
        <div className="flex flex-col items-center gap-1">
          <h5 className="text-base font-medium">Total Seats</h5>
          <p className="text-2xl font-semibold">$5500.00</p>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="text-base font-medium">Sold Seats</h5>
          <p className="text-2xl font-semibold">$6550.00</p>
        </div>
      </div>
    </>
  );
};

export default ProgressCircleComp;
