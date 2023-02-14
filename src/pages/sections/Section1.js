import React, { useEffect } from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

//  Landing

const Section1 = () => {
  return (
    <section
      id="section1"
      className="h-screen w-screen flex flex-row items-center"
    >
      <div className="w-[25vw] h-full pl-[calc(100vw/24)] py-[calc(100vw/24)] flex flex-col justify-between">
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

      <div className="w-[35vw] h-full"
        style={{
          background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1675874405/bridge_glqanj.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      </div>

      <div className="w-[35vw] h-[75%] p-24 flex flex-col justify-between">
        <div className="w-full font-poppins text-2xl font-semibold tracking-wider">
          <span className="text-[#C80067]">Mar</span> 24, 25 and 26
        </div>
        <h1 className="uppercase w-full font-poppins text-4xl font-semibold -ml-48">
          <span className="bg-[#7300fe] text-white leading-[4rem] px-2">
            The Global Clash of Techno Talents.
          </span>
        </h1>
        <div className="w-full font-poppins">
          Stay tuned for the forefront of technological advancements and gain valuable insights at our upcoming technical symposium Kriya 2023 !
        </div>
        <div className="uppercase font-semibold tracking-wider w-full font-poppins text-[#C80067]">
          Registrations opening soon !
        </div>
      </div>

      <div className="w-[5vw] h-[70%] bg-[#7300fe]"></div>
    </section>
  );
};

export default Section1;
