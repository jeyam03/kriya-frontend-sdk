import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import { fetchPapers } from "../../API/call";
import { Link, useNavigate } from "react-router-dom";

// Paper Presentations

const Section10 = ({ scrollYByVH }) => {
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

  const [hoverState, setHoverState] = useState(0);

  return (
    <div className="w-full h-full relative font-poppins">
      <section
        id="section10"
        className="h-fit lg:h-screen w-full p-0 py-8 lg:p-16 lg:px-[calc(100vw/16)] flex flex-col lg:flex-row lg:items-center"
      >
        <div className="w-full lg:w-[40%] h-full flex items-center px-8 lg:pl-0 lg:pr-16 font-bold font-poppins">
          <h1 className="text-5xl text-center lg:text-left w-full">
            Introducing our{" "}
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
              {" Flagship "}
            </span>
            Events{" "}
          </h1>
        </div>
        <div className="hidden lg:w-[60%] h-full lg:flex items-center justify-center">
          <div className="w-full flex flex-col items-center">
            <div
              onClick={() => setHoverState(-2)}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-0 ${
                hoverState === -2
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : hoverState === -1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 0
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === 1
                  ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : hoverState === 2
                  ? "w-[25%] z-10 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,1))] h-16"
                  : ""
              } relative bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677279236/1000_Converted_ag7o4f.png)] bg-center bg-cover bg-no-repeat`}
            >
              <p
                className={`text-3xl uppercase text-white duration-300  delay-200transition-all font-bold font-poppins ${
                  hoverState === -2
                    ? "opacity-100 tracking-widest"
                    : "opacity-0 -tracking-[0.2em]"
                }`}
              >
                Robo Rush
              </p>
              <Link
                to="/portal/event/EVNT0000"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${
                  hoverState !== -2 && "hidden"
                }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => setHoverState(-1)}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${
                hoverState === -2
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === -1
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : hoverState === 0
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 1
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === 2
                  ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : ""
              } relative bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677278943/3188668_y0sebf.jpg)] bg-center bg-cover bg-no-repeat`}
            >
              <p
                className={`text-3xl uppercase text-white duration-300  delay-200transition-all font-bold font-poppins ${
                  hoverState === -1
                    ? "opacity-100 tracking-widest"
                    : "opacity-0 -tracking-[0.2em]"
                }`}
              >
                Open Quiz
              </p>
              <Link
                to="/portal/event/EVNT0000"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${
                  hoverState !== -1 && "hidden"
                }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => setHoverState(0)}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${
                hoverState === -2
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === -1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 0
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : hoverState === 1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 2
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : ""
              } relative bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677279699/5714_ebbszf.jpg)] [background-position:50%_10%] bg-cover bg-no-repeat`}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${
                  hoverState === 0
                    ? "opacity-100 tracking-widest"
                    : "opacity-0 -tracking-[0.2em]"
                }`}
              >
                Maze Runner
              </p>
              <Link
                to="/portal/event/EVNT0000"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${
                  hoverState !== 0 && "hidden"
                }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => setHoverState(1)}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${
                hoverState === -2
                  ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : hoverState === -1
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === 0
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 1
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : hoverState === 2
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : ""
              } relative bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677280222/5807361_zfzvps.jpg)] bg-center bg-cover bg-no-repeat`}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${
                  hoverState === 1
                    ? "opacity-100 tracking-widest"
                    : "opacity-0 -tracking-[0.2em]"
                }`}
              >
                Aqua Jet
              </p>
              <Link
                to="/portal/event/EVNT0000"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${
                  hoverState !== 1 && "hidden"
                }`}
              >
                Know More
              </Link>
            </div>
            <div
              onClick={() => setHoverState(2)}
              className={`transition-all rounded-2xl flex flex-col items-center justify-center -mt-8 ${
                hoverState === -2
                  ? "w-[25%] z-10 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,1))] h-16"
                  : hoverState === -1
                  ? "w-[50%] z-20 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.8))] h-20"
                  : hoverState === 0
                  ? "w-[75%] z-30 [filter:drop-shadow(0px_0px_1rem_rgba(0,0,0,0.6))] h-24"
                  : hoverState === 1
                  ? "w-[90%] z-40 [filter:drop-shadow(0px_0px_2rem_rgba(0,0,0,0.4))] h-36"
                  : hoverState === 2
                  ? "w-full z-50 [filter:drop-shadow(0px_0px_4rem_rgba(0,0,0,0.3))] h-56"
                  : ""
              } relative bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677280480/5111951_mifnpc.jpg)] bg-center bg-cover bg-no-repeat`}
            >
              <p
                className={`text-3xl uppercase text-white duration-500 delay-200 transition-all font-bold font-poppins ${
                  hoverState === 2
                    ? "opacity-100 tracking-widest"
                    : "opacity-0 -tracking-[0.2em]"
                }`}
              >
                Pro Tech
              </p>
              <Link
                to="/portal/event/EVNT0000"
                className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-4 ${
                  hoverState !== 2 && "hidden"
                }`}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-4 lg:hidden px-4 mt-16">
          <div className="flex flex-col justify-center items-center h-32 rounded-xl bg-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677279236/1000_Converted_ag7o4f.png)] w-full">
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins `}
            >
              Robo Rush
            </p>
            <Link
              to="/portal/event/EVNT0000"
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2`}
            >
              Know More
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center h-32 rounded-xl bg-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677278943/3188668_y0sebf.jpg)] w-full">
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins `}
            >
              Open Quiz
            </p>
            <Link
              to="/portal/event/EVNT0000"
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2`}
            >
              Know More
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center h-32 rounded-xl bg-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677279699/5714_ebbszf.jpg)] w-full">
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins `}
            >
              Maze Runner
            </p>
            <Link
              to="/portal/event/EVNT0000"
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2`}
            >
              Know More
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center h-32 rounded-xl bg-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677280222/5807361_zfzvps.jpg)] w-full">
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins `}
            >
              Aqua Jet
            </p>
            <Link
              to="/portal/event/EVNT0000"
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2`}
            >
              Know More
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center h-32 rounded-xl bg-center bg-cover bg-no-repeat bg-[url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677280480/5111951_mifnpc.jpg)] w-full">
            <p
              className={`text-3xl uppercase text-white font-bold font-poppins `}
            >
              Pro Tech
            </p>
            <Link
              to="/portal/event/EVNT0000"
              className={`text-gray-200 hover:text-white uppercase tracking-wider text-sm mt-2`}
            >
              Know More
            </Link>
          </div>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[90%] w-full h-1 -z-10"></a>
    </div>
  );
};

export default Section10;
