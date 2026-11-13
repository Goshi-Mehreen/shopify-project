
import React from "react";
import {
  primaryLinks,
  salesLinks,
  appLinks,
  bottomLinks,
} from "../data.js";

import { Link } from "react-router-dom";

import Arrow from "../assets/rightarrow-img.png";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <div className="w-60 h-full min-h-0 bg-[#eeeeee] p-3 flex flex-col">

      {/* Primary Links, Sales Channels and Apps */}
      <div className="flex-1">

        {/* Primary Links */}
        <div>
          {primaryLinks.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* Sales Channels */}
        <div className="mt-6">
          <div className="flex justify-between">
            <h3 className="text-sm text-gray-500 px-2 mb-2">
              Sales channels
            </h3>

            <img
              src={Arrow}
              alt=""
              className="w-5 h-5 object-contain grayscale"
            />
          </div>

          {salesLinks.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </div>

        {/* Apps */}
        <div className="mt-6">
          <div className="flex justify-between">
            <h3 className="text-sm text-gray-500 px-2">
              Apps
            </h3>

            <img
              src={Arrow}
              alt=""
              className="w-5 h-5 object-contain grayscale"
            />
          </div>

          {appLinks.map((item) => (
            <div key={item.id}>
              <NavItem item={item} />

              {item.children?.map((child) => (
                <Link
                  key={child.id}
                  to={child.path}
                  className="block"
                >
                  <p className="ml-8 px-3 py-2 text-sm text-gray-500">
                    {child.name}
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>

      </div>

      {/* Settings */}
      <div className="mt-auto">
        {bottomLinks.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Sidebar;
