import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Landing.css";

// Events

const Section3 = () => {
  const [consolee, setConsolee] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  useEffect(() => {
    const element = document.querySelector("#anchor3");
    const eventsTexts = document.querySelectorAll(".events-text");
    const observer = new IntersectionObserver((entries) => {
      eventsTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const condition = `${window.innerWidth < 768 ?
    parseFloat(consolee) + 0.25 >= 2 && parseFloat(consolee) + 0.25 <= 3.75 ? "text-white" : "text-[#181818]"
    : parseFloat(consolee) + 0.25 >= 2 && parseFloat(consolee) + 0.25 <= 3 ? "text-white" : "text-[#181818]"}`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section3"
        className="h-full w-full relative lg:px-[calc(100vw/12)] lg:p-16 flex flex-col-reverse lg:flex-row items-center"
      >

        <svg width="0" height="0">
          <linearGradient id="gradient1" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#5238d1" offset="0%" />
            <stop stopColor="#8938d1" offset="100%" />
          </linearGradient>
        </svg>

        <svg width="0" height="0">
          <linearGradient id="gradient2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#8f3ccf" offset="0%" />
            <stop stopColor="#df51ad" offset="100%" />
          </linearGradient>
        </svg>

        <svg width="0" height="0">
          <linearGradient id="gradient3" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#dc4fab" offset="0%" />
            <stop stopColor="#eb587b" offset="100%" />
          </linearGradient>
        </svg>

        <svg width="0" height="0">
          <linearGradient id="gradient4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#e8567c" offset="0%" />
            <stop stopColor="#f48555" offset="100%" />
          </linearGradient>
        </svg>

        <svg width="0" height="0">
          <linearGradient id="gradient5" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#eac64a" offset="0%" />
            <stop stopColor="#2ea47e" offset="100%" />
          </linearGradient>
        </svg>

        <svg width="0" height="0">
          <linearGradient id="gradient6" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#02b7e6" offset="0%" />
            <stop stopColor="#27eba2" offset="100%" />
          </linearGradient>
        </svg>

        <div className="w-full lg:w-[70vw] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:px-24 lg:pl-0 font-poppins gap-4 md:gap-8 lg:gap-12">
            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient1)" }} className="text-5xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {" Kriyative "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=kriyative"
              >
                {"Explore more >"}
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient2)" }} className="text-5xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
                  {" Brainiac "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=brainiac"
              >
                {"Explore more >"}
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient3)" }} className="text-5xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
                  {" Coding "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=coding"
              >
                {"Explore more >"}
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient4)" }} className="text-5xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
                  {" Circuit "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=circuit"
              >
                {"Explore more >"}
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient5)" }} className="text-5xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
                  {" Core Engineering "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=core"
              >
                {"Explore more >"}
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient6)" }} className="text-4xl lg:text-6xl" />
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#27eba2]">
                  {" Management "}
                </p>
              </div>
              <p className={`${condition} text-sm pb-2`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <Link className="text-blue-500 text-sm"
                to="/portal/event?ctg=management"
              >
                {"Explore more >"}
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30vw] px-12 lg:pr-0">
          <h1 className={`text-4xl lg:text-6xl font-poppins font-semibold ${condition} events-text opacity-0 text-center lg:text-right`}>
            Unleash your
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" potential"}
            </span>
            , participate in events.
          </h1>
        </div>
      </section>
      <a id="anchor3" className="absolute top-[40%] lg:top-[75%] w-full h-20"></a>
      <div className="absolute top-[100%] w-full h-10"></div>
    </div>
  );
};

export default Section3;
