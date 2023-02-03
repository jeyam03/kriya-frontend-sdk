import React, { useEffect } from "react";
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
        <div className="w-[70vw]">
          
        </div>
        <div className="w-[30vw]">
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
