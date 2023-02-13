import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const EventGrid = ({
  handleClick = () => { },
  title = "",
  description = "",
  className = "",
  icon = <div />,
  date = "",
  time = "",
  arrowColor = "bg-white",
  imgurl = "",
  arrowCircleStart = "from-[#000]",
  arrowCircleEnd = "to-[#000]",
  topCurve = "bg-white",
  rightCurve = "bg-white",
}) => {
  return (
    <div className="group relative transition-all hover:z-30 font-poppins w-96">
      <div className="absolute opacity-0 group-hover:opacity-100 left-0 top-[100%] w-full group-hover:scale-[110%] bg-gray-200 rounded-b-3xl px-4 pt-2 transition-all">
        <div className="flex flex-row space-x-12 justify-center py-4 text-gray-700">
          <div className="pt-2">
            <p className="font-poppins font-semibold text-center">
              {date}
            </p>
            <p className="font-poppins text-center">Date</p>
          </div>

          <div className="pt-2">
            <p className="font-poppins font-semibold text-center">
              {time}
            </p>
            <p className="font-poppins text-center">Time</p>
          </div>
        </div>
      </div>

      <div
        className={`${className} text-lg text-blue rounded-3xl group-hover:rounded-b-none relative bg-gray-200 group-hover:scale-[110%] transition-all`}
        style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
      >
        <div className={`${arrowColor} rounded-bl-3xl p-2 absolute top-0 right-0 z-20`}>
          <div className={`absolute top-0 -left-4 ${arrowColor}`}>
            <div className={`${topCurve} rounded-tr-full w-4 h-4`}></div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick(e);
            }}
            className={`bg-gradient-to-tr ${arrowCircleStart} ${arrowCircleEnd} text-white rounded-full p-4`}
          >
            <FiArrowUpRight className="text-white text-3xl" />
          </button>
          <div className={`absolute -bottom-4 right-0 ${arrowColor}`}>
            <div className={`${rightCurve} rounded-tr-full w-4 h-4`}></div>
          </div>
        </div>

        <div className="p-6 pb-3 rounded-t-3xl">
          <div className="bg-gray-200 rounded-full p-4 mb-4 w-fit">
            {React.cloneElement(icon, { className: "text-[#181818] text-3xl" })}
          </div>

          <p className="font-semibold font-poppins text-xl w-[70%] text-gray-200 tracking-wider">
            {title}
          </p>
        </div>

        <div className="p-6 pt-3 rounded-b-3xl backdrop-blur-md text-gray-200">
          <p className="font-poppins text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventGrid;
