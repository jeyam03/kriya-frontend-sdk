import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import { fetchPapers } from "../../API/call";
import { useNavigate } from "react-router-dom";

// Paper Presentations

const Section4 = ({ scrollYByVH }) => {
  const [consolee, setConsolee] = useState(0);
  const navigate = useNavigate();

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
        className="h-screen w-full p-0 py-8 lg:p-16 lg:px-[calc(100vw/12)] flex flex-col lg:flex-row lg:items-center"
      >
        <div className="lg:w-[70%] h-full hidden lg:block">
          <div className="flex items-center h-full space-x-2 w-full pr-16">
            <PaperPresentationItemDesktop
              index={0}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              data={fetchPapers()[0]}
            />
            <PaperPresentationItemDesktop
              index={1}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              data={fetchPapers()[1]}
            />
            <PaperPresentationItemDesktop
              index={2}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              data={fetchPapers()[2]}
            />
            <PaperPresentationItemDesktop
              index={3}
              onMouseHoverIndex={onMouseHoverIndex}
              setOnMouseHoverIndex={setOnMouseHoverIndex}
              data={fetchPapers()[3]}
            />
          </div>
        </div>

        <div className="lg:w-[30%] w-full h-fit lg:h-full flex flex-col lg:justify-center ">
          <h1
            className={`text-4xl lg:text-6xl font-poppins font-semibold ${condition} workshop-text opacity-0 px-8 lg:p-0 text-center lg:text-right`}
          >
            Engineering.
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Researching. "}
            </span>{" "}
            Solutions.
          </h1>
        </div>
        <div className="block lg:hidden w-full lg:w-[60%] h-full overflow-x-auto mt-8">
          <div className="flex w-fit h-full items-center relative space-x-6 px-8">
            <button
              className="w-64 h-[90%] bg-gradient-to-b from-[#C80067] to-[#5451B6] flex items-end p-4"
              onClick={() => {
                navigate(`/portal/paper/PP01`);
              }}
              style={{
                background: `linear-gradient(to top, #202020 1%, rgba(255,255,255,0) 50%), url("${fetchPapers()[0].image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                {fetchPapers()[0].eventName}
              </p>
            </button>
            <button
              className="w-64 h-[90%] bg-gradient-to-b from-[#C80067] to-[#5451B6] flex items-end p-4"
              onClick={() => {
                navigate(`/portal/paper/PP02`);
              }}
              style={{
                background: `linear-gradient(to top, #202020 1%, rgba(255,255,255,0) 50%), url("${fetchPapers()[1].image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                {fetchPapers()[1].eventName}
              </p>
            </button>
            <button
              className="w-64 h-[90%] bg-gradient-to-b from-[#C80067] to-[#5451B6] flex items-end p-4"
              onClick={() => {
                navigate(`/portal/paper/PP03`);
              }}
              style={{
                background: `linear-gradient(to top, #202020 1%, rgba(255,255,255,0) 50%), url("${fetchPapers()[2].image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                {fetchPapers()[2].eventName}
              </p>
            </button>
            <button
              className="w-64 h-[90%] bg-gradient-to-b from-[#C80067] to-[#5451B6] flex items-end p-4"
              onClick={() => {
                navigate(`/portal/paper/PP04`);
              }}
              style={{
                background: `linear-gradient(to top, #202020 1%, rgba(255,255,255,0) 50%), url("${fetchPapers()[3].image}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <p className="font-semibold font-poppins text-2xl text-gray-100">
                {fetchPapers()[3].eventName}
              </p>
            </button>
          </div>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[90%] w-full h-1"></a>
    </div>
  );
};

const PaperPresentationItemDesktop = ({
  index,
  onMouseHoverIndex,
  setOnMouseHoverIndex,
  data,
}) => {
  const navigate = useNavigate();

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <button
      onMouseEnter={(e) => setOnMouseHoverIndex(index)}
      onMouseLeave={(e) => setOnMouseHoverIndex(0)}
      className={`text-left rounded-lg shadow-md p-8 ${onMouseHoverIndex === index ? "h-[90%] w-2/6" : "h-[85%] w-1/6"
        } transition-all bg-gradient-to-t from-[#C80067] to-[#5451B6] relative`}
      onClick={() => {
        navigate(`/portal/paper/${data.ppid}`);
      }}
      style={{
        background: `linear-gradient(to top, #202020 1%, rgba(255,255,255,0) 50%), url("${data.image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <p
        className={`font-semibold font-poppins text-gray-100 absolute w-full origin-top-left transition-all duration-150 ${onMouseHoverIndex === index
          ? "rotate-0 text-3xl opacity-100 bottom-0 left-0 translate-x-6 -translate-y-6"
          : "-rotate-90 whitespace-nowrap text-2xl opacity-50 bottom-0 right-0 translate-x-[calc(35vw/6)]"
          }`}
      >
        {toTitleCase(data.eventName)}
      </p>
    </button>
  );
};

export default Section4;
