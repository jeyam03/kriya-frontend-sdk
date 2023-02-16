import React, { useEffect, useState } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPaperById } from "../API/call";

const Paper = () => {
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

  const [paperDetail, setPaperDetail] = useState(null);

  useEffect(() => {
    setPaperDetail(fetchPaperById(id));
  }, [id]);

  return !paperDetail ? (
    <section className="w-full lg:px-16 font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <p className="text-white text-xl">Loading...</p>
    </section>
  ) : (
    <section className="w-full lg:px-16 font-poppins py-12 pt-28 lg:pt-12 h-screen overflow-y-scroll">
      <h1 className="text-3xl text-white font-semibold px-8 lg:px-0">
        {toTitleCase(paperDetail.eventName)}
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:px-0 my-8 text-black">
        <div className="bg-white w-full lg:w-1/2 lg:rounded-3xl lg:p-12 space-y-8 relative py-8 px-8">
          <p className="text-3xl font-semibold tracking-wider text-[#3c4043]">
            Topic / Theme
          </p>
          <ul className="list-disc text-base lg:text-lg text-[#3c4043] pl-4 space-y-2">
            {paperDetail.topic.split("\n").map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 flex flex-col justify-between">

          <div className="lg:bg-[#ffffff] flex-1 lg:rounded-3xl p-8 lg:p-12 space-y-6">
            <p className="text-3xl lg:text-3xl font-semibold tracking-wide text-white lg:text-[#3c4043]">
              Contact
            </p>

            <div className="flex flex-row items-center justify-between">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(paperDetail.contact1[0])}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {paperDetail.contact1[1]}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${paperDetail.contact1[1]}`);
                  }}
                >
                  <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${paperDetail.contact1[1]}`);
                  }}
                >
                  <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between">
              <div className="w-1/2 lg:w-1/2">
                <p className="text-base lg:text-base font-semibold tracking-wide text-white lg:text-[#3c4043]">
                  {toTitleCase(paperDetail.contact2[0])}
                </p>
                <p className="text-base lg:text-base tracking-wider text-white lg:text-[#3c4043]">
                  {paperDetail.contact2[1]}
                </p>
              </div>
              <div className="space-x-8">
                <button
                  onClick={() => {
                    window.open(`tel:${paperDetail.contact2[1]}`);
                  }}
                >
                  <IoMdCall className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
                <button
                  onClick={() => {
                    window.open(`https://wa.me/${paperDetail.contact2[1]}`);
                  }}
                >
                  <IoLogoWhatsapp className="text-white hover:text-gray-200 lg:text-[#3c4043] lg:hover:text-[#5f6164] text-3xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full my-4 lg:px-0">
            <div className="bg-[#ffffff] w-full lg:rounded-3xl p-8 lg:p-12 space-y-4">
              <p className="text-3xl font-semibold tracking-wider text-[#3c4043]">
                Rules
              </p>
              <ul className="list-disc text-base text-[#3c4043] pl-4  space-y-1">
                {paperDetail.rules.split("\n").map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Paper;