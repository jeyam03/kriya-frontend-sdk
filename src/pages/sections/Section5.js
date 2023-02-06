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
      console.log(entries[0].isIntersecting);
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

  const rightCondition = `${(parseFloat(consolee) >= 5 && parseFloat(consolee) <= 6.25) ? "bg-red-700 fixed top-12 -right-16" : "bg-red-400"}`;
  const leftCondition = `${(parseFloat(consolee) >= 5 && parseFloat(consolee) <= 6.25) ? "lg:pr-24" : ""}`;

  return (
    <div className="w-full relative">
      <section
        id="section5"
        className="w-full relative pl-[calc(100vw/12)] py-12 flex items-start team-text opacity-0"
      >
        <div className={`w-full lg:w-[60vw] font-poppins py-16 ${leftCondition}`}>
          <h1 className="text-6xl lg:text-7xl font-semibold text-[#181818]">
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

        <div className={`hidden lg:block w-[40vw] h-screen ${rightCondition}`}>
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
      <h1 className="pt-12 pb-8 text-4xl lg:text-5xl text-[#181818]">
        {name}
      </h1>
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