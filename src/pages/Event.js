import React, { useState } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [generalPayment, setGeneralPayment] = useState(false);

  return (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      {/* <h1 className="text-3xl text-white font-semibold px-8 lg:px-0">
        Scan and Reckon
      </h1>
      <h2 className="text-base mt-2 text-gray-400 tracking-widest px-8 lg:px-0">
        Brainiac
      </h2>
      <p className="text-white mt-8 text-base w-full lg:w-[70%] pb-12 px-8 lg:px-0">
        An interesting event to bring out the Civil engineer in you. All you
        need for this event is knowledge in AutoCAD software, innovative ideas
        and the talent of justifying your ideas. If you have a knack for all
        this, Come and grab your opportunities.
      </p> */}

      <div className="flex flex-col lg:flex-row gap-4 w-full pt-6 px-4 lg:px-0">
        <div className="bg-white w-full lg:w-1/3 rounded-3xl p-12">
          <p className="text-4xl lg:text-5xl font-semibold tracking-wider text-[#3c4043]">
            Scan Plan and Reckon
          </p>
        </div>
        <div className="bg-white w-full lg:w-2/3 rounded-3xl p-12">
          <p className="text-xl text-justify font-semibold tracking-wider text-[#3c4043]">
            An interesting event to bring out the Civil engineer in you. All you
            need for this event is knowledge in AutoCAD software, innovative
            ideas and the talent of justifying your ideas. If you have a knack
            for all this, Come and grab your opportunities.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-0 my-4 text-white">
        <div className="bg-white w-full lg:w-2/3 lg:rounded-3xl lg:p-12 space-y-16 relative py-8 px-8"
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/management_vogvi4.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <RoundDescription
            roundNumber={1}
            title="Rough Sketch"
            description="Participants should prepare a Line sketch for the specified type
              of building with the specifications provided(eg. Area of the
              plot,size of the rooms) and it should contain the necessary data
              for making a 2-D Plan in AutoCAD by following the NBC guidelines."
          />

          <RoundDescription
            roundNumber={2}
            title="Plan.dwg"
            description="To make a 2-D plan with the drawn line sketch (in ROUND1) in    
              AutoCAD within the given time (45 mins) with all data for the
              construction with accurate dimensioning and using layers.
              Decorative blocks are not necessary, may be provided for
              appearance. Completing the plan fully before the given time will
              be appreciated."
          />

          <RoundDescription
            roundNumber={3}
            title="Budget Assessment"
            description="In this round the selected participants from the previous round
              will have to prepare an approximate estimation and an impressive
              pitch of their proposed plan as a contractor with maximum utility
              to impress the judges and to be crowned as winners. The cost per
              unit area of the materials to be used will be provided, by
              efficiently using the materials for the building the estimation
              should be prepared without negotiating the quality of the
              building. Participants should present their estimate and justify
              the use of materials."
          />
        </div>
        <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-between">
          <button className="lg:bg-[#ffffff] lg:rounded-3xl p-8 lg:p-12 space-y-4 text-left"
            onClick={() => {
              isLoggedIn ? (window.confirm("Are you sure you want to register ?") ? (generalPayment ? navigate("/confirmed") : navigate("/payment")) : console.log("Cancelled")) : navigate("/register");
            }}
          >
            <span className="text-3xl lg:text-3xl font-semibold tracking-wide bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#7470ff]">
              {"Register Here !"}
            </span>
          </button>

          <div className="bg-[#ffffff] flex flex-col lg:rounded-3xl p-8 lg:p-12 space-y-4 justify-center">
            <div className="flex flex-row items-center gap-4 lg:gap-4">
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
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdAccessTime />
              </p>
              <div className="pl-2 flex flex-col">
                <p className="text-base lg:text-base font-semibold tracking-wide text-[#3c4043]">
                  09:30 AM - 12:00 PM
                </p>
                <p className="text-base lg:text-base font-semibold tracking-wide text-[#3c4043]">
                  02:00 PM - 03:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdOutlineLocationOn />
              </p>
              <div className="pl-2 flex flex-col">
                <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                  K Block 1<sup>st</sup> Floor
                </p>
                <p className="text-base lg:text-base tracking-wide text-[#3c4043]">
                  Civil Seminar Hall
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <AiOutlineTeam />
              </p>
              <div className="pl-2 flex flex-col">
                <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                  2 - 3 Members
                </p>
              </div>
            </div>
          </div>

          <div className="lg:bg-[#ffffff] flex-1 lg:rounded-3xl p-8 lg:p-12 space-y-6">
            <p className="text-3xl lg:text-3xl font-semibold tracking-wide text-white lg:text-[#3c4043]">
              Contact
            </p>

            <div className="flex flex-row items-center gap-8">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  Ellakiyaa A
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  7598436113
                </p>
              </div>
              <button
                onClick={() => {
                  window.open("tel:7598436113");
                }}
              >
                <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/7598436113");
                }}
              >
                <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
              </button>
            </div>

            <div className="flex flex-row items-center gap-8">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  Gokul Ram C
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  9361135851
                </p>
              </div>
              <button
                onClick={() => {
                  window.open("tel:9361135851");
                }}
              >
                <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/9361135851");
                }}
              >
                <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 w-full my-4 lg:px-0">
        <div className="bg-[#ffffff] w-full lg:rounded-3xl p-8 lg:p-12 space-y-4">
          <p className="text-3xl font-semibold tracking-wider text-[#3c4043]">
            Rules
          </p>
          <ul className="list-disc text-base tracking-wide text-justify text-[#3c4043] pl-4">
            <li>
              Participants are advised to come with laptop, if not computers
              with autocad version 2007 will only be provided.
            </li>
            <li>
              Time based events and rounds will be conducted on elimination
              basis.
            </li>
            <li>Judges decisions will be final.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const RoundDescription = ({ roundNumber, description, title }) => {
  return (
    <div className="flex w-full ">
      <p className="hidden lg:block w-28 pr-4 text-9xl font-semibold tracking-wider text-[#fff] z-10 opacity-40 text-right">
        {roundNumber}
      </p>
      <div className="space-y-2 z-30 flex-1">
        <p className="tracking-wider uppercase">ROUND {roundNumber}</p>
        <div className="flex flex-row items-end gap-y-4">
          <p className="text-3xl font-semibold tracking-wide text-[#fff]">
            {title}
          </p>
        </div>
        <p className="text-base lg:text-base text-justify text-[#fff] pt-4 lg:pt-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Event;
