import React, { useEffect, useState } from "react";
import "../styles/Landing.css";

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
      <div className="bg-white p-4 hiddn rounded-lg fixed top-10 left-10">
        {consolee}
      </div>
      <nav className="fixed top-0 w-full left-0 right-0 p-4 flex justify-center space-x-24 ">
        <button
          className={`text-xs text-gray-600 leading-5 ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Events
        </button>
        <button
          className={`text-xs text-gray-600 leading-5 ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Workshops
        </button>
        <div className="w-16"></div>
        <button
          className={`text-xs text-gray-600 leading-5 ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Sponsors
        </button>
        <button
          className={`text-xs text-gray-600 leading-5 ${
            consolee > 1 ? "hover:text-black" : "hover:text-gray-300"
          } transition-all`}
        >
          Register
        </button>
      </nav>
      <main
        className={`w-screen overflow-x-hidden transition-all duration-700`}
        style={{
          // background: `rgba(${getColorVal(consolee)}, ${getColorVal(
          //   consolee
          // )}, ${getColorVal(consolee)}, 1)`,
          background:
            consolee % 2 <= 1
              ? `rgba(18, 18, 18, 1)`
              : `rgba(255, 255, 255, 1)`,
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
        <Section2 />
        <section id="section3" className=" h-screen w-full"></section>
        <section id="section3" className=" h-screen w-full"></section>
        <section id="section3" className=" h-screen w-full"></section>
      </main>
    </React.Fragment>
  );
};

const Section1 = () => {
  useEffect(() => {
    // handleFireflies();
  }, []);

  const handleFireflies = () => {
    let c = init("canvas");
    let canvas = document.getElementById("canvas");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    //initiation

    class firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 4;
      }
      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
      }
      show() {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3";
        c.fill();
      }
    }

    let f = [];

    function draw() {
      if (f.length < 100) {
        for (let j = 0; j < 10; j++) {
          f.push(new firefly());
        }
      }
      //animation
      for (let i = 0; i < f.length; i++) {
        f[i].move();
        f[i].show();
        if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
          f.splice(i, 1);
        }
      }
    }

    let mouse = {};
    let last_mouse = {};

    canvas.addEventListener(
      "mousemove",
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );
    function init(elemid) {
      let canvas = document.getElementById(elemid),
        c = canvas.getContext("2d"),
        w = (canvas.width = window.innerWidth),
        h = (canvas.height = window.innerHeight);
      c.fillStyle = "rgba(30,30,30,1)";
      c.fillRect(0, 0, w, h);
      return c;
    }

    window.requestAnimFrame = function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback);
        }
      );
    };

    function loop() {
      window.requestAnimFrame(loop);
      c.clearRect(0, 0, w, h);
      draw();
    }

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      loop();
    });

    loop();
    setInterval(loop, 1000 / 60);
  };

  return (
    <section
      id="section1"
      className=" h-screen w-full relative [scroll-snap-align:start]"
    >
      <canvas
        id="canvas"
        className="-z-10 w-full h-full [filter:blur(1px)]"
      ></canvas>
    </section>
  );
};

const Section2 = () => {
  const [fadeInAnimate, setFadeInAnimate] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".anchor");
    const numberTags = document.querySelectorAll(".number-tag");
    const calenderText = document.querySelector(".calender-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        numberTags.forEach((numberTag) => {
          numberTag.classList.add("animate-fade-in-top");
        });
        calenderText.classList.add("animate-fade-in");
      } else {
        numberTags.forEach((numberTag) => {
          numberTag.classList.remove("animate-fade-in-top");
        });
        calenderText.classList.remove("animate-fade-in");
      }
    });

    observer.observe(element);
  });

  useEffect(() => {
    console.log(fadeInAnimate);
  }, [fadeInAnimate]);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <section
        id="section2"
        className="h-screen w-full relative [scroll-snap-align:start] m-0 p-0 pt-16 flex flex-col lg:flex-row"
      >
        <div className="w-full lg:w-[50vw] pl-[calc(100vw/12)] py-16 pr-16 calender-text">
          <h1 className="text-7xl  font-bold text-[#181818]">
            Mark your calendar for your next big event
          </h1>
          <p className="text-xl mt-8 text-[#181818]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
            amet mattis eros, et porta nibh. Interdum et malesuada fames.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 w-full lg:w-[50vw] pr-[calc(100vw/12)] relative">
          <NumberAndTag fadeInAnimate={fadeInAnimate} number="50" tag="days" />
          <NumberAndTag fadeInAnimate={fadeInAnimate} number="12" tag="hours" />
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number="56"
            tag="minutes"
          />
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number="24"
            tag="seconds"
          />
        </div>
      </section>
      <a className="anchor"></a>
    </React.Fragment>
  );
};

const NumberAndTag = ({ number, tag, fadeInAnimate }) => {
  return (
    <div className="relative w-[40ch] number-tag">
      <h1 className="absolute bottom-4 right-4 [line-height:40vh] bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-b from-[rgba(18,18,18,0.3)] to-[rgba(18,18,18,0.7)] text-[40vh] text-red-400 font-oswald font-bold tracking-[-0.15em]">
        {number}&nbsp;
      </h1>
      <p className="absolute right-4 bottom-8 uppercase text-[rgb(18,18,18)] text-5xl font-bold font-oswald">
        {tag}
      </p>
    </div>
  );
};

export default Landing;
