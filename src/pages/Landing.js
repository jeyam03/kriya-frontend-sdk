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
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { fetchUserByEmail } from "../API/call";
import Section10 from "./sections/Section10";

const Landing = () => {
  const [consolee, setConsolee] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

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
    if (!searchParams.get("sn")) return;
    const element = document.querySelector(`#${searchParams.get("sn")}`);
    element.scrollIntoView({ behavior: "smooth" });
  }, [searchParams]);

  const condition =
    parseFloat(consolee) + 0.25 >= 1 && parseFloat(consolee) + 0.25 <= 2;

  return (
    <React.Fragment>
      {/* <div className="bg-white p-4 hiddn rounded-lg fixed top-10 left-10 z-50">
        {consolee}
      </div> */}
      <NavBar consolee={consolee} />
      <NavBarForMobile consolee={consolee} />

      <main
        className={`w-screen overflow-x-hidden transition-all duration-300`}
        style={{
          // background: `rgba(${getColorVal(consolee)}, ${getColorVal(
          //   consolee
          // )}, ${getColorVal(consolee)}, 1)`,
          background: condition
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
        <Section10 scrollYByVH={consolee} />
        <Section5 scrollYByVH={consolee} />
        <Section4 scrollYByVH={consolee} />
        <Section7 scrollYByVH={consolee} />
        <Section6 scrollYByVH={consolee} />
        <Section8 />
        <Section9 />
      </main>
    </React.Fragment>
  );
};

export default Landing;

const NavBar = ({ consolee }) => {
  const condition =
    parseFloat(consolee) + 0.25 >= 1 && parseFloat(consolee) + 0.25 <= 2;
  const navigate = useNavigate();

  return (
    <nav
      className={`${
        consolee >= 0.97 ? "fixed lg:flex" : "lg:hidden"
      } hidden top-0 w-full left-0 right-0 px-3 items-center justify-between lg:justify-evenly space-x-4 lg:space-x-8 z-50 h-14 lg:h-12 shadow-md
      ${condition ? "bg-[#121212]" : "bg-white"} `}
    >
      <button
        onClick={(e) => {
          const element = document.getElementById("section3");
          element.scrollIntoView({ behavior: "smooth" });
        }}
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
      >
        Events
      </button>
      <button
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
        onClick={(e) => {
          const element = document.getElementById("section5");
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Workshops
      </button>
      <button
        onClick={(e) => {
          const element = document.getElementById("section4");
          element.scrollIntoView({ behavior: "smooth" });
        }}
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
      >
        Paper Presentations
      </button>
      <button
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
        onClick={(e) => {
          const element = document.getElementById("section7");
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Our Team
      </button>
      <div
        className={`w-[4.5rem] h-[4.5rem] mt-0 lg:mt-4 -mb-3 lg:mb-1 ${
          condition && "invert"
        }`}
        style={{
          background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
          backgroundPosition: `${window.innerWidth < 768 ? "left" : "center"}`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <button
          className="w-full h-full"
          onClick={(e) => {
            const element = document.getElementById("section1");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        ></button>
      </div>
      <button
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
        onClick={(e) => {
          const element = document.getElementById("section6");
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Sponsors
      </button>
      <button
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
        onClick={(e) => {
          const element = document.getElementById("section8");
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        FAQs
      </button>
      <button
        className={`hidden lg:block text-xs w-1/12 ${
          condition ? "text-gray-300" : "text-gray-500"
        } leading-5 font-poppins ${
          condition ? "hover:text-white" : "hover:text-black"
        } transition-all`}
        onClick={(e) => {
          const element = document.getElementById("section9");
          element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Us
      </button>
      {localStorage.getItem("token") ? (
        <button
          className={`hidden lg:block text-xs w-1/12 ${
            condition ? "text-gray-300" : "text-gray-500"
          } leading-5 font-poppins ${
            condition ? "hover:text-white" : "hover:text-black"
          } transition-all`}
          onClick={(e) => {
            navigate("/portal/profile");
          }}
        >
          Dashboard
        </button>
      ) : (
        <button
          className={`hidden lg:block text-xs w-1/12 ${
            condition ? "text-gray-300" : "text-gray-500"
          } leading-5 font-poppins ${
            condition ? "hover:text-white" : "hover:text-black"
          } transition-all`}
          onClick={(e) => {
            navigate("/auth?type=signup");
          }}
        >
          Register
        </button>
      )}
    </nav>
  );
};

const NavBarForMobile = ({ consolee }) => {
  const [isOpen, setIsOpen] = useState(false);

  const condition =
    parseFloat(consolee) + 0.25 >= 1 && parseFloat(consolee) + 0.25 <= 2;

  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email")).then((res) => {
      console.log(res.data);
      setUserDetails(res.data.user);
    });
  }, []);

  return (
    <nav
      className={`${
        consolee >= 0.25 ? "block" : "hidden"
      }  lg:hidden z-50 w-screen lg:w-1/4 ${
        !condition ? "bg-white" : "bg-black"
      } fixed lg:relative top-0 max-h-screen lg:h-screen overflow-y-scroll px-4 font-poppins shadow-md`}
    >
      <div className="flex w-full justify-between items-center sticky top-0">
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <button
          onClick={(e) => {
            const element = document.getElementById("section1");
            element.scrollIntoView({ behavior: "smooth" });
          }}
          className={`w-[4.5rem] h-[4.5rem] lg:w-28 lg:h-28 mt-0 lg:mt-4 -mb-3 ${
            condition && "invert"
          }`}
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></button>
        <div className="flex justify-end">
          {userDetails ? (
            <Link
              to={"/portal/profile"}
              className="w-8 h-8 rounded-full"
              style={{
                backgroundImage: `url(${userDetails?.profilePhoto})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Link>
          ) : (
            <Link to={"/auth?type=login"} className="w-fit  rounded-lg text-black">
              <FaRegUserCircle size={32} />
            </Link>
          )}
        </div>
      </div>

      <div
        className={`divide-y divide-gray-600 ${
          isOpen ? "h-fit" : "h-0 overflow-hidden"
        } transition-all ease-in-out duration-300`}
      >
        <div className="py-8 w-full flex flex-col">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section3");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Events
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section5");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Workshops
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section4");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Paper Presentations
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section7");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Our Team
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section6");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Sponsors
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section8");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            FAQs
          </button>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              const element = document.getElementById("section9");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className={`w-full ${
              condition ? "text-gray-200" : "text-gray-600"
            } text-left text-base py-2`}
          >
            Contact Us
          </button>
          {localStorage.getItem("token") ? (
            <div>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  navigate("/portal/profile");
                }}
                className={`w-full ${
                  condition ? "text-gray-200" : "text-gray-600"
                } text-left text-base py-2`}
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  localStorage.clear();
                  window.location.reload();
                }}
                className={`w-full ${
                  condition ? "text-gray-200" : "text-gray-600"
                } text-left text-base py-2`}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                navigate("/auth?type=signup");
              }}
              className={`w-full ${
                condition ? "text-gray-200" : "text-gray-600"
              } text-left text-base py-2`}
            >
              Register / Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

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
