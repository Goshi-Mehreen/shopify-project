import React from "react";
import { Vedioimages } from "../data.js";

const VideoProduct = ({ item }) => {
  return (
    <div>
      <div key={item.id} className="bg-white rounded-xl flex gap-6 mt-4">
        <div className="w-1/2">
          <img src={item.Image} alt="" className="w-full  object-contain" />
        </div>

        <div className="p-2">
          <div className="flex  gap-6">
            <h5 className="text-md font-bold">{item.heading}</h5>
          </div>

          <p className="text-gray-500 mt-2">{item.para}</p>

          <button className="mt-4 flex gap-2 items-center bg-white px-3 py-1.5 rounded-lg border border-gray-400 text-xs">
            {item.btnicon && (
              <img src={item.btnicon} className="w-6 h-6" alt="" />
            )}
            {item.btn}
          </button>
        </div>
        <div className="p-4 mb-4">
          <img src={item.frameicon} className="w-6" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VideoProduct;
