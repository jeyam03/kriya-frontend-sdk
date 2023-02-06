import React, { useEffect, useRef, useState } from "react";
import "../styles/Landing.css";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Section5 from "./sections/Section5";
import Section6 from "./sections/Section6";

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

  useEffect(() => {
    console.log(consolee, parseFloat(consolee) - 0.5);
  }, [consolee]);

  return (
    <React.Fragment>
      <div className="bg-white p-4 hiddn rounded-lg fixed top-10 left-10">
        {consolee}
      </div>
      <nav className="fixed top-0 w-full left-0 right-0 p-4 flex justify-center space-x-4 lg:space-x-24 ">
        <button
          className={`text-xs text-gray-600 leading-5 font-poppins ${consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
            } transition-all`}
        >
          Events
        </button>
        <button
          className={`text-xs text-gray-600 leading-5 font-poppins ${consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
            } transition-all`}
        >
          Workshops
        </button>
        <div className="w-16 hidden lg:block"></div>
        <button
          className={`text-xs text-gray-600 leading-5 font-poppins ${consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
            } transition-all`}
        >
          Sponsors
        </button>
        <button
          className={`text-xs text-gray-600 leading-5 font-poppins ${consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
            } transition-all`}
        >
          Register
        </button>
      </nav>
      <main
        className={`w-screen overflow-x-hidden transition-all duration-300`}
        style={{
          // background: `rgba(${getColorVal(consolee)}, ${getColorVal(
          //   consolee
          // )}, ${getColorVal(consolee)}, 1)`,
          background:
            window.innerWidth < 768 ?
              (
                ((parseFloat(consolee) + 0.25) <= 1 ||
                  ((parseFloat(consolee) + 0.25) >= 2 && (parseFloat(consolee) + 0.25) <= 3.75))
                  ? `rgba(18, 18, 18, 1)`
                  : `rgba(255, 255, 255, 1)`
              ) :
              (
                (parseFloat(consolee) + 0.25) >= 3 ? `rgba(255, 255, 255, 1)` :
                  (parseFloat(consolee) + 0.25) % 2 <= 1
                    ? `rgba(18, 18, 18, 1)`
                    : `rgba(255, 255, 255, 1)`
              ),
          flexBasis: "50%",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <section
          id="section1"
          className="h-screen w-full relative [scroll-snap-align:start] m-0 p-0"
          style={{ flexFlow: "column" }}
        ></section>
        <Section2 scrollYByVH={consolee} />
        <Section3 scrollYByVH={consolee} />
        <Section4 scrollYByVH={consolee} />
        <Section6 scrollYByVH={consolee} />
        <Section5 scrollYByVH={consolee} />
        <section id="section3" className=" h-screen w-full"></section>
      </main>
    </React.Fragment>
  );
};

export default Landing;
