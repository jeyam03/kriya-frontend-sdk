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
        className="h-screen w-full p-0 lg:p-16 lg:px-[calc(100vw/12)] flex flex-col lg:flex-row lg:items-center"
      >
        <div className="lg:w-[30%] w-full h-fit lg:h-full flex flex-col lg:justify-center ">
          <h1 className="text-4xl lg:text-5xl font-poppins font-semibold text-[#181818] workshop-text opacity-0 px-8 lg:p-0 pt-8">
            Join the
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" masterclass workshops "}
            </span>{" "}
            from innovation leaders and industry experts
          </h1>
        </div>
        <div className="block lg:hidden w-full overflow-x-auto  mt-8">
          <div className="flex w-fit relative space-x-6">
            <div className="w-32"></div>
            <div className="w-64 h-96 bg-gray-500"> </div>
            <div className="w-64 h-96 bg-gray-500"></div>
            <div className="w-64 h-96 bg-gray-500"></div>
            <div className="w-32"></div>
          </div>
        </div>

        <div className="lg:w-[70%] h-full hidden lg:block">
          <div className="flex items-center h-full space-x-2 w-full pl-16">
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(0)}
              onMouseLeave={(e) => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 0 ? "h-full w-2/6" : "h-[95%] w-1/6"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(1)}
              onMouseLeave={(e) => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 1 ? "h-full w-2/6" : "h-[95%] w-1/6"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(2)}
              onMouseLeave={(e) => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 2 ? "h-full w-2/6" : "h-[95%] w-1/6"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(3)}
              onMouseLeave={(e) => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 3 ? "h-full w-2/6" : "h-[95%] w-1/6"
              } transition-all bg-gradient-to-t from-[rgba(18,18,18,0.7)] to-[rgba(18,18,18,0.3)]`}
            ></div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(4)}
              onMouseLeave={(e) => setOnMouseHoverIndex(2)}
              className={`rounded-lg shadow-md ${
                onMouseHoverIndex === 4 ? "h-full w-2/6" : "h-[95%] w-1/6"
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
