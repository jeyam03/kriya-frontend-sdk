import React, { useEffect, useState, useRef } from "react";
import "../../styles/Landing.css";
import { fetchWorkshops } from "../../API/call";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

// Workshops

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
    const element = document.querySelector("#anchor6");
    const workshopTexts = document.querySelectorAll(".workshop-text");
    const observer = new IntersectionObserver((entries) => {
      workshopTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [fixedPosition, setFixedPosition] = useState("relative");

  const ref = useRef(null);

  useEffect(() => {
    const rightGrid = document.querySelector("#right-workshop-grid");
    const leftGrid = document.querySelector("#left-workshop-grid");
    if (
      leftGrid.getBoundingClientRect().top <= 0 &&
      leftGrid.getBoundingClientRect().bottom > window.innerHeight &&
      fixedPosition !== "fixed"
    ) {
      setFixedPosition("fixed");
    } else if (leftGrid.getBoundingClientRect().top > 0) {
      setFixedPosition("relative");
    } else if (leftGrid.getBoundingClientRect().bottom <= window.innerHeight) {
      setFixedPosition("absolute");
    }
    console.log(
      leftGrid.getBoundingClientRect(),
      fixedPosition,
      window.innerHeight
    );
  });

  return (
    <div className="w-full relative">
      <section
        id="section5"
        className="w-screen relative flex flex-col lg:flex-row items-start workshop-text opacity-0 pb-24"
      >

        <div
          className={`hidden lg:w-screen lg:flex items-center h-screen overflow-y-hidden transition-all ${fixedPosition === "fixed"
            ? "fixed top-0 left-0"
            : fixedPosition === "absolute"
              ? "absolute bottom-0 left-0"
              : "absolute top-0 left-0"
            }`}
          id="right-workshop-grid"
        >
          <div className="w-[50%] h-full flex flex-col lg:justify-center items-center p-24">
            <h1 className={`text-5xl font-poppins font-semibold workshop-text opacity-0 px-8 lg:p-0 pt-8`}>
              Join the
              <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
                {" masterclass workshops "}
              </span>{" "}
              from innovation leaders and industry experts.
            </h1>
          </div>
        </div>

        <div
          className={`hidden lg:flex relative items-center right-0 w-screen font-poppins pt-16 pb-0`}
          id="left-workshop-grid"
        >
          <div className="flex-1"></div>
          <div className="lg:w-[calc(100vw-75vw)] px-6 pt-56 flex flex-col items-end space-y-12">
            {fetchWorkshops().map((item, index) => (
              (index % 2 === 0) && (
                <WorkshopGrid
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              )
            ))}
          </div>
          <div className="lg:w-[calc(100vw-75vw)] mr-8 px-6 pt-96 flex flex-col items-start space-y-12">
            {fetchWorkshops().map((item, index) => (
              (index % 2 === 1) && (
                <WorkshopGrid
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              )
            ))}
          </div>
        </div>


        <div className="lg:hidden w-full p-8 pt-20">
          <h1 className={`text-4xl font-poppins font-semibold workshop-text opacity-0 text-center`}>
            Join the
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" masterclass workshops "}
            </span>{" "}
            from innovation leaders and industry experts.
          </h1>
        </div>

        <div ref={ref} className={`lg:hidden overflow-x-scroll flex flex-row items-center w-full font-poppins p-4 space-x-6`}>
          {fetchWorkshops().map((item, index) => (
            <WorkshopGrid
              number={index + 1}
              imgurl={item.image}
              id={item.wid}
              title={item.workName}
            />
          ))}
        </div>

        <div className="lg:hidden w-full flex flex-row justify-center text-3xl space-x-12 pt-8 [scroll-behavior:smooth]">
          <button
            onClick={() => {
              ref.current.scrollLeft += -160;
            }}
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <button
            onClick={() => {
              ref.current.scrollLeft += 160;
            }}
          >
            <MdOutlineArrowForwardIos />
          </button>
        </div>
      </section>
      <a id="anchor6" className="absolute top-[90%] w-full h-1"></a>
    </div>
  );
};

export default Section5;

const WorkshopGrid = ({ number, imgurl, title, id }) => {

  const navigate = useNavigate();

  return (
    <div className="">
      <div className="w-80 h-96">
        <div className="group h-full p-2 pt-4 rounded-2xl flex flex-col items-center justify-between bg-[#f0f0f0]">
          <div className={`bg-opacity-50 flex w-72 h-52`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}>
            <div
              style={{
                background: `url("${imgurl}")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              className={`w-full h-full rounded-2xl`}></div>
          </div>
          <div className="flex flex-row w-full justify-between items-center p-4">
            <div className="">
              <div className="text-sm lg:text-base w-[75%] pb-4 font-semibold text-left group-hover:bg-clip-text group-hover:[-webkit-text-fill-color:transparent] group-hover:bg-gradient-to-r from-[#C80067] to-[#5451B6] transition-all">
                {title}
              </div>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to={`/portal/workshop/${id}`}
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>
            <div className="text-6xl lg:text-8xl font-semibold text-gray-400 group-hover:bg-clip-text group-hover:[-webkit-text-fill-color:transparent] group-hover:bg-gradient-to-b from-[#C80067] to-[#5451B6] transition-all">
              {number}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
