import React, { useState } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Workshop = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [generalPayment, setGeneralPayment] = useState(false);

  return (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <h1 className="text-3xl text-white font-semibold px-8 lg:px-0">
        IoT system design using Embedded C and Python
      </h1>
      <h2 className="text-base mt-2 text-gray-400 tracking-widest px-8 lg:px-0">
        Workshop
      </h2>
      <p className="text-white mt-8 text-base w-full lg:w-[70%] pb-12 px-8 lg:px-0">
        The new era of imagination and deployment for a connected world is
        opened through Internet of Things with edge sensor nodes getting more
        and more intelligent and able to transmit directly to cloud and also get
        controlled. This workshop will provide a good understanding of Internet
        of Things and its exploding applications. The interactive lectures and
        hands-on exercises will provide attendees with a deep understanding of
        the technical aspects of IoT and inbuilt network processors.
      </p>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-0 my-6">
        <div className="bg-white w-full lg:w-2/3 lg:rounded-3xl lg:p-12 space-y-4 relative py-12 px-8 lg:px-8">
          <div className="text-4xl font-bold pb-8">Agenda</div>
          <p className="text-xs text-gray-500">8.30-9.30</p>
          <ol className="list-decimal pl-4">
            {" "}
            <li> Overview on Iot technology and its application </li>
            <li>
              Introduction to STEPS Iot Development kit (will be provided) with
              built in network processor, IDE Platform
            </li>
          </ol>
          <p className="text-xs text-gray-500"> 9.30-11.30</p>
          <ol className="list-decimal pl-4">
            <li>
              {" "}
              Preparing Sensor Node (Things) Embedded C Arduino API Programming{" "}
            </li>
            <li>Sensor and actuators </li>
            <li>Creating own webserver using HTTP protocol</li>
          </ol>
          <p className="text-xs text-gray-500"> 11.45-1.00 </p>
          <ol className="list-decimal pl-4">
            {" "}
            <li> Iot communication models – HTTP & MQTT protocol </li>
          </ol>
          <p className="text-xs text-gray-500"> 2.00-5.30 </p>
          <ol className="list-decimal pl-4">
            {" "}
            <li>
              {" "}
              Implementation of Iot system – sending date to cloud, data
              analysis and visualization using Think Speak cloud server
            </li>{" "}
            <li> Dash board creation </li>
            <li> Python programming implementation in microcontroller</li>
          </ol>
        </div>
        <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-between">
          <button className="lg:bg-[#ffffff] lg:rounded-3xl p-8 lg:p-12 space-y-4 text-left"
            onClick={() => {
              isLoggedIn ? window.confirm("Are you sure you want to register ?") && generalPayment ? navigate("/confirmed") : navigate("/payment") : navigate("/register");
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
              <p className="text-3xl lg:text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdAccessTime />
              </p>
              <div className="flex flex-col">
                <p className="text-base lg:text-base font-semibold tracking-wide text-[#3c4043]">
                  09:30 AM - 12:00 PM
                </p>
                <p className="text-base lg:text-base font-semibold tracking-wide text-[#3c4043]">
                  02:00 PM - 03:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-3xl lg:text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdOutlineLocationOn />
              </p>
              <div className="flex flex-col">
                <p className="text-base lg:text-lg font-semibold tracking-wide text-[#3c4043]">
                  K Block 1<sup>st</sup> Floor
                </p>
                <p className="text-base lg:text-base tracking-wide text-[#3c4043]">
                  Civil Seminar Hall
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 lg:gap-6">
              <p className="text-3xl lg:text-4xl font-semibold tracking-wide text-[#3c4043] p-3">
                <AiOutlineTeam />
              </p>
              <div className="flex flex-col">
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
              <div className="w-1/3 lg:w-1/2">
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
              <div className="w-1/3 lg:w-1/2">
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

    </section>
  );
};

const RoundDescription = ({ roundNumber, description, title }) => {
  return (
    <React.Fragment>
      <p className="hidden lg:block text-9xl font-semibold tracking-wider text-[#3c4043] absolute z-10 opacity-40 text-right">
        {roundNumber}
      </p>
      <div className="space-y-2 z-30">
        <p className="lg:pl-[5.5rem] tracking-wider uppercase">
          ROUND {roundNumber}
        </p>
        <div className="flex flex-row items-end gap-y-4">
          <p className="text-3xl font-semibold tracking-wide text-[#3c4043] lg:pl-[5.5rem]">
            {title}
          </p>
        </div>
        <p className="text-base lg:text-base text-justify text-[#3c4043] lg:pl-[5.5rem] pt-4 lg:pt-0">
          {description}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Workshop;
