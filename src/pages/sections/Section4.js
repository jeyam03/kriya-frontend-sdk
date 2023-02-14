import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";

// Paper Presentations

const Section4 = ({ scrollYByVH }) => {
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
    const workshopTexts = document.querySelectorAll(".workshop-text");
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      // if (entries[0].isIntersecting) {
      //   workshopTexts.forEach((workshopText) => {
      //     workshopText.classList.add("animate-fade-in");
      //   });
      // } else {
      //   workshopTexts.forEach((workshopText) => {
      //     workshopText.classList.remove("animate-fade-in");
      //   });
      // }
      workshopTexts.forEach((workshopText) => {
        workshopText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [onMouseHoverIndex, setOnMouseHoverIndex] = useState(0);

  const condition = `${window.innerWidth < 768 ?
    parseFloat(consolee) + 0.25 <= 3.5 ? "text-white" : "text-[#181818]"
    : parseFloat(consolee) + 0.25 < 3 ? "text-white" : "text-[#181818]"}`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section4"
        className="h-screen w-full p-0 py-12 lg:p-16 lg:px-[calc(100vw/12)] flex flex-col lg:flex-row lg:items-center"
      >
        <div className="lg:w-[70%] h-full hidden lg:block">
          <div className="flex items-center h-full space-x-2 w-full pr-16">
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(0)}
              onMouseLeave={(e) => setOnMouseHoverIndex(0)}
              className={`rounded-lg shadow-md flex items-end p-8 ${onMouseHoverIndex === 0 ? "h-full w-2/6" : "h-[95%] w-1/6"
                } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
            >
              <p className={`font-semibold font-poppins text-3xl text-gray-100 ${onMouseHoverIndex === 0 ? "rotate-0" : "-rotate-90 whitespace-nowrap -ml-20 mb-36"}`}>Paper Presentation One</p>
            </div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(1)}
              onMouseLeave={(e) => setOnMouseHoverIndex(0)}
              className={`rounded-lg shadow-md flex items-end p-8 ${onMouseHoverIndex === 1 ? "h-full w-2/6" : "h-[95%] w-1/6"
                } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
            >
              <p className={`font-semibold font-poppins text-3xl text-gray-100 ${onMouseHoverIndex === 1 ? "rotate-0" : "-rotate-90 whitespace-nowrap -ml-20 mb-36"}`}>Paper Presentation Two</p>
            </div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(2)}
              onMouseLeave={(e) => setOnMouseHoverIndex(0)}
              className={`rounded-lg shadow-md flex items-end p-8 ${onMouseHoverIndex === 2 ? "h-full w-2/6" : "h-[95%] w-1/6"
                } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
            >
              <p className={`font-semibold font-poppins text-3xl text-gray-100 ${onMouseHoverIndex === 2 ? "rotate-0" : "-rotate-90 whitespace-nowrap -ml-[5.5rem] mb-[9.5rem]"}`}>Paper Presentation Three</p>
            </div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(3)}
              onMouseLeave={(e) => setOnMouseHoverIndex(0)}
              className={`rounded-lg shadow-md flex items-end p-8 ${onMouseHoverIndex === 3 ? "h-full w-2/6" : "h-[95%] w-1/6"
                } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
            >
              <p className={`font-semibold font-poppins text-3xl text-gray-100 ${onMouseHoverIndex === 3 ? "rotate-0" : "-rotate-90 whitespace-nowrap -ml-20 mb-36"}`}>Paper Presentation Four</p>
            </div>
            <div
              onMouseEnter={(e) => setOnMouseHoverIndex(4)}
              onMouseLeave={(e) => setOnMouseHoverIndex(0)}
              className={`rounded-lg shadow-md flex items-end p-8 ${onMouseHoverIndex === 4 ? "h-full w-2/6" : "h-[95%] w-1/6"
                } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
            >
              <p className={`font-semibold font-poppins text-3xl text-gray-100 ${onMouseHoverIndex === 4 ? "rotate-0" : "-rotate-90 whitespace-nowrap -ml-20 mb-36"}`}>Paper Presentation Five</p>
            </div>
          </div>
        </div>

        <div className="lg:w-[30%] w-full h-fit lg:h-full flex flex-col lg:justify-center ">
          <h1 className={`text-4xl lg:text-6xl font-poppins font-semibold ${condition} workshop-text opacity-0 px-8 lg:p-0 pt-8 text-center lg:text-right`}>
            Engineering.
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Surveying. "}
            </span>{" "}
            Solutions.
          </h1>
        </div>
        <div className="block lg:hidden w-full h-full overflow-x-auto mt-8">
          <div className="flex w-fit h-full items-center relative space-x-6 px-8">
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">Paper Presentation One</p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">Paper Presentation Two</p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">Paper Presentation Three</p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">Paper Presentation Four</p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">Paper Presentation Five</p>
            </div>
          </div>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section4;
