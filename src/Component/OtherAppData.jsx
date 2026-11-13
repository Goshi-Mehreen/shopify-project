import React from "react";
import { AppData } from "../data";

const OtherAppData = ({ index = 0 }) => {
  const item = AppData[index];

  return (
    <div key={item.id} className="flex justify-between p-4">
      <div className="flex  gap-4">
        <img
          src={item.imageApp}
          alt=""
          className="w-[375px] h-[212px] object-contain"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-gray-500">{item.heading}</h2>

          <p>{item.para}</p>

          <ul className="list-disc list-inside">
            {item.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className="flex justify-start mt-4">
            <button className="px-2 py-1 border border-gray-500 rounded">
              {item.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherAppData;
