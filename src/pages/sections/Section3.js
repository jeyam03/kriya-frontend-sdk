import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/Landing.css";
import { IoIosArrowForward } from "react-icons/io";

// Events

const Section3 = () => {
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
    const element = document.querySelector("#anchor3");
    const eventsTexts = document.querySelectorAll(".events-text");
    const observer = new IntersectionObserver((entries) => {
      eventsTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const condition = `${parseFloat(consolee) + 0.25 >= 1 && parseFloat(consolee) + 0.25 <= 2
    ? "text-white"
    : "text-[#181818]"
    }`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section3"
        className="h-full w-full relative lg:px-[calc(100vw/12)] lg:p-16 flex flex-col-reverse lg:flex-row items-center"
      >
        <div className="w-full lg:w-[70vw] h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:px-24 lg:pl-0 font-poppins gap-4 md:gap-8 lg:gap-10">
            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=kriyative"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#5238d1] to-[#8938d1] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/kriyative_aykvbt.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
                  {" Kriyative "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Let your imagination run wild with Kriyative! Whether you're an experienced artist, a hobbyist or a curious beginner, our events will inspire you to think outside the box, experiment with new techniques and express your unique vision.
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-100">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=brainiac"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#8f3ccf] to-[#df51ad] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/brainiac_ui6san.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
                  {" Brainiac "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Unlock Your Inner Genius: Join the Brainiac Brigade! Brainiac events are designed to challenge your intellect, ignite your curiosity and push the boundaries of your knowledge. From trivia challenges to mind-bending puzzles, there's something for every cerebral superhero.
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event?ctg=brainiac"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=coding"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#dc4fab] to-[#eb587b] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/coding_uyxd7c.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
                  {" Coding "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Whether you're a seasoned coder or just starting out, our events offer something for everyone. Explore cutting-edge technologies, connect with like-minded coders, and compete for glory in our exciting challenges. Unleash the power of programming and take your skills to the next level at our Coding Events!
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event?ctg=coding"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-500">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=circuit"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#e8567c] to-[#f48555] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/circuit_odhzwt.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
                  {" Circuit "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Delve into the world of circuit engineering! From digital electronics to power systems, our Circuit Events cover it all. Get ready to master the fundamentals of circuit design and don’t miss out on this high-voltage opportunity to supercharge your knowledge and network with fellow circuit enthusiasts!
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event?ctg=circuit"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=core"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#eac64a] to-[#2ea47e] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/core_x2lxoi.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
                  {" Core Engineering "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Unleash your inner engineer and dive into the world of innovation with our cutting-edge Core Engineering events at this Kriya! Discover the power of engineering, and explore endless possibilities to put your skills to the test.
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event?ctg=core"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>

            <div className="p-4 space-y-2 events-text opacity-0 delay-700">
              <Link
                className="flex items-center space-x-4"
                to="/portal/event?ctg=management"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#02b7e6] to-[#00c37b] flex items-center justify-center">
                  <div
                    style={{
                      background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676785694/Category%20logos/manager_fmqb9i.png)`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                    className="w-8 h-8 invert"
                  >
                  </div>
                </div>
                <p className="bg-clip-text font-semibold lg:font-normal text-2xl py-2 tracking-wide [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#00c37b]">
                  {" Management "}
                </p>
              </Link>
              <p className={`${condition} text-sm pb-2 text-justify`}>
                Calling all aspiring leaders and entrepreneurs! Explore the dynamic world of Management at Kriya. From strategic planning to marketing and innovation, join us for an engaging and exhilarating set of events that will put your leadership skills to the test.
              </p>
              <Link
                className="bg-blue-500 text-white w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event?ctg=management"
              >
                <p className="">Explore more</p>
                <IoIosArrowForward className="ml-1 group-hover:ml-2 transition-all" size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[30vw] px-12 lg:pr-0">
          <h1
            className={`text-4xl lg:text-6xl font-poppins font-semibold ${condition} events-text opacity-0 text-center lg:text-right`}
          >
            Unleash your
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" potential"}
            </span>
            , participate in events.
          </h1>
        </div>
      </section>
      <a
        id="anchor3"
        className="absolute top-[40%] lg:top-[75%] w-full h-20"
      ></a>
      <div className="absolute top-[100%] w-full h-10"></div>
    </div>
  );
};

export default Section3;
