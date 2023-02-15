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
      workshopTexts.forEach((workshopText) => {
        workshopText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [onMouseHoverIndex, setOnMouseHoverIndex] = useState(0);

  const condition = "text-[#181818]";

  return (
    <div className="w-full h-full relative">
      <section
        id="section4"
        className="h-screen w-full p-0 py-12 lg:p-16 lg:px-[calc(100vw/12)] flex flex-col lg:flex-row lg:items-center"
      >
        <div className="lg:w-[70%] h-full hidden lg:block">
          <div className="flex items-center h-full space-x-2 w-full pr-16">
            <PaperPresentationItemDesktop
              index={0}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              title="Paper Presentation Zero"
            />
            <PaperPresentationItemDesktop
              index={1}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              title="Paper Presentation One"
            />
            <PaperPresentationItemDesktop
              index={2}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              title="Paper Presentation Two"
            />
            <PaperPresentationItemDesktop
              index={3}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              title="Paper Presentation Three"
            />
            {/* <PaperPresentationItemDesktop
              index={4}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              title="Paper Presentation Four"
            /> */}
          </div>
        </div>

        <div className="lg:w-[30%] w-full h-fit lg:h-full flex flex-col lg:justify-center ">
          <h1
            className={`text-4xl lg:text-6xl font-poppins font-semibold ${condition} workshop-text opacity-0 px-8 lg:p-0 pt-8 text-center lg:text-right`}
          >
            Engineering.
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Surveying. "}
            </span>{" "}
            Solutions.
          </h1>
        </div>
        <div className="block lg:hidden w-full lg:w-[60%] h-full overflow-x-auto mt-8">
          <div className="flex w-fit h-full items-center relative space-x-6 px-8">
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                Paper Presentation One
              </p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                Paper Presentation Two
              </p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                Paper Presentation Three
              </p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                Paper Presentation Four
              </p>
            </div>
            <div className="w-64 h-[90%] bg-gray-500 flex items-end p-4">
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                Paper Presentation Five
              </p>
            </div>
          </div>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

const PaperPresentationItemDesktop = ({
  index,
  onMouseHoverIndex,
  setOnMouseHoverIndex,
  title,
}) => {
  return (
    <div
      onMouseEnter={(e) => setOnMouseHoverIndex(index)}
      onMouseLeave={(e) => setOnMouseHoverIndex(0)}
      className={`rounded-lg shadow-md p-8 ${
        onMouseHoverIndex === index ? "h-full w-2/6" : "h-[95%] w-1/6"
      } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
    >
      <p
        className={`font-semibold font-poppins text-gray-100 absolute w-full origin-top-left transition-all duration-150 ${
          onMouseHoverIndex === index
            ? "rotate-0 text-3xl opacity-100 bottom-0 left-0 translate-x-4 -translate-y-4"
            : "-rotate-90 whitespace-nowrap text-xl opacity-50 bottom-0 right-0 translate-x-[calc(35vw/6)]"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default Section4;
