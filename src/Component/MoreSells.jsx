
import React from 'react'
import { Document1, Support1, Walk1 } from "../data.js";

function MoreSellsItem({ item }) {
  return (
    <div className="bg-white p-4 rounded-xl flex items-center justify-between mt-3">

      <div className="flex items-center gap-3">
        <img
          src={item.Docimage}
          alt=""
          className="w-10 h-10"
        />

        <div>
          <h3 className="font-bold">{item.heading}</h3>
          <p className="text-sm text-gray-500">
            {item.para}
          </p>
        </div>
      </div>

      {item.Righticon && (
        <div className="bg-gray-200 rounded-full p-2">
          <img
            src={item.Righticon}
            alt=""
            className="w-5 h-5"
          />
        </div>
      )}

    </div>
  )
}

const MoreSells = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 mt-4">

        <div className="mb-4">
          <h2 className="text-lg font-bold">
            Drive More Sales with Vidify AI Product Videos
          </h2>

          <p className="text-sm text-gray-500">
            Transform product marketing & your brand presence with stunning videos.
          </p>
        </div>

        <MoreSellsItem item={Document1} />
        <MoreSellsItem item={Support1} />
        <MoreSellsItem item={Walk1} />

      </div>
    </>
  )
}

export default MoreSells
