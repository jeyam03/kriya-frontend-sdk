import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail, SiYoutube } from "react-icons/si";
import { CgScrollV } from "react-icons/cg";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

const variant1 = {
  initial: {
    y: -900,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

function Section1v2({ scrollByVH }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function Number({ n }) {
    const props = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>
    );
  }

  const toggleSection = (e) => {
    setIsOpen(!isOpen);
  };

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

  return (
    <React.Fragment>
      <div
        className={`lg:hidden flex flex-row w-full ${
          isOpen && "shadow-lg"
        } h-[50vh]`}
      >
        <div className={`px-4 ${isOpen ? "h-full" : "h-fit"} z-10 bg-white`}>
          <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />

        </div>
        <div
          className={`divide-y divide-gray-600 ${
            isOpen ? "h-full overflow-hidden" : "h-0 overflow-hidden"
          } transition-all ease-in-out duration-300`}
        >


          <div
            className={`w-full flex flex-col font-poppins absolute ${
              isOpen ? "z-20 h-[50%]" : "-z-20"
            } bg-white transition-all ease-in-out duration-300`}
          >
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section3");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Events
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section4");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Paper Presentations
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section5");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Workshops
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section6");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Sponsors
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section7");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Our Team
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section8");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              FAQs
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                const element = document.getElementById("section9");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              id="nav-button"
              className={`w-full text-gray-600 text-left text-base py-2`}
            >
              Contact Us
            </button>
            <div className="flex-1"></div>
            <div className="flex flex-row space-x-8 pb-8">
              <button
                className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/studentsunion-psgtech/",
                    "_blank"
                  )
                }
              >
                <BsLinkedin
                  size={24}
                  className=" text-gray-500 hover:text-black"
                />
              </button>
              <button
                className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kriya_psgtech/",
                    "_blank"
                  )
                }
              >
                <BsInstagram
                  size={24}
                  className=" text-gray-500 hover:text-black"
                />
              </button>
              <button
                className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                onClick={() =>
                  window.open("mailto:events@psgkriya.in", "_blank")
                }
              >
                <SiGmail
                  size={24}
                  className=" text-gray-500 hover:text-black"
                />
              </button>
              <button
                className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
                onClick={() =>
                  window.open(
                    "https://youtube.com/c/StudentsUnionPSGTech",
                    "_blank"
                  )
                }
              >
                <SiYoutube
                  size={24}
                  className=" text-gray-500 hover:text-black"
                />
              </button>
              <button
                style={{
                  background: `url(https://d1fdloi71mui9q.cloudfront.net/sdQF8AHkQY6RCSGRVJY5_HjZ8Yx97jSnr03x4)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                className="w-6 h-6 invert hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
                onClick={() =>
                  window.open("https://linktr.ee/su.psgtech", "_blank")
                }
              ></button>
            </div>
          </div>
        </div>
      </div>

        <h1
          id="tagline"
          className="uppercase lg:hidden delay-500 font-poppins text-3xl lg:text-[2.5rem] font-semibold ml-8 -mt-24 lg:-ml-40 lg:-mt-0 lg:mb-8"
        >
          <span className="bg-gradient-to-r from-[#C80067] to-[#7300fe] text-white leading-[3.25rem] lg:leading-[4rem] relative ">
            The Global Clash of Techno Talents.
          </span>
        </h1>
        <div className="w-full flex flex-col items-center">
          <div className="lg:hidden flex flex-row w-full text-[#3c4043] font-poppins font-semibold justify-between">
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={35} />+
              </div>
              <h1 className="text-sm text-center tracking-wide uppercase">
                Events
              </h1>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={12} />+
              </div>
              <h1 className="text-sm text-center tracking-wide uppercase">
                Workshops
              </h1>
            </div>
            <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
              <div className="text-5xl">
                <Number n={6} />
              </div>
              <h1 className="text-xs text-center tracking-wide uppercase">
                Paper Presentations
              </h1>
            </div>
          </div>
          {localStorage.getItem("token") ? (
            <div className="flex flex-row space-x-6 lg:hidden mt-8 items-center justify-center lg:px-12 w-full px-16 z-10">
              <button
                id="registration-prompt"
                className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                onClick={() => {
                  navigate("/portal/profile");
                }}
              >
                Dashboard
              </button>
              <button
                id="registration-prompt"
                className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins bg-white text-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-8 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-row space-x-6 lg:hidden mt-8 items-center justify-center lg:px-12 w-full px-16 z-10">
              <button
                id="registration-prompt"
                className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                onClick={() => {
                  navigate("/auth?type=signup");
                }}
              >
                Register
              </button>
              <button
                id="registration-prompt"
                className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins bg-white text-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-8 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                onClick={() => {
                  navigate("/auth?type=login");
                }}
              >
                Login
              </button>
            </div>
          )}
        </div>



        <div
          className={`flex flex-row space-x-8 lg:hidden  w-full justify-center ${consolee >= 0.75 && "invert"
            }`}
        >
          <div
            className="w-16 h-auto"
            style={{
              background: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>
          <div className=" text-sm lg:text-base w-fit  ">
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


      {isOpen && (
        <div className="hidden lg:flex absolute top-0 left-0 transition-all w-1/2  max-h-max bg-white z-20 items-center">
          <div className="lg:flex flex-col w-[25vw] h-full pl-[calc(100vw/24)] py-[calc(100vw/24)] justify-between">
            <div className="lg:space-y-4 flex flex-col m-20">
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
                  const element = document.querySelector("#section4");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
              >
                Paper Presentations
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
                  const element = document.querySelector("#section6");
                  element.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-left text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
              >
                Sponsors
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
          </div>
        </div>
      )}


      {/* MOB SECTION */}
      

      <div className="hidden lg:grid grid-rows-5 px-20 h-full min-h-screen w-auto bg-white ">
        {/* first section */}
        <div className="flex row-span-3 flex-row justify-between">
          <div className=" sm:hidden lg:flex flex-col w-auto">
            <img
              className="h-96  "
              src="/assets/Logo/Kriya_KLA_Logo_Final.png"
              alt="it is not available"
            />
          </div>

          {/* nav section */}

          <div className="flex flex-col mt-10 items-start justify-start ">
            <div>
              <ul className="flex flex-row justify-end text-sm ml-28">
                <li
                  onClick={() => {
                    const element = document.querySelector("#section8");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-5 text-sm text-gray-600 font-poppins uppercase  tracking-wide  hover:text-black mx-4"
                >
                  FAQ
                </li>
                <li
                  onClick={() => {
                    const element = document.querySelector("#section9");
                    element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-5 text-sm text-gray-600 font-poppins uppercase tracking-wide  hover:text-black mx-4"
                >
                  Contact Us
                </li>
                <li
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/kriya_psgtech/",
                      "_blank"
                    )
                  }
                  className="mt-5 text-sm text-gray-600 font-poppins uppercase  tracking-wide  hover:text-black mx-4"
                >
                  Admin
                </li>
                <div className="flex ml-5 items-start justify-start h-full">
                  <button
                    className="h-16 w-16 bg-black rounded-full flex justify-center items-center"
                    onClick={toggleSection}
                  >
                    {!isOpen ? (
                      <AiOutlineMenu className="text-white " size={20} />
                    ) : (
                      <AiOutlineClose className="text-white " size={20} />
                    )}
                  </button>
                </div>
              </ul>
            </div>

            <div className="flex flex-col justify-end h-full items-start  right-10 mt-28">
              <div className="flex justify-start items-start">
                <div className="w-full font-poppins text-2xl font-semibold tracking-wider text-gray-600 ">
                  <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
                    February <br></br>
                  </span>{" "}
                  22<sup>nd</sup>, 23<sup>rd</sup> & 24<sup>th</sup> 2024
                </div>
              </div>

              <div className="flex flex-col items-start justify-between mt-5">
                <div className="w-full text-start text-4xl font-bold text-red">
                  <h1 className="leading-10">
                    THE{" "}
                    <span className="decoration-slate-700">
                      GLOBAL CLASH OF <br></br>
                    </span>{" "}
                  </h1>
                  TECHNO TALENTS
                  <div className="w-[60%] lg:w-[80%] ml-8 lg:ml-0  h-[4px] bg-gradient-to-r rounded-[2px] from-[#C80067] to-[#7470ff]"></div>
                </div>
                <div className="flex">
                  <div className="hidden lg:flex flex-row w-full text-[#3c4043] font-poppins font-semibold justify-between mt-10 space-x-10">
                    <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
                      <div className="text-5xl">
                        <Number n={64} />+
                      </div>
                      <h1 className="text-sm text-center tracking-wide uppercase">
                        Events
                      </h1>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-between space-y-2">
                      <div className="text-5xl">
                        <Number n={12} />+
                      </div>
                      <h1 className="text-sm text-center tracking-wide uppercase">
                        Workshops
                      </h1>
                    </div>
                    <div className="w-1/3 flex flex-col items-center justify-between space-y-5">
                      <div className="text-5xl">
                        <Number n={6} />
                      </div>
                      <h1 className="text-xs text-center tracking-wide uppercase">
                        Paper Presentations
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex row-span-2 flex-row max-w-full items-center justify-between">
          <div className="flex flex-row space-x-8  justify-start  mt-32">
            <button
              className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/studentsunion-psgtech/",
                  "_blank"
                )
              }
            >
              <BsLinkedin
                size={24}
                className="text-blue-500  shadow-lg transition duration-300 hover:border-blue-700 hover:shadow-lg"
              />
            </button>
            <button
              className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/kriya_psgtech/",
                  "_blank"
                )
              }
            >
              <BsInstagram
                size={24}
                className=" text-[#E4405F] hover:text-black"
              />
            </button>
            <button
              className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
              onClick={() => window.open("mailto:events@psgkriya.in", "_blank")}
            >
              <SiGmail size={25} className=" text-gray-500 hover:text-black" />
            </button>
            <button
              className="hover:-translate-y-2 transition-all duration-500 ease-in-out"
              onClick={() =>
                window.open(
                  "https://youtube.com/c/StudentsUnionPSGTech",
                  "_blank"
                )
              }
            >
              <SiYoutube size={25} className="text-red-800 hover:text-black" />
            </button>
            <button
              style={{
                background: `url(https://d1fdloi71mui9q.cloudfront.net/sdQF8AHkQY6RCSGRVJY5_HjZ8Yx97jSnr03x4)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
              className="w-6 h-6 invert hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-60 hover:opacity-100"
              onClick={() =>
                window.open("https://linktr.ee/su.psgtech", "_blank")
              }
            ></button>
          </div>
          <div className="mt-32 ml-10">
            <button
              onClick={() => {
                const element = document.querySelector("#section2");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-left  text-lg text-gray-600 font-poppins uppercase font-semibold tracking-wide hover:tracking-widest hover:translate-x-2 transition-all duration-300 ease-out hover:text-black"
            >
              <CgScrollV size={30} />
            </button>
          </div>

          <div className="flex flex-col justify-evenly">
            <div className="flex flex-row space-x-5 mr-2 mb-5">
              {localStorage.getItem("token") ? (
                <div className="flex flex-row space-x-6 lg:items-center justify-center lg:px-12 w-full px-16 z-10">
                  <button
                    id="registration-prompt"
                    className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                    onClick={() => {
                      navigate("/portal/profile");
                    }}
                  >
                    Dashboard
                  </button>
                  <button
                    id="registration-prompt"
                    className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins bg-white text-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-8 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                    onClick={() => {
                      localStorage.clear();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-row space-x-6 lg:items-center justify-center lg: pl-10 w-full  z-10">
                  <button
                    id="registration-prompt"
                    className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                    onClick={() => {
                      navigate("/auth?type=signup");
                    }}
                  >
                    Register
                  </button>
                  <button
                    id="registration-prompt"
                    className="lg:text-lg font-semibold w-full text-center flex justify-center font-poppins bg-white text-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-8 py-2 rounded-lg my-8 lg:mb-16 whitespace-nowrap lg:whitespace-normal"
                    onClick={() => {
                      navigate("/auth?type=login");
                    }}
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-row  mb-16">
              <div className="flex ml-10">
                <div
                  className="w-16 h-16 "
                  style={{
                    background: `url(https://upload.wikimedia.org/wikipedia/en/e/eb/PSG_College_of_Technology_logo.png)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                ></div>
                <div className="flex flex-col ml-3">
                  <p className="flex  font-semibold ">
                    Presented By Student Union
                  </p>
                  <p className="text-sm">PSG College of Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
const MenuToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="lg:hidden flex items-center p-1 text-gray-500 lg:hover:text-gray-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};

export default Section1v2;
