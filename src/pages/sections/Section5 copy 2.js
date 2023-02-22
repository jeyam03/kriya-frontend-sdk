import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import { fetchWorkshops } from "../../API/call";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

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
          <div className="lg:w-[calc(100vw-50vw)] pr-8 pt-96">
            {fetchWorkshops().map((item, index) => (
              (index % 2 === 0) ? (
                <RightImage
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              ) : (
                <LeftImage
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              )
            ))}
          </div>
        </div>



        <div className="lg:hidden w-full p-8 pt-0">
          <h1 className={`text-4xl font-poppins font-semibold workshop-text opacity-0 text-center`}>
            Join the
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" masterclass workshops "}
            </span>{" "}
            from innovation leaders and industry experts.
          </h1>
        </div>

        <div className={`lg:hidden items-center w-full font-poppins py-8`}>
          <div className="py-4">
            {fetchWorkshops().map((item, index) => (
              (index % 2 === 0) ? (
                <RightImage
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              ) : (
                <LeftImage
                  number={index + 1}
                  imgurl={item.image}
                  id={item.wid}
                  title={item.workName}
                />
              )
            ))}
          </div>
        </div>
      </section>
      <a id="anchor6" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section5;

const LeftImage = ({ number, imgurl, title, id }) => {

  const navigate = useNavigate();

  return (
    <div className="py-20 flex justify-end">
      <button className="w-1/2 h-full relative" onClick={() => navigate(`/portal/workshop/${id}`)}>
        <div className={`bg-opacity-50 flex w-1/2 h-28 lg:w-80 lg:h-52 absolute bottom-[60%] right-1/2`}
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

        <Link
          className="bg-gray-200 text-blue-500 w-fit px-4 py-2 rounded-xl text-sm flex items-center group absolute top-1/2 -left-1/2"
          to="/portal/event/"
        >
          <p className="">Explore more</p>
          <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
        </Link>

        <div className="w-1/2 h-28 lg:w-80 lg:h-52 p-2 px-8 rounded-2xl flex flex-row items-end space-x-4 bg-gray-200">
          <div className="text-sm lg:text-lg w-[75%] pb-2 font-semibold text-left">
            {title}
          </div>
          <div className="text-5xl lg:text-8xl font-semibold text-gray-400">
            {number}
          </div>
        </div>
      </button>
    </div>
  );
};

const RightImage = ({ number, imgurl, title, id }) => {

  const navigate = useNavigate();

  return (
    <div className="py-20">
      <button className="w-1/2 h-full relative" onClick={() => navigate(`/portal/workshop/${id}`)}>
        <div className="w-1/2 h-28 lg:w-80 lg:h-52 p-2 px-8 rounded-2xl flex flex-row items-end space-x-4 bg-gray-200">
          <div className="text-5xl lg:text-8xl font-semibold text-gray-400">
            {number}
          </div>
          <div className="text-sm lg:text-lg w-[75%] pb-2 font-semibold text-left">
            {title}
          </div>
        </div>

        <Link
          className="bg-gray-200 text-blue-500 w-fit px-4 py-2 rounded-xl text-sm flex items-center group absolute top-1/2 -right-1/3"
          to="/portal/event/"
        >
          <p className="">Explore more</p>
          <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
        </Link>
        
        <div className={`bg-opacity-50 flex w-1/2 h-28 lg:w-80 lg:h-52 absolute bottom-[60%] left-1/3`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}>
          <div
            style={{
              background: `url("${imgurl}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className={`w-full h-full rounded-2xl`}></div>
        </div>
      </button>
    </div>
  );
};