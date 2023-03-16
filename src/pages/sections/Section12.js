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

  const bgUrl = `${parseFloat(consolee) < 0.75 ? "/assets/Design/proshowwhitefinal.png" : "/assets/Design/proshowfinal.png"}`;

  const condition = `${parseFloat(consolee) < 0.75 ? "text-[#181818]" : "text-white"}`;
  const borderCondition = `${parseFloat(consolee) < 0.75 ? "border-[#181818]" : "border-white"}`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section2"
        className="h-screen w-full relative [scroll-snap-align:start] flex flex-row"
      >
        <div className={`w-[77%] h-full`}
          style={{
            background: 'url(' + bgUrl + ')',
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
        </div>
        <div className="w-[23%] h-full flex flex-col items-end justify-center px-12">
          <h1
            className={`text-3xl lg:text-4xl font-poppins font-semibold ${condition} text-right`}
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
                <Link
                  className="bg-blue-500 text-white w-fit px-4 py-3 rounded-xl text-lg font-poppins flex items-center group mt-16"
                  to="/auth/payment?type=GENERAL"
                >
                  <p className="">Pay general registration fee!</p>
                  <IoIosArrowForward
                    className="mr-6 group-hover:mr-4 transition-all"
                    size={20}
                  />
                </Link>
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
        </div>
      </section>
      <a id="anchor2" className="absolute top-[35%] w-full h-20 -z-10"></a>
    </div>
  );
};

export default Section12;
