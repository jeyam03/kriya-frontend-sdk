import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCalendar2EventFill } from "react-icons/bs";

const Event = ({ handleClick, title, description, className }) => {
  return (

    <div className="w-full group">

      <div
        className={`${className} text-lg text-blue w-full h-5/6 px-4 py-2 rounded-3xl relative bg-blue-300 group-hover:bg-blue-200`}
      >
        <div className="bg-white rounded-bl-[30px] p-2 absolute top-0 right-0">
          <div className="absolute top-0 -left-4 bg-white">
            <div className="bg-blue-300 group-hover:bg-blue-200 rounded-tr-full w-4 h-4"></div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
            className="bg-lime-300 rounded-full p-4">
            <FiArrowUpRight className="text-black text-3xl" />
          </button>
          <div className="absolute -bottom-4 right-0 bg-white">
            <div className="bg-blue-300 group-hover:bg-blue-200 rounded-tr-full w-4 h-4"></div>
          </div>
        </div>

        <div className="bg-blue-500 rounded-full p-4 mb-4 w-fit">
          <BsCalendar2EventFill className="text-white text-3xl" />
        </div>

        <p className="font-semibold mb-4 font-sans">
          {title}
        </p>

        <p>
          {description}
        </p>

        <div className="hidden group-hover:block absolute bottom-0 left-0 bg-blue-200 p-3"></div>
        <div className="hidden group-hover:block absolute bottom-0 right-0 bg-blue-200 p-3"></div>

      </div>

      <div className="hidden group-hover:block bg-slate-100 rounded-b-3xl px-4 py-2">
        <div className="flex flex-row space-x-12 justify-center">
          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              March 24
            </p>
            <p className="font-sans text-center text-gray-600">
              Date
            </p>
          </div>

          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              10:00 AM
            </p>
            <p className="font-sans text-center text-gray-600">
              Time
            </p>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Event;
