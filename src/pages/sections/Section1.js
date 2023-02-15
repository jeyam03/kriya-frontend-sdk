import React, { useEffect, useState } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

//  Landing

const Section1 = () => {
  const slides = ["https://res.cloudinary.com/dksmk66vo/image/upload/v1675874405/bridge_glqanj.jpg", "https://res.cloudinary.com/dksmk66vo/image/upload/v1675875367/1674280844981_qosaib.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      2500
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
        <div className="w-36 h-36"
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="space-y-8">
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">Events</h1>
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">Paper Presentations</h1>
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">Workshops</h1>
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">Our Team</h1>
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">FAQ</h1>
          <h1 className="text-xl text-gray-700 font-poppins uppercase font-semibold tracking-wider hover:translate-x-2 transition-all duration-500 ease-in-out hover:text-black">Contact Us</h1>
        </div>

        <div className="flex flex-row space-x-8">
          <button className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() => window.open("https://www.linkedin.com/company/studentsunion-psgtech/", "_blank")}
          >
            <BsLinkedin size={24} className=" text-gray-500 hover:text-black" />
          </button>
          <button className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() => window.open("https://www.instagram.com/kriya_psgtech/", "_blank")}
          >
            <BsInstagram size={24} className=" text-gray-500 hover:text-black" />
          </button>
          <button className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
            onClick={() => window.open("mailto:events@psgkriya.in", "_blank")}
          >
            <SiGmail size={24} className=" text-gray-500 hover:text-black" />
          </button>
        </div>

      </div>

      <div className="hidden lg:block w-[35vw] h-full"
        style={{
          // transform: `translate3d(${-currentSlide * 100}%, 0, 0)`,
          background: `url(${slides[currentSlide]})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      </div>

      <div className="w-full lg:w-[35vw] h-full pl-20 pr-0 pt-20 pb-8 lg:p-24 lg:py-12 flex flex-col justify-between">
        <div className="w-full h-24"
          style={{
            background: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
        </div>
        <div className="w-full font-poppins text-2xl font-semibold tracking-wider">
          <span className="text-[#C80067]">Mar</span> 24, 25 and 26
        </div>
        <div className="lg:hidden w-full h-[50%]"
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1675874405/bridge_glqanj.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
        </div>
        <h1 className="uppercase lg:w-full font-poppins text-4xl font-semibold -ml-12 lg:-ml-48 -mt-36 lg:-mt-0">
          <span className="bg-[#7300fe] text-white leading-[4rem] px-2">
            The Global Clash of Techno Talents.
          </span>
        </h1>
        <div className="w-full font-poppins pr-8 text-sm lg:text-base">
          Stay tuned for the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Kriya 2023 !
        </div>
        <div className="uppercase font-semibold tracking-wider w-full font-poppins text-[#C80067] pr-16">
          Registrations opening soon !
        </div>
        <div className="space-y-2">
          <div className="font-semibold tracking-wider w-full font-poppins pr-16">
            Presented By
          </div>
          <div className="uppercase font-semibold tracking-wider w-full font-poppins pr-16">
            Students Union
          </div>
          <div className="uppercase font-semibold tracking-wider w-full font-poppins pr-16">
            PSG College of Technology
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-[5vw] h-[70%] bg-[#7300fe]"></div>
    </section>
  );
};

export default Section1;
