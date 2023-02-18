import React, { useState, useEffect } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { fetchWorkshopById } from "../API/call";

const Workshop = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [generalPayment, setGeneralPayment] = useState(false);

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const { id } = useParams();

  const [workshopDetail, setWorkshopDetail] = useState(null);

  useEffect(() => {
    setWorkshopDetail(fetchWorkshopById(id));
  }, [id]);

  return !workshopDetail ? (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <p className="text-white text-xl">Loading...</p>
    </section>
  ) : (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <h1 className="text-3xl text-white font-semibold px-8 lg:px-0">
        {workshopDetail.workName}
      </h1>
      {/* <h2 className="text-base mt-2 text-gray-400 tracking-widest px-8 lg:px-0">
        {workshopDetail.assnName}
      </h2> */}
      <p className="text-white mt-8 text-base w-full lg:w-[95%] pb-12 px-8 lg:px-0">
        {workshopDetail.desc}
      </p>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-0 my-6">
        <div className="bg-white w-full lg:w-2/3 lg:rounded-3xl lg:p-12 relative py-12 px-8">
          <div className="text-4xl font-bold mb-8 text-[#3c4043]">Agenda</div>

          {workshopDetail.agenda.length > 0 && (
            <div>
              <div className="flex flex-row items-center gap-4 mb-8">
                <p className="text-6xl lg:text-6xl font-semibold tracking-wide text-[#3c4043]">
                  24
                </p>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    March
                  </p>
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    2023
                  </p>
                </div>
              </div>
              {workshopDetail.agenda[0]?.map((item, index) => (
                <div className="ml-8">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="w-6 h-6 z-10 rounded-full bg-[#3c4043]"></div>
                    <div className="text-xl font-semibold text-[#3c4043]">{item.time}</div>
                  </div>
                  <ol className="list-disc pt-2 border-l-[#3c4043] border-l-2 border-dashed ml-3 pl-12 pb-8 space-y-2">
                    {item.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}

          {workshopDetail.agenda.length > 1 && (
            <div>
              <div className="flex flex-row items-center gap-4 my-8">
                <p className="text-6xl lg:text-6xl font-semibold tracking-wide text-[#3c4043]">
                  25
                </p>
                <div className="flex flex-col">
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    March
                  </p>
                  <p className="text-lg font-semibold tracking-wide text-[#3c4043]">
                    2023
                  </p>
                </div>
              </div>
              {workshopDetail.agenda[1].map((item, index) => (
                <div className="ml-8">
                  <div className="flex flex-row gap-4 items-center">
                    <div className="w-6 h-6 z-10 rounded-full bg-[#3c4043]"></div>
                    <div className="text-xl font-semibold text-[#3c4043]">{item.time}</div>
                  </div>
                  <ol className="list-disc pt-2 border-l-[#3c4043] border-l-2 border-dashed ml-3 pl-12 pb-8 space-y-2">
                    {item.description.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-between">
          <button className="lg:bg-[#ffffff] lg:rounded-3xl p-8 lg:p-12 space-y-4 text-center lg:text-left"
            onClick={() => {
              isLoggedIn ? (window.confirm("Are you sure you want to register ?") ? (generalPayment ? navigate("/confirmed") : navigate("/payment")) : console.log("Cancelled")) : navigate("/register");
            }}
          >
            <span className="text-3xl lg:text-3xl font-semibold tracking-wide bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#7470ff]">
              {"Registrations Opening Soon !"}
            </span>
          </button>

          <div className="hidden flex flex-col bg-[#ffffff] lg:rounded-3xl p-8 lg:p-12 space-y-4 justify-center">
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-4xl lg:text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdOutlineLocationOn />
              </p>
              <div className="flex flex-col pl-2">
                <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                  K Block 1<sup>st</sup> Floor
                </p>
                <p className="text-base lg:text-base tracking-wide text-[#3c4043]">
                  Civil Seminar Hall
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-4xl lg:text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <BiRupee />
              </p>
              <div className="flex flex-col pl-2">
                <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                  250 Rs
                </p>
              </div>
            </div>
          </div>

          <div className="lg:bg-[#ffffff] flex-1 flex flex-col lg:rounded-3xl p-8 lg:px-0 lg:pb-0 lg:pt-12 space-y-6">
            <p className="text-3xl lg:text-3xl font-semibold tracking-wide text-white lg:text-[#3c4043] lg:px-12">
              Contact
            </p>

            <div className="flex flex-row items-center justify-between lg:px-12">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(workshopDetail.c1Name)}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {workshopDetail.c1Num}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${workshopDetail.c1Num}`);
                  }}
                >
                  <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${workshopDetail.c1Num}`);
                  }}
                >
                  <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between lg:px-12">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(workshopDetail.c2Name)}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {workshopDetail.c2Num}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${workshopDetail.c2Num}`);
                  }}
                >
                  <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${workshopDetail.c2Num}`);
                  }}
                >
                  <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>

            <div className=" hidden lg:block flex-1  rounded-b-3xl" style={{ background: "linear-gradient(to bottom, white 10%, rgba(255,255,255,0) 100%), url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676552915/1707861b-feb2-4af8-b874-bfee594ae1d1_3600x3600_1_nnggwj.png) ", backgroundSize: "350%" }}>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Workshop;
