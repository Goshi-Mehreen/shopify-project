import React from "react";
import frameicon from "../assets/frameicon.svg";
import Arrow from "../assets/rightarrow-img.png";
import ArrowLeft from "../assets/left-arrow.png";
import OtherAppData from "./OtherAppData.jsx";
import { useState } from "react";
import { AppData } from "../data";

const OtherAppDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextData = () => {
    setCurrentIndex((prev) => (prev + 1) % AppData.length);
  };

  const previousData = () => {
    setCurrentIndex((prev) => (prev - 1 + AppData.length) % AppData.length);
  };

  return (
    <div className="bg-white mt-4">
      <div className="flex justify-between p-4">
        <h1 className="text-lg">Other apps from Storeware</h1>
        <img src={frameicon} alt="" className="w-4 h-4" />
      </div>

      <div>
        <OtherAppData index={currentIndex} />
      </div>

      <div className="flex justify-end">
        <img
          src={ArrowLeft}
          alt="previous"
          className="w-5 h-5 object-contain grayscale"
          onClick={previousData}
        />
        <img
          src={Arrow}
          alt="next"
          className="w-5 h-5 object-contain grayscale "
          onClick={nextData}
        />
      </div>
    </div>
  );
};

export default OtherAppDetail;
