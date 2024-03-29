import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";

// Sponsors

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
    const element = document.querySelector("#anchor7");
    const sponsorsTexts = document.querySelectorAll(".sponsors-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);

      sponsorsTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  return (
    <div className="w-full h-full relative">
      <section
        id="section6"
        className="h-full w-full relative lg:px-[calc(100vw/12)] lg:p-24 flex flex-col-reverse lg:flex-row items-center"
      >
        <div className="w-full lg:w-[70%] overflow-x-hidden h-full">
          <div className="flex flex-col p-8 lg:pl-0 font-poppins space-y-8 lg:space-y-4">
            <div className="flex flex-col lg:flex-row">
              <div className=" p-4 px-6 space-y-4 flex flex-col items-center lg:items-start sponsors-text opacity-0 delay-100">
                <p className="text-2xl font-semibold tracking-wider text-center lg:text-left">
                  <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                    {"TITLE "}
                  </span>
                  Sponsor
                </p>
                <Sponsors
                  imgurl="https://mma.prnewswire.com/media/806571/KLA_Corporation_Logo.jpg?p=twitter"
                  title="KLA"
                />
              </div>
              <div className="p-4 px-6 space-y-4 sponsors-text opacity-0 delay-100">
                <p className="text-2xl font-semibold tracking-wider text-center lg:text-left">
                  <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                    {"Co "}
                  </span>
                  Sponsor
                </p>

                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <Sponsors
                    imgurl="https://blog.shikshacoach.com/wp-content/uploads/2022/01/shankar-ias-academy-e1643541869552.jpg"
                    title="Shankar IAS Academy"
                  />
                </div>
              </div>
            </div>

            <div className="p-0 lg:p-4 space-y-4 sponsors-text opacity-0 delay-100">
              <p className="text-2xl font-semibold tracking-wider text-center lg:text-left">
                <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {"MEDIA "}
                </span>
                Sponsor
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <Sponsors
                  imgurl="https://www.exchange4media.com/news-photo/100947-expresslogo.jpg"
                  title="The Indian Express"
                />
              </div>
            </div>

            <div className="p-0 lg:p-4 space-y-4 sponsors-text opacity-0 delay-100">
              <p className="text-2xl font-semibold tracking-wider text-center lg:text-left">
                <span className="bg-clip-text text-3xl py-2 [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {"OTHER "}
                </span>
                Sponsors
              </p>

              <div className="w-full max-w-full relative overflow-x-hidden h-48">
                <div className="flex w-fit space-x-6 absolute whitespace-nowrap [will-change:transform] animate-marquee">
                  {Array(4).fill(
                    <React.Fragment>
                      <Sponsors
                        imgurl="/assets/Stalls/Waffle.jpg"
                        title="Waffle Cart"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/PolarBear.png"
                        title="Polar Bear"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/FrozenStick.jpeg"
                        title="The Frozen Stick"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/Creamery.jpeg"
                        title="Creamery"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/KCOverseas.jpg"
                        title="KC Overseas"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/Time.jpg"
                        title="T.I.M.E"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/Annapoorna.jpg"
                        title="Annapoorna"
                      />
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div className="w-full max-w-full relative overflow-x-hidden h-48">
                <div className="flex w-fit space-x-6 absolute whitespace-nowrap [will-change:transform] animate-marquee-rev">
                  {Array(4).fill(
                    <React.Fragment>
                      <Sponsors
                        imgurl="/assets/Stalls/Tibbs.jpeg"
                        title="Tibbs Frankie"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/TheCrunchyTreats.jpeg"
                        title="The Crunchy Treats"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/ZenTreat.jpg"
                        title="Zen Treat"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/Marvel.jpeg"
                        title="Marvel"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/Fabino.jpg"
                        title="Fabino"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/RoyalZip.jpg"
                        title="Royal Zip"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/saranya.jpeg"
                        title="Studio 11"
                      />
                    </React.Fragment>
                  )}
                </div>
              </div>

              <div className="w-full max-w-full relative overflow-x-hidden h-48">
                <div className="flex w-fit space-x-6 absolute whitespace-nowrap [will-change:transform] animate-marquee">
                  {Array(4).fill(
                    <React.Fragment>
                      <Sponsors
                        imgurl="/assets/Stalls/ChocoCrush.jpg"
                        title="Choco Crush"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/boc.png"
                        title="Bluestone Overseas"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/sjs.jpeg"
                        title="SJS Phone Accessories"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/parvesh.jpeg"
                        title="90's Kids Mittai"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/zee.jpeg"
                        title="Zee Taurus"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/chai.jpeg"
                        title="Chai N Gupshup"
                      />
                      <Sponsors
                        imgurl="/assets/Stalls/marudhamalai.png"
                        title="Marudhamalai Juice"
                      />
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30%] p-8 pb-0 lg:p-0">
          <h1
            className={`text-4xl lg:text-6xl font-poppins font-semibold  sponsors-text opacity-0 text-center lg:text-right`}
          >
            Kriya '23
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" Sponsors"}
            </span>
          </h1>
        </div>
      </section>
      <a
        id="anchor7"
        className="absolute top-[40%] lg:top-[75%] w-full h-20 -z-10"
      ></a>
      <div className="absolute top-[100%] w-full h-10"></div>
    </div>
  );
};

const Sponsors = ({ imgurl, title }) => {
  return (
    <div className="flex flex-col gap-y-2 w-48 lg:w-64">
      <div className="bg-opacity-50 bg-gray-200 flex justify-center items-center p-4 lg:p-6 h-28 lg:w-64 lg:h-36 rounded-2xl">
        <div
          style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className={`w-full h-full`}
        ></div>
      </div>
      <p className="uppercase text-base lg:text-lg text-[#181818] tracking-wider text-center">
        {title}
      </p>
    </div>
  );
};

export default Section6;
