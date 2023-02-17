import React, { useEffect, useRef, useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

//  Landing

function Number({ n }) {
  const props = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>;
}

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

  useEffect(() => {
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

  useEffect(() => {
    const element = document.querySelector("#anchor1");
    const registrationPrompt = document.querySelector("#registration-prompt");
    const kriyaLogo = document.querySelector("#kriya-logo");
    const imageMulti = document.querySelector("#image-multi");
    const imageMulti2 = document.querySelector("#image-multi-2");
    const tagline = document.querySelector("#tagline");

    const observer = new IntersectionObserver((entries) => {
      // numberTags.forEach((numberTag) => {
      //   numberTag.classList.add("animate-fade-in-bottom");
      // });
      if (entries[0].isIntersecting) {
        imageMulti.classList.add("animate-clip-in");
        kriyaLogo.classList.add("animate-bounce-in");
        registrationPrompt.classList.add("animate-flicker-in");
        imageMulti2.classList.add("animate-clip-in-side");
        tagline.classList.add("animate-clip-in-side");
      }
      // else {
      //   imageMulti.classList.remove("animate-clip-in");
      //   kriyaLogo.classList.remove("animate-bounce-in");
      //   registrationPrompt.classList.remove("animate-flicker-in");
      // }
    });

    observer.observe(element);
  });

  return (
    <section
      id="section1"
      className="h-screen w-screen flex flex-row items-center relative "
    >
      <a id="anchor1" className="w-screen absolute h-20 top-[75vh]"></a>
      <div className="hidden lg:flex flex-col w-[25vw] h-full pl-[calc(100vw/24)] py-[calc(100vw/24)] justify-between">
        <div
          id="kriya-logo"
          className="w-36 h-36 before:w-full before:h-full before:bg-black relative before:absolute before:opacity-30 before:rounded-full before:[background:radial-gradient(circle_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0)_70%)]"
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
              const element = document.querySelector("#section3");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
          >
            Events
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section5");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
          >
            Workshops
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
          >
            Paper Presentations
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section7");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
          >
            Our Team
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section8");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
          >
            FAQ
          </button>
          <button
            onClick={() => {
              const element = document.querySelector("#section9");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
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

      <div
        className="hidden lg:block w-[35vw] h-full relative"
        id="image-multi"
      >
        {slides.map((slide, index) => (
          <div
            className={`w-full h-full absolute top-0 right-0 left-0 transition-all duration-100 ease-linear ${currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            style={{
              background: `url(${slides[index]})`,
              backgroundPosition: "50% 50%  ",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        ))}
      </div>

      <div className="w-full lg:w-[35vw] h-full pb-8 pt-4 lg:px-20 lg:pb-12 lg:pt-24 flex flex-col items-center lg:items-start justify-between">
        <div className="flex items-center space-x-4 w-full px-6">
          <div
            className="lg:hidden w-32 h-28"
            style={{
              background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className="w-full font-poppins text-lg font-semibold tracking-wider text-gray-600">
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              March <br></br>
            </span>{" "}
            24<sup>th</sup>, 25<sup>th</sup> & 26<sup>th</sup> 2023
          </div>
        </div>
        <div className="lg:hidden pl-20 w-full h-[50%]">
          <div className="w-full h-full relative" id="image-multi-2">
            {slides.map((slide, index) => (
              <div
                className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                style={{
                  background: `url(${slides[index]})`,
                  backgroundPosition: "50% 50%  ",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            ))}
          </div>
        </div>

        <h1 id="tagline" className="uppercase lg:delay-500 lg:w-full font-poppins text-3xl lg:text-[2.5rem] font-semibold ml-8 -mt-24 lg:-ml-40 lg:-mt-0 lg:mb-8">
          <span className="bg-gradient-to-r from-[#C80067] to-[#7300fe] text-white leading-[3.25rem] lg:leading-[4rem] relative z-10">
            The Global Clash of Techno Talents.
          </span>
        </h1>
        <div className="w-full flex flex-col items-center">
          <div className="hidden lg:flex flex-row w-full text-[#3c4043] font-poppins font-semibold justify-between">
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={35} />
                +
              </div>
              <h1 className="text-sm text-center tracking-wide uppercase">Events</h1>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={12} />
                +
              </div>
              <h1 className="text-sm text-center tracking-wide uppercase">Workshops</h1>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={4} />
              </div>
              <h1 className="text-xs text-center tracking-wide uppercase">Paper Presentations</h1>
            </div>
          </div>
          <div
            id="registration-prompt"
            className="lg:text-lg font-semibold w-fit font-poppins text-white bg-[#C80067] shadow-lg hover:scale-110 transition-all px-4 py-3 rounded-lg my-8 lg:mb-16 text-center lg:text-left whitespace-nowrap lg:whitespace-normal"
          >
            ✨ Registrations opening soon! ✨
          </div>
        </div>
        <div className="flex flex-row space-x-8 lg:space-x-4 w-fit">
          <div
            className="w-16 h-auto"
            style={{
              background: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className=" text-sm lg:text-base w-fit ">
            <p className="uppercase tracking-wider font-poppins text-sm w-fit">
              Presented By
            </p>
            <p className="font-semibold font-poppins  mt-2 w-fit">
              Students Union
            </p>
            <p className="font-poppins text-xs  w-fit">
              PSG College of Technology
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-[5vw] h-[70%] bg-[#7300fe]">
        <div className="w-full h-full relative">
          {slides.map((slide, index) => (
            <div
              className={`w-full h-full absolute top-0 right-0 left-0 ${currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              style={{
                background: `linear-gradient(to bottom, rgba(200,0,103,0.7) , rgba(84,81,182,0.7) ), url(${slides[index]})`,
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
