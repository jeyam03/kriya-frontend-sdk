import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Event = ({
  handleClick = () => {},
  title = "",
  description = "",
  className = "",
  icon = <div/>,
  date = "",
  time = "",
}) => {
  return (
    <div className="group relative transition-all hover:z-10 font-poppins">
      <div className="absolute opacity-0 group-hover:opacity-100 left-0 top-[100%] w-full group-hover:scale-[110%] bg-gray-600 rounded-b-xl px-4 py-2 transition-all">
        <div className="flex flex-row space-x-12 justify-center py-4">
          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              {date}
            </p>
            <p className="font-sans text-center text-gray-100">Date</p>
          </div>

          <div className="">
            <p className="font-sans font-semibold text-center text-xl">
              {time}
            </p>
            <p className="font-sans text-center text-gray-100">Time</p>
          </div>
        </div>
      </div>

      <div
        className={`${className} text-lg text-blue p-6 rounded-xl group-hover:rounded-b-none relative bg-gray-300 group-hover:scale-[110%] transition-all`}
      >
        <div className="bg-[#181818] rounded-bl-3xl p-2 absolute top-0 right-0">
          <div className="absolute top-0 -left-4 bg-[#181818]">
            <div className="bg-gray-300 rounded-tr-full w-4 h-4"></div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
            className="bg-gradient-to-tr from-[#C80067] to-[#5451B6] text-white rounded-full p-4"
          >
            <FiArrowUpRight className="text-white text-xl" />
          </button>
          <div className="absolute -bottom-4 right-0 bg-[#181818]">
            <div className="bg-gray-300 rounded-tr-full w-4 h-4"></div>
          </div>
        </div>

        <div className="bg-gray-500 rounded-full p-4 mb-4 w-fit">
          {React.cloneElement(icon, { className: "text-white text-3xl" })}
        </div>

        <p className="font-semibold mb-4 font-poppins text-2xl w-[70%]">
          {title}
        </p>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Event;
