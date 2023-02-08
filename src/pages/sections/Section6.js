import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";

const Section6 = () => {
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
    const sponsorsTexts = document.querySelectorAll(".sponsors-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      // if (entries[0].isIntersecting) {
      //   sponsorsTexts.forEach((eventsText) => {
      //     eventsText.classList.add("animate-fade-in");
      //   });
      // } else {
      //   sponsorsTexts.forEach((eventsText) => {
      //     eventsText.classList.remove("animate-fade-in");
      //   });
      // }
      sponsorsTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  // useEffect(() => {
  //   const stallsContainer = document.querySelector('.stalls');
  //   const stallsScrollWidth = stallsContainer.scrollWidth;


  //   setInterval(() => {
  //     if (stallsContainer.scrollLeft !== stallsScrollWidth) {
  //       stallsContainer.scrollTo(stallsContainer.scrollLeft + 1, 0);
  //     }
  //   }, 15);

  // }, []);

  const condition = "";

  return (
    <div className="w-full h-full relative">
      <section
        id="section5"
        className="h-full w-full relative lg:px-[calc(100vw/12)] lg:p-16 flex flex-col-reverse lg:flex-row items-center"
      >

        <div className="w-full lg:w-[70%] overflow-x-hidden h-full">
          <div className="flex flex-col p-8 lg:p-12 lg:pl-0 font-poppins space-y-4">
            <div className="w-1/2 p-4 space-y-4 sponsors-text opacity-0 delay-100">
              <p className="text-2xl font-semibold tracking-wider">
                <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {"TITLE "}
                </span>
                Sponsor
              </p>
              <Sponsers
                imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                title="GOOGLE"
              />
            </div>

            <div className="p-4 space-y-4 sponsors-text opacity-0 delay-100">
              <p className="text-2xl font-semibold tracking-wider">
                <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {"ASSOCIATE "}
                </span>
                Sponsors
              </p>

              <div className="flex flex-wrap gap-6">
                <Sponsers
                  imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                  title="Apple"
                />
                <Sponsers
                  imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                  title="Google"
                />
                <Sponsers
                  imgurl="https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png"
                  title="PSG College of Technology"
                />
                <Sponsers
                  imgurl="https://upload.wikimedia.org/wikipedia/en/8/8d/Adyar_Ananda_Bhavan_logo.png"
                  title="Adyar Ananda Bhavan"
                />
              </div>
            </div>

            <div className="p-4 space-y-4 sponsors-text opacity-0 delay-100">
              <p className="text-2xl font-semibold tracking-wider">
                <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {"STALL "}
                </span>
                Sponsors
              </p>

              <div className="w-full max-w-full relative overflow-x-hidden h-48">
                <div className="flex w-fit space-x-6 absolute whitespace-nowrap [will-change:transform] animate-marquee">
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                  <Sponsers
                    imgurl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                    title="GOOGLE"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%]">
          <h1 className={`text-3xl lg:text-6xl font-poppins font-semibold ${condition} sponsors-text opacity-0 text-right`}>
            Kriya '23
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Sponsors"}
            </span>
          </h1>
        </div>
      </section>
      <a id="anchor5" className="absolute top-[40%] lg:top-[75%] w-full h-20"></a>
      <div className="absolute top-[100%] w-full h-10"></div>
    </div>
  );
};

const Sponsers = ({ imgurl, title }) => {
  return (
    <div className="flex flex-col gap-y-2 w-64">
      <div className="bg-opacity-50 bg-gray-200 flex justify-center items-center p-8 w-64 h-36 rounded-2xl">
        <div
          style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",

          }}
          className={`w-full h-full`}></div>
      </div>
      <p className="uppercase text-lg text-[#181818] tracking-wider text-center">{title}</p>
    </div>
  );
};

export default Section6;
