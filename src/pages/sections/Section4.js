import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";

const Section4 = ({ scrollYByVH }) => {
  useEffect(() => {
    const element = document.querySelector("#anchor4");
    const workshopTexts = document.querySelectorAll(".workshop-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        workshopTexts.forEach((workshopText) => {
          workshopText.classList.add("animate-fade-in");
        });
      } else {
        workshopTexts.forEach((workshopText) => {
          workshopText.classList.remove("animate-fade-in");
        });
      }
    });

    observer.observe(element);
  });

  const [onMouseHoverIndex, setOnMouseHoverIndex] = useState(2);

  return (
    <div className="w-full h-full relative">
      <section
        id="section4"
        className=" h-screen w-full  p-16 px-[calc(100vw/12)] flex items-center"
      >
        <div className="lg:w-[40%] h-full flex flex-col justify-center ">
          <h1 className="text-5xl font-poppins font-semibold text-[#181818] workshop-text opacity-0">
            Join the
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" masterclass workshops "}
            </span>{" "}
            from innovation leaders and industry experts
          </h1>
        </div>
        <div className="lg:w-[60%] h-full pl-16">
          <div className="flex items-center h-full space-x-2">
            <div onMouseEnter={e => setOnMouseHoverIndex(0)} onMouseLeave={e => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 0 ? "h-full w-64" : "h-[95%] w-32"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div onMouseEnter={e => setOnMouseHoverIndex(1)} onMouseLeave={e => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 1 ? "h-full w-64" : "h-[95%] w-32"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div onMouseEnter={e => setOnMouseHoverIndex(2)} onMouseLeave={e => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 2 ? "h-full w-64" : "h-[95%] w-32"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div onMouseEnter={e => setOnMouseHoverIndex(3)} onMouseLeave={e => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 3 ? "h-full w-64" : "h-[95%] w-32"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div onMouseEnter={e => setOnMouseHoverIndex(4)} onMouseLeave={e => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 4 ? "h-full w-64" : "h-[95%] w-32"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
          </div>
        </div>
      </section>
      <a id="anchor4" className="absolute top-[75%] w-full  h-20"></a>
    </div>
  );
};

export default Section4;
