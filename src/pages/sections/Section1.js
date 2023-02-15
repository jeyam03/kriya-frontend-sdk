import React, { useEffect, useRef, useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

//  Landing

const Section1 = () => {
  const slides = [
    "https://res.cloudinary.com/dksmk66vo/image/upload/v1675874405/bridge_glqanj.jpg",
    "https://res.cloudinary.com/dksmk66vo/image/upload/v1675875367/1674280844981_qosaib.jpg",
    "https://res.cloudinary.com/dksmk66vo/image/upload/v1675957035/1674280564600_iia6uc.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(1);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  return (
    <section
      id="section1"
      className="h-screen w-screen flex flex-row items-center"
    >
      <div className="hidden lg:flex flex-col w-[25vw] h-full pl-[calc(100vw/24)] py-[calc(100vw/24)] justify-between">
        <div
          className="w-36 h-36 before:w-full before:h-full before:bg-black relative before:absolute before:opacity-30 before:rounded-full before:translate-y-[30%] before:scale-y-[25%] before:[background:radial-gradient(circle_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0)_70%)]"
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="space-y-4 flex flex-col items-start justify-start">
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            Events
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            Paper Presentations
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            Workshops
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            Our Team
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 hover:-skew-x-6 transition-all duration-300 ease-out hover:text-black"
          >
            Contact Us
          </button>
        </div>

        <div className="flex flex-row space-x-8">
          <button
            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/studentsunion-psgtech/",
                "_blank"
              )
            }
          >
            <BsLinkedin size={24} className=" text-gray-500 hover:text-black" />
          </button>
          <button
            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() =>
              window.open("https://www.instagram.com/kriya_psgtech/", "_blank")
            }
          >
            <BsInstagram
              size={24}
              className=" text-gray-500 hover:text-black"
            />
          </button>
          <button
            className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() => window.open("mailto:events@psgkriya.in", "_blank")}
          >
            <SiGmail size={24} className=" text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>

      <div className="hidden lg:block w-[35vw] h-full relative">
        <div
          className={`w-full h-full absolute top-0 right-0 left-0 transition-all duration-100 ease-linear ${currentSlide === 0 ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: `url(${slides[0]})`,
            backgroundPosition: "50% 50%  ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={`w-full h-full absolute top-0 right-0 left-0 transition-all duration-100 ease-linear ${currentSlide === 1 ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: `url(${slides[1]})`,
            backgroundPosition: "50% 50%  ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className={`w-full h-full absolute top-0 right-0 left-0 transition-all duration-100 ease-linear ${currentSlide === 2 ? "opacity-100" : "opacity-0"
            }`}
          style={{
            background: `url(${slides[2]})`,
            backgroundPosition: "50% 50%  ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="w-full lg:w-[35vw] h-full pl-20 pr-0 pb-8 pt-16 lg:px-20 lg:pb-12 lg:pt-24 flex flex-col justify-between">
        <div className="w-full font-poppins text-lg lg:text-lg font-semibold tracking-wider text-gray-600">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
            Mar
          </span>{" "}
          24<sup>th</sup>, 25<sup>th</sup> & 26<sup>th</sup> 2023
        </div>
        <div className="lg:hidden w-full h-[50%] relative">
          <div
            className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 0 ? "opacity-100" : "opacity-0"
              }`}
            style={{
              background: `url(${slides[0]})`,
              backgroundPosition: "50% 50%  ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 1 ? "opacity-100" : "opacity-0"
              }`}
            style={{
              background: `url(${slides[1]})`,
              backgroundPosition: "50% 50%  ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 2 ? "opacity-100" : "opacity-0"
              }`}
            style={{
              background: `url(${slides[2]})`,
              backgroundPosition: "50% 50%  ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <h1 className="uppercase lg:w-full font-poppins text-4xl font-semibold -ml-12 lg:-ml-48 -mt-40 lg:mt-8">
          <span className="bg-gradient-to-r from-[#C80067] to-[#7300fe] text-white leading-[4rem] relative z-10 whitespace-pre-line">
            The Global Clash of Techno Talents.
          </span>
        </h1>
        <div className="">
          <div className="hidden lg:block w-full font-poppins pr-8 text-sm lg:text-base ">
            Stay tuned for the forefront of technological advancements and gain
            valuable insights at our upcoming technical symposium Kriya 2023 !
          </div>
          <div className="text-lg font-semibold w-fit font-poppins text-white bg-[#C80067] shadow-lg hover:scale-110 transition-all px-4 py-3 rounded-lg mt-8 mb-16">
            ✨ Registrations opening soon ! ✨
          </div>
        </div>
        <div className="flex flex-row space-x-8 lg:space-x-4">
          <div
            className="w-16 h-auto"
            style={{
              background: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className=" text-sm lg:text-base">
            <p className="uppercase tracking-wider w-full font-poppins pr-16 text-sm">
              Presented By
            </p>
            <p className="font-semibold tracking-wider w-full font-poppins pr-16 mt-2">
              Students Union
            </p>
            <p className="tracking-wider w-full font-poppins pr-16 text-xs mt1">
              PSG College of Technology
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-[5vw] h-[70%] bg-[#7300fe]">
        <div className="w-full h-full relative">
          <div className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 0 ? "opacity-100" : "opacity-0"}`}
            style={{
              background: `url(${slides[0]})`,
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 1 ? "opacity-100" : "opacity-0"}`}
            style={{
              background: `url(${slides[1]})`,
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === 2 ? "opacity-100" : "opacity-0"}`}
            style={{
              background: `url(${slides[2]})`,
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
