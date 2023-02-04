import React, { useEffect } from "react";
import "../../styles/Landing.css";
import Event from "../../components/Event";
import { RiComputerLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { FaSoundcloud } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Section5 = () => {
  useEffect(() => {
    const element = document.querySelector("#anchor5");
    const eventsTexts = document.querySelectorAll(".team-text");
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
    <div className="w-full relative">
      <section
        id="section5"
        className="w-full relative pl-[calc(100vw/12)] flex items-start team-text opacity-0"
      >
        <div className="w-[60vw] font-poppins">
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
          <h1 className="text-7xl font-semibold text-white">
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <h1 className="mt-8 text-5xl text-white">
            Events
          </h1>
        </div>

        <div className="w-[40vw] pl-12 bg-red-400 h-screen sticky top-0 right-0">
        </div>
      </section>
      <a id="anchor5" className="absolute top-[75%] w-full h-20 bg-blue-200"></a>
    </div>
  );
};

export default Section5;
