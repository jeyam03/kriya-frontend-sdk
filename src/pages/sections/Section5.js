import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import Event from "../../components/Event";
import { RiComputerLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { FaSoundcloud } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

const Section5 = () => {
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
    const element = document.querySelector("#anchor5");
    const teamTexts = document.querySelectorAll(".team-text");
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      // if (entries[0].isIntersecting) {
      //   teamTexts.forEach((eventsText) => {
      //     eventsText.classList.add("animate-fade-in");
      //   });
      // } else {
      //   teamTexts.forEach((eventsText) => {
      //     eventsText.classList.remove("animate-fade-in");
      //   });
      // }
      teamTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const rightGrid = document.querySelector("#right-grid");
    const leftGrid = document.querySelector("#left-grid");
    if (
      leftGrid.getBoundingClientRect().top <= 0 &&
      leftGrid.getBoundingClientRect().bottom > 0 &&
      !isFixed
    ) {
      setIsFixed(true);
    }
    if (
      (leftGrid.getBoundingClientRect().bottom <= 0 ||
        leftGrid.getBoundingClientRect().top > 0) &&
      isFixed
    ) {
      setIsFixed(false);
    }
  });

  return (
    <div className="w-full relative">
      <section
        id="section5"
        className="w-full relative flex items-start team-text opacity-0"
      >
        <div
          className={`w-full flex-1 font-poppins pt-16 pb-0  pl-[calc(100vw/12)]`}
          id="left-grid"
        >
          <h1
            className="text-6xl lg:text-7xl font-semibold text-[#181818]"
            id="our-team-text"
          >
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <Vertical name="Events" />
          <Vertical name="PR" />
          <Vertical name="Design" />
          <Vertical name="Technical" />
        </div>

        <div
          className={`hidden lg:block lg:w-[40vw] h-screen bg-red-500 overflow-y-hidden ${
            isFixed ? "fixed top-0 right-0" : "relative"
          }`}
          id="right-grid"
        >
          hello
        </div>
      </section>
      <a id="anchor5" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section5;

const Vertical = ({ name }) => {
  return (
    <div>
      <h1 className="pt-12 pb-8 text-4xl lg:text-5xl text-[#181818]">{name}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8">
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
        <div className="w-[10rem] h-[10rem] bg-slate-500 rounded-2xl"></div>
      </div>
    </div>
  );
};
