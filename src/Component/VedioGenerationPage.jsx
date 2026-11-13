import React, { useState } from "react";
import { VedioGenData } from "../data.js";
import VedioGenerator from "./VedioGenerator.jsx";
import Group from "../assets/Group.png";
import Sort from "../assets/Sort.png";
import Filter from "../assets/Filter.png";
import Searchicon from "../assets/Search icon.png";
import Vector from "../assets/Vector.png";
import Regenerate from "../assets/regenerate.png";
import Bag from "../assets/bag.png";
import Updown from "../assets/UpDown.png";
import Pagination from "./Pagination.jsx";
import ViewAlVideos from "./ViewAlVideos.jsx";
import ModalComponent from "./ModalComponent.jsx";

const ICON_SIZE = "w-4 h-4 object-contain";
const ICON_ENABLED = `${ICON_SIZE} brightness-0 opacity-40`;
const ICON_DISABLED = `${ICON_SIZE} brightness-0 opacity-25`;

const Tooltip = ({ text, children }) => (
  <div className="relative group inline-flex">
    {children}

    <div className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 hidden group-hover:block z-30">
      <div className="relative bg-white text-gray-400 text-sm whitespace-nowrap rounded-lg border border-gray-200 shadow-md px-3 py-1.5">
        {text}
        <span className="absolute top-1/2 -right-[5px] -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-white border-t border-r border-gray-200" />
      </div>
    </div>
  </div>
);

const VedioGenerationPage = () => {
  const WAIT_TEXT = "Wait until current video is done.";

  const PAGE_SIZE = 10;

  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("generate");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalPages = Math.max(1, Math.ceil(VedioGenData.length / PAGE_SIZE));

  const sortedData = [...VedioGenData].sort((a, b) => {
    return sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const pageData = sortedData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="flex flex-col w-full bg-olive-200">
        {/* Logo */}
        <div className="flex p-4 gap-2">
          <div>
            <img src={Bag} alt="" />
          </div>
          <div>
            <p>Vidify</p>
          </div>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-lg font-bold ml-6 mb-4">Video Generation</h1>
        </div>

        {/* Video Generator */}
        <div className="mb-4 border border-gray-300 rounded-xl m-4 bg-white">
          <VedioGenerator />
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-xl border border-gray-300 overflow-hidden m-4">
          {/* Tabs and Icons */}
          <div className="border-b border-gray-300 p-3 flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 mt-4">
              {/* Generate Tab */}
              <p
                onClick={() => {
                  setActiveTab("generate");
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                  activeTab === "generate"
                    ? "bg-gray-200"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Generate AI Videos
              </p>

              {/* View Tab */}
              <p
                onClick={() => setActiveTab("view")}
                className={`px-4 py-2 rounded-lg text-sm cursor-pointer ${
                  activeTab === "view"
                    ? "bg-gray-200 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                View AI Videos
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button className="border border-gray-500 rounded-lg p-2 flex gap-2">
                <img src={Searchicon} alt="Search" className="w-5 h-5" />
                <img src={Filter} alt="Filter" className="w-5 h-5" />
              </button>

              <button className="border border-gray-500 rounded-lg p-2">
                <img src={Sort} alt="Sort" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Generate AI Videos */}
          {activeTab === "generate" && (
            <>
              {/* Table */}
              <div>
                <table className="w-full">
                  {/* Table Head */}
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-left">
                        <button
                          onClick={() => {
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                            setPage(1);
                          }}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          Product
                          <img src={Updown} alt="Sort" />
                        </button>
                      </th>

                      <th className="p-4 text-left">Images</th>
                      <th className="p-4 text-left">Status</th>

                      <th className="p-4 text-left">
                        <div className="flex items-center gap-2">
                          Inventory
                          <img src={Updown} alt="" />
                        </div>
                      </th>

                      <th className="p-4 text-left">
                        <div className="flex items-center gap-2">
                          Progress
                          <img src={Updown} alt="" />
                        </div>
                      </th>

                      <th
                        onClick={() => setIsModalOpen(true)}
                        className="cursor-pointer"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    {pageData.map((item) => {
                      const isInProgress = item.progress === "In Progress";

                      const isNotGenerated = item.progress === "Not Generated";

                      const isCompleted = item.progress === "Completed";

                      const isDisabled = isInProgress || item.disabled;

                      return (
                        <tr key={item.id} className="border-b border-gray-200">
                          {/* Product */}
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.Thumb}
                                alt=""
                                className="w-12 h-12 object-cover rounded-lg"
                              />
                              {item.name}
                            </div>
                          </td>

                          {/* Images */}
                          <td className="p-4">{item.images}</td>

                          {/* Status */}
                          <td className="p-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                item.status === "Active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>

                          {/* Inventory */}
                          <td className="p-4">{item.inventory}</td>

                          {/* Progress */}
                          <td className="p-4">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                                isCompleted
                                  ? "bg-green-100 text-green-800"
                                  : isInProgress
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              <span className="w-2 h-2 rounded-full bg-current"></span>
                              {item.progress}
                            </span>
                          </td>

                          {/* Action */}
                          <td className="p-4">
                            <div className="flex items-center justify-center gap-2">
                              {/* View Video */}
                              {isDisabled || isNotGenerated ? (
                                <Tooltip
                                  text={
                                    isDisabled
                                      ? WAIT_TEXT
                                      : "Generate video first"
                                  }
                                >
                                  <button
                                    disabled
                                    className="p-1 rounded-md cursor-not-allowed"
                                  >
                                    <img
                                      src={Vector}
                                      alt="View Video"
                                      className={ICON_DISABLED}
                                    />
                                  </button>
                                </Tooltip>
                              ) : (
                                <Tooltip text="View Video">
                                  <button className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                                    <img
                                      src={Vector}
                                      alt="View Video"
                                      className={ICON_ENABLED}
                                    />
                                  </button>
                                </Tooltip>
                              )}

                              {/* Generate / Regenerate */}
                              {isDisabled ? (
                                <Tooltip text={WAIT_TEXT}>
                                  <button
                                    disabled
                                    className="p-1 rounded-md cursor-not-allowed"
                                  >
                                    <img
                                      src={Regenerate}
                                      alt="Regenerate"
                                      className={ICON_DISABLED}
                                    />
                                  </button>
                                </Tooltip>
                              ) : isNotGenerated ? (
                                <Tooltip text="Generate Video">
                                  <button className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                                    <img
                                      src={Group}
                                      alt="Generate Video"
                                      className={ICON_ENABLED}
                                    />
                                  </button>
                                </Tooltip>
                              ) : (
                                <Tooltip text="Regenerate Video">
                                  <button className="p-1 rounded-md hover:bg-gray-200 cursor-pointer">
                                    <img
                                      src={Regenerate}
                                      alt="Regenerate Video"
                                      className={ICON_ENABLED}
                                    />
                                  </button>
                                </Tooltip>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onChange={setPage}
                />
              </div>
            </>
          )}

          {isModalOpen && (
            <ModalComponent onClose={() => setIsModalOpen(false)} />
          )}
          {/* View AI Videos */}
          {activeTab === "view" && <ViewAlVideos />}
        </div>
      </div>
    </>
  );
};

export default VedioGenerationPage;
