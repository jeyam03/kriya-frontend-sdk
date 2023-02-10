import React, { useEffect, useRef, useState } from "react";
import "../styles/Landing.css";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";
import Section7 from "./sections/Section7";
import Section8 from "./sections/Section8";
import Section9 from "./sections/Section9";
import Section10 from "./sections/Section10";
import { Link } from "react-router-dom";

const Landing = () => {
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

  const getColorVal = (v) => {
    const a = 0.05; // alpha
    const w = 255; // white
    const b = 18; // black
    if (v < 1 - a) return b;
    let val = v % 2;
    if (val < a) return ((b - w) * (val - a)) / (2 * a) + b;
    if (val > a && val < 1 - a) return b;
    if (val > 1 - a && val < 1 + a)
      return ((w - b) * (val - 1 - a)) / (2 * a) + w;
    if (val > 1 + a && val < 2 - a) return w;
    if (val > 2 - a && val < 2)
      return ((b - w) * (a - 2)) / (2 * a) + (w + b) / 2;
  };

  return (
    <React.Fragment>
      <div className="bg-white p-4 hiddn rounded-lg fixed top-10 left-10 z-50">
        {consolee}
      </div>
      <nav
        className={`${
          consolee > 1 ? "fixed" : "hidden"
        } top-0 w-full left-0 right-0 px-4 flex items-center justify-between lg:justify-evenly space-x-4 lg:space-x-24 z-50 h-12 bg-white shadow-md`}
      >
        <button
          onClick={(e) => {
            const element = document.getElementById("section3");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Events
        </button>
        <button
          onClick={(e) => {
            const element = document.getElementById("section5");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Paper Presentations
        </button>
        <button
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
          onClick={(e) => {
            const element = document.getElementById("section6");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Workshops
        </button>
        <button
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
          onClick={(e) => {
            const element = document.getElementById("section7");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Sponsors
        </button>
        <div
          className="w-48 h-full"
          style={{
            background:
              "url(https://i.ibb.co/2YByxvt/Kriya-Logo-2023-black-1.png)",
            backgroundPosition: `${
              window.innerWidth < 768 ? "left" : "center"
            }`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <button
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
          onClick={(e) => {
            const element = document.getElementById("section8");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Our Team
        </button>
        <button
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
          onClick={(e) => {
            const element = document.getElementById("section9");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          FAQs
        </button>
        <button
          className={`hidden lg:block text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
          onClick={(e) => {
            const element = document.getElementById("section10");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us
        </button>
        <Link
          to="/register"
          className={`text-xs text-gray-600 leading-5 font-poppins ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Register
        </Link>
      </nav>
      <main
        className={`w-screen overflow-x-hidden transition-all duration-300`}
        style={{
          // background: `rgba(${getColorVal(consolee)}, ${getColorVal(
          //   consolee
          // )}, ${getColorVal(consolee)}, 1)`,
          background:
            window.innerWidth < 768
              ? parseFloat(consolee) + 0.25 <= 1 ||
                (parseFloat(consolee) + 0.25 >= 2 &&
                  parseFloat(consolee) + 0.25 <= 3.75)
                ? `rgba(18, 18, 18, 1)`
                : `rgba(255, 255, 255, 1)`
              : parseFloat(consolee) + 0.25 >= 3
              ? `rgba(255, 255, 255, 1)`
              : (parseFloat(consolee) + 0.25) % 2 <= 1
              ? `rgba(18, 18, 18, 1)`
              : `rgba(255, 255, 255, 1)`,
          flexBasis: "50%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <Section1 />
        <Section2 scrollYByVH={consolee} />
        <Section3 scrollYByVH={consolee} />
        <Section4 scrollYByVH={consolee} />
        <Section5 scrollYByVH={consolee} />
        <Section6 scrollYByVH={consolee} />
        <Section7 scrollYByVH={consolee} />
        <Section8 scrollYByVH={consolee} />
        <Section9 />
        <Section10 />
      </main>
    </React.Fragment>
  );
};

export default Landing;
