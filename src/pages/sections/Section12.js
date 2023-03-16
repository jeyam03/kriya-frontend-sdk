import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserByEmail } from "../../API/call";

// Countdown

const Section12 = ({ scrollYByVH }) => {
  const [consolee, setConsolee] = useState(0);
  const [paid, setPaid] = useState(false);
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserByEmail(email).then((res) => {
      if (res.data.user.isPaid) {
        setPaid(true);
      }
    });
  }, [email]);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  const bgUrl = `${
    parseFloat(consolee) < 0.75
      ? "/assets/Design/proshowwhitefinal.png"
      : "/assets/Design/proshowfinal.png"
  }`;

  const mobBgUrl = "/assets/Design/syed6.jpg";

  const condition = `${
    parseFloat(consolee) < 0.75 ? "text-[#181818]" : "text-white"
  }`;
  const borderCondition = `${
    parseFloat(consolee) < 0.75 ? "border-[#181818]" : "border-white"
  }`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section2"
        className="h-screen w-full relative [scroll-snap-align:start] flex flex-col lg:flex-row"
      >
        <img src={bgUrl} className="hidden lg:block h-full" />
        <img src={mobBgUrl} className="w-full lg:hidden" />

        <div className="flex-1 h-full flex flex-col items-center lg:items-end justify-center px-12">
          <h1
            className={`mt-16 lg:mt-0 text-4xl lg:text-5xl font-poppins font-semibold ${condition} text-center lg:text-right`}
          >
            Entry
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" included "}
            </span>
            with general registration!
          </h1>
          {localStorage.getItem("email") ? (
            <div>
              {paid ? (
                <button
                  className={`mt-16 w-fit px-4 py-2 text-lg font-poppins rounded-lg ${borderCondition} ${condition} border`}
                  onClick={() => {
                    window.open(
                      "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230325T123000Z%2F20230325T153000Z&details=&location=PSG%20College%20of%20Technology&text=Kriya%20%2723%20Pro%20Show"
                    );
                  }}
                >
                  Add to Calendar
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white w-fit px-4 py-3 rounded-xl font-poppins flex items-center group mt-16"
                  onClick={() => navigate("/auth/payment?type=GENERAL")}
                >
                  <p className=" text-lg">Pay general registration fee!</p>
                  <IoIosArrowForward
                    className="ml-2 transition-all group-hover:translate-x-2"
                    size={24}
                  />
                </button>
              )}
            </div>
          ) : (
            <button
              className="lg:text-lg font-semibold w-fit text-center flex justify-center font-poppins text-white bg-[#C80067] border-2 border-[#C80067] shadow-lg hover:scale-110 transition-all px-6 py-2 rounded-lg mt-16 whitespace-nowrap lg:whitespace-normal"
              onClick={() => {
                navigate("/auth?type=signup");
              }}
            >
              Register Now!
            </button>
          )}
          <div className="mt-8 lg:mt-16">
            <p className="text-white font-poppins text-lg text-center lg:text-right">
              Know more
            </p>
            <div className="flex flex-wrap justify-end space-x-4 items-center mt-4">
              <button
                onClick={() =>
                  window.open(
                    "https://open.spotify.com/artist/3gQ8iee3y7UsGTMuhjzEuD"
                  )
                }
                className="border-[#1DB954] border-2 rounded-lg p-4 [box-shadow:0px_0px_32px_rgba(30,215,96,0.6)]"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111624.png"
                  alt=""
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UC27ndgSDz1uqVhTG9n_ytDA"
                  )
                }
                className="border-[#ff0000] border-2 rounded-lg p-4 [box-shadow:0px_0px_32px_rgba(255,0,0,0.6)]"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                  alt=""
                  className="w-8 h-8"
                />
              </button>
              <button
                onClick={() =>
                  window.open("https://www.instagram.com/syedsubahan/?hl=en")
                }
                className="border-[#E1306C] border-2 rounded-lg p-4 [box-shadow:0px_0px_32px_rgba(225,48,108,0.6)]"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                  alt=""
                  className="w-8 h-8"
                />
              </button>
            </div>
          </div>
        </div>
      </section>
      <a id="anchor2" className="absolute top-[35%] w-full h-20 -z-10"></a>
    </div>
  );
};

export default Section12;
