import React from "react";
import Bag from "../assets/bag.png";
import MainContentDetail from "./MainContentDetail";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-olive-200">
        <div className="flex p-4 gap-2">
          
            <div>
              <img src={Bag} alt="Vidify" />
            </div>

            <div>
              <p>Vidify</p>
            </div>
          
        </div>
        <MainContentDetail />
      </div>
    </>
  );
};

export default MainContent;
