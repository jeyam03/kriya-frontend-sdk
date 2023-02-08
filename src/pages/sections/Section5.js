import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";
import TeamDetails from "./TeamDetails.js";
import "../../styles/FlipCard.css";

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
      // console.log(entries[0].isIntersecting);
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

  const [fixedPosition, setFixedPosition] = useState("relative");

  useEffect(() => {
    const rightGrid = document.querySelector("#right-grid");
    const leftGrid = document.querySelector("#left-grid");
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
        className="w-full relative flex items-start team-text opacity-0"
      >
        <div
          className={`w-full lg:w-[60vw] font-poppins pt-16 pb-0 pr-16 pl-[calc(100vw/12)]`}
          id="left-grid"
        >
          <h1
            className="text-4xl lg:text-5xl w-full font-semibold text-[#181818] lg:pt-96"
            id="our-team-text"
          >
            Our
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Team "}
            </span>
          </h1>
          <p className="w-full mt-8 text-xl">
            We bring our creativity and attention to detail to every event we
            plan, ensuring a seamless and unforgettable experience for you all.
          </p>
          <ImageGrid vertical="Ambience and Creativity" />
          <ImageGrid vertical="App and Web Development" />
          <ImageGrid vertical="Design" />
          <ImageGrid vertical="Events Resource Management" />
          <ImageGrid vertical="PR and Sponsorship" />
          <ImageGrid vertical="SU Volunteer" />
        </div>

        <div
          className={`hidden lg:block lg:w-[40vw] h-screen overflow-y-hidden transition-all ${
            fixedPosition === "fixed"
              ? "fixed top-0 right-0"
              : fixedPosition === "absolute"
              ? "absolute bottom-0 right-0"
              : "absolute top-0 right-0"
          }`}
          id="right-grid"
        >
          <div className="grid grid-cols-3 grid-rows-4 w-full h-full ">
            <div className="border border-gray-100 rounded-tr-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-br-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-tl-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-t[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-br-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-bl-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-tl-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 rounded-tl-[6rem] bg-gray-300"></div>
            <div className="border border-gray-100 bg-gray-300"></div>
            <div className="border border-gray-100 bg-gray-300"></div>
            <div className="border border-gray-100 rounded-tr-[6rem] rounded-bl-[6rem] bg-gray-300"></div>
          </div>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section5;

const ImageGrid = ({ vertical }) => {
  const IMAGE_URL_1 =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  const IMAGE_URL_2 =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80";

  return (
    <React.Fragment>
      <h2 className="text-[#181818] text-2xl mt-8 mb-4">{vertical}</h2>
      <div className="flex flex-wrap gap-2 w-full">
        {TeamDetails.filter((i) => i.Verticals === vertical).map(
          (item, idx) => {
            return (
              <div
                className="w-16 h-16 lg:w-36 lg:h-36 aspect-square overflow-hidden"
                id="flip-card"
              >
                <div className="w-full h-full" id="flip-card-inner">
                  <div
                    className="w-full h-full "
                    style={{
                      background: `url(${
                        idx % 2 === 0 ? IMAGE_URL_1 : IMAGE_URL_2
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                    id="flip-card-front"
                  ></div>
                  <div
                    className="flex flex-col w-full h-full justify-center p-2 bg-gray-200 "
                    id="flip-card-back"
                  >
                    <h3 className="text-sm font-semibold">{item.Name}</h3>
                    <p className="text-xs">{item.Position}</p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </React.Fragment>
  );
};
