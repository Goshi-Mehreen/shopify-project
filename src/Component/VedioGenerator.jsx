import React from "react";
import { Progress as RsuiteProgress } from "rsuite";
import { videoUsage } from "../data";
import Buttons from "./Buttons";


const VedioGenerator = () => {
  const data = videoUsage;
  const percent = data.limit > 0 ? (data.used / data.limit) * 100 : 0;

  return (
    <>
      <div className="bg-white p-8 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p>{data.title}</p>
            <span>ⓘ</span>
          </div>
          <Buttons />
        </div>
        <div>
          {" "}
          <p className="font-bold">
            <span>Current Plan:</span>
            {data.plan} {data.limit} Videos per Month
          </p>
          <p>
            {data.used}/{data.limit} Videos
          </p>
        </div>
        <RsuiteProgress.Line
          percent={percent}
          showInfo={false}
          strokeColor="#84cc16"
          trailColor="#e5e7eb"
          strokeWidth={8}
        />
      </div>

      
        


    </>
  );
};

export default VedioGenerator;
