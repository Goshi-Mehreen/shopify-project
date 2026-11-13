import React from "react";

import Perfum1 from "../assets/Perfum1.svg";
import Perfum2 from "../assets/Perfum2.svg";
import small1 from "../assets/smallp1.png";
import small2 from "../assets/smallp2.png";
import hand1 from "../assets/hand1.svg";
import hand2 from "../assets/hand2.svg";
import Group from "../assets/Group.png";
import Cross from "../assets/Cross.svg";

function ModalComponent({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-5">
      {/* Modal Card */}
      <div className="bg-white rounded-2xl w-full max-w-[650px] p-4 sm:p-5 shadow-2xl">
        {/* Product Name */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Product Name
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              AI generated product videos
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <img src={Cross} alt="Close modal" className="w-4 h-4" />
          </button>
        </div>

        {/* Video Tabs */}
        <div className="flex items-center gap-2 border-b border-gray-200 pb-3 mb-4 flex-wrap">
          {["Video 1", "Video 2", "Video 3", "Video 4"].map((video, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium ${
                index === 0
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {video}
            </button>
          ))}

          <div className="flex items-center gap-2 ml-auto">
            <span className="text-xs sm:text-sm text-gray-500">Video 5</span>
            <span className="text-[10px] sm:text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
              Latest
            </span>
          </div>
        </div>

        {/* Video Heading */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm sm:text-base font-semibold text-gray-800">
            AI Product Videos
          </h2>
          <p className="text-xs text-gray-400">23 Jun 2024</p>
        </div>

        {/* Video Versions */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
          {/* Version 1 */}
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-700 mb-2">Version 1</p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2">
              <img
                src={Perfum1}
                alt="Perfume Version 1"
                className="w-full h-28 sm:h-36 object-contain rounded-lg"
              />

              <div className="flex gap-2 mt-2">
                <button className="border border-gray-200 rounded-lg p-2 hover:bg-white">
                  <img src={hand1} alt="Like" className="w-4 h-4" />
                </button>

                <button className="border border-gray-200 rounded-lg p-2 hover:bg-white">
                  <img src={hand2} alt="Dislike" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Version 2 */}
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-700 mb-2">Version 2</p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-2">
              <img
                src={Perfum2}
                alt="Perfume Version 2"
                className="w-full h-28 sm:h-36 object-contain rounded-lg"
              />

              <div className="flex gap-2 mt-2">
                <button className="border border-gray-200 rounded-lg p-2 hover:bg-white">
                  <img src={hand1} alt="Like" className="w-4 h-4" />
                </button>

                <button className="border border-gray-200 rounded-lg p-2 hover:bg-white">
                  <img src={hand2} alt="Dislike" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Images and Prompt */}
        <div className="grid grid-cols-[auto_auto_1fr] gap-3 sm:gap-4 items-start">
          {/* Start Image */}
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Start Image
            </p>
            <img
              src={small1}
              alt="Start Image"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
            />
          </div>

          {/* End Image */}
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
              End Image
            </p>
            <img
              src={small2}
              alt="End Image"
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
            />
          </div>

          {/* Video Prompt */}
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-medium text-gray-700 mb-2">
              Video Prompt
            </p>

            <div className="h-16 sm:h-20 border border-gray-200 bg-gray-50 rounded-lg p-2 sm:p-3">
              <span className="text-[10px] sm:text-xs text-gray-400">
                Read Only
              </span>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="flex justify-end border-t border-gray-100 mt-4 pt-3">
          <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-black text-white text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-800 transition">
            <img src={Group} alt="" className="w-4 h-4" />
            <span>Create Your First Video</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
