import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Event = ({
  handleClick,
  title,
  description,
  className,
  icon,
  date,
  time,
}) => {
  return (
    <div className="group relative transition-all hover:z-10">
      <div className="absolute opacity-0 group-hover:opacity-100 left-0 top-[100%] w-full group-hover:scale-[110%] bg-blue-300 rounded-b-3xl px-4 py-2 transition-all">
        <div className="flex flex-row space-x-12 justify-center">
          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              {date}
            </p>
            <p className="font-sans text-center text-gray-600">Date</p>
          </div>

          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              {time}
            </p>
            <p className="font-sans text-center text-gray-600">Time</p>
          </div>
        </div>
      </div>

      <div
        className={`${className} text-lg text-blue p-6 rounded-3xl group-hover:rounded-b-none relative bg-blue-300 group-hover:scale-[110%] transition-all`}
      >
        <div className="bg-white rounded-bl-[30px] p-2 absolute top-0 right-0">
          <div className="absolute top-0 -left-4 bg-white">
            <div className="bg-blue-300 rounded-tr-full w-4 h-4"></div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
            className="bg-lime-300 rounded-full p-4"
          >
            <FiArrowUpRight className="text-black text-3xl" />
          </button>
          <div className="absolute -bottom-4 right-0 bg-white">
            <div className="bg-blue-300 rounded-tr-full w-4 h-4"></div>
          </div>
        </div>

        <div className="bg-blue-500 rounded-full p-4 mb-4 w-fit">
          {React.cloneElement(icon, { className: "text-white text-3xl" })}
        </div>

        <p className="font-semibold mb-4 font-sans text-xl">{title}</p>

        <p>{description}</p>

      </div>
    </div>
  );
};

export default Event;
