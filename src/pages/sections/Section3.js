import React, { useEffect } from "react";
import { FaSoundcloud } from "react-icons/fa";
import "../../styles/Landing.css";

const Section3 = () => {
  useEffect(() => {
    const element = document.querySelector("#anchor3");
    const eventsTexts = document.querySelectorAll(".events-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        eventsTexts.forEach((eventsText) => {
          eventsText.classList.add("animate-fade-in");
        });
      } else {
        eventsTexts.forEach((eventsText) => {
          eventsText.classList.remove("animate-fade-in");
        });
      }
    });

    observer.observe(element);
  });

  return (
    <div className="w-full h-full relative">
      <section
        id="section3"
        className=" h-screen w-full relative p-16 px-[calc(100vw/12)] flex items-center"
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

        <div className="w-[70vw] h-full">
          <div className="grid grid-cols-2 p-24 font-poppins gap-16">
            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient1)" }} size={72} />
                <p className="bg-clip-text text-4xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {" Kriyative "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient2)" }} size={72} />
                <p className="bg-clip-text text-4xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
                  {" Brainiac "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient3)" }} size={72} />
                <p className="bg-clip-text text-4xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
                  {" Coding "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient4)" }} size={72} />
                <p className="bg-clip-text text-4xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
                  {" Circuit "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient5)" }} size={72} />
                <p className="bg-clip-text text-4xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
                  {" Core Engineering "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <div className="flex items-center space-x-4">
                <FaSoundcloud style={{ fill: "url(#gradient6)" }} size={72}/>
                <p className="bg-clip-text text-3xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#27eba2]">
                  {" Management "}
                </p>
              </div>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
              <p className="text-blue-500 text-sm">
                { "Explore more >" }
              </p>
            </div>
          </div>
        </div>

        <div className="w-[30vw] pl-12">
          <h1 className="text-7xl font-poppins font-semibold text-white events-text opacity-0">
            Unleash your
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" potential "}
            </span>
            , participate in events.
          </h1>
        </div>
      </section>
      <a id="anchor3" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section3;
