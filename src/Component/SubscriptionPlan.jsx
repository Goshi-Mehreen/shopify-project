import React from "react";
import Bag from "../assets/bag.png";
import { PlansData } from "../data.js";

function SubscriptionPlan() {
  return (
    <>
      <div className="h-screen p-3">
        <div className="flex p-2 gap-2">
          <img src={Bag} alt="" />
          <p>Vidify</p>
        </div>
        <div className="mx-auto max-w-[1100px] w-full">
          <div className="mt-4">
            <h1 className="text-lg font-bold text-left">
              Power Up Your Store With Premium Features
            </h1>
            <p className="text-left">
              Choose a pricing plan that meets your needs!
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-200 mx-auto max-w-[1100px] p-4 mt-4 shadow-sm">
          <div className="flex gap-3">
            <h3 className="font-bold">Free</h3>
            <span className="bg-[#d9f2e3] text-[#0b6b3a] block rounded-full font-semibold">
              Active
            </span>
          </div>
          <div className="flex justify-between mt-2">
            <p>
              Make <span className="font-bold"> 2 AI videos</span> per month
            </p>
            <button className="bg-gray-300 p-2 rounded-2xl">Choose Free</button>
          </div>
        </div>
        <div className="flex gap-2 mx-auto max-w-[1100px] mt-4 shadow-sm">
          {PlansData.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl border border-gray-300 w-full"
            >
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="text-xl font-bold">
                    ${plan.price}
                    <span className="text-xs font-normal text-gray-500">
                      {plan.period}
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-sm">
                  <b>{plan.videos}</b> videos per month
                </p>
              </div>

              <div className="border-t border-gray-200 p-4">
                <button
                  className={`w-full rounded-lg py-1.5 text-sm border ${
                    plan.highlighted
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SubscriptionPlan;
