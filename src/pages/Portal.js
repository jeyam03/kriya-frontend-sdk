import React from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

const Portal = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center p-8 lg:p-12 gap-4 font-sans">
      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-3/4">
        <div className="bg-[#dbeaf3] w-full lg:w-1/3 rounded-3xl p-12">
          <p className="text-5xl font-semibold tracking-wider text-[#3c4043]">
            Scan Plan and Reckon
          </p>
        </div>
        <div className="bg-[#dbeaf3] w-full lg:w-2/3 rounded-3xl p-12">
          <p className="text-xl text-justify font-semibold tracking-wider text-[#3c4043]">
            An interesting event to bring out the Civil engineer in you. All you
            need for this event is knowledge in AutoCAD software, innovative
            ideas and the talent of justifying your ideas. If you have a knack
            for all this, Come and grab your opportunities.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-3/4">
        <div className="bg-[#dbeaf3] w-full lg:w-2/3 rounded-3xl p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex flex-row items-end gap-4">
              <p className="text-9xl font-semibold tracking-wider text-[#3c4043]">
                1
              </p>
              <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pb-2">
                Rough Sketch
              </p>
            </div>
            <p className="text-xl tracking-wide text-justify text-[#3c4043] pl-12">
              Participants should prepare a Line sketch for the specified type
              of building with the specifications provided(eg. Area of the
              plot,size of the rooms) and it should contain the necessary data
              for making a 2-D Plan in AutoCAD by following the NBC guidelines.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-row items-end gap-4">
              <p className="text-9xl font-semibold tracking-wider text-[#3c4043]">
                2
              </p>
              <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pb-2">
                Plan.dwg
              </p>
            </div>
            <p className="text-xl tracking-wide text-justify text-[#3c4043] pl-12">
              To make a 2-D plan with the drawn line sketch (in ROUND1) in
              AutoCAD within the given time (45 mins) with all data for the
              construction with accurate dimensioning and using
              layers.Decorative blocks are not necessary,may be provided for
              appearance. Completing the plan fully before the given time will
              be appreciated.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-row items-end gap-4">
              <p className="text-9xl font-semibold tracking-wider text-[#3c4043]">
                3
              </p>
              <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pb-2">
                Budget Assessment
              </p>
            </div>
            <p className="text-xl tracking-wide text-justify text-[#3c4043] pl-12">
              In this round the selected participants from the previous round
              will have to prepare an approximate estimation and an impressive
              pitch of their proposed plan as a contractor with maximum utility
              to impress the judges and to be crowned as winners. The cost per
              unit area of the materials to be used will be provided, by
              efficiently using the materials for the building the estimation
              should be prepared without negotiating the quality of the
              building. Participants should present their estimate and justify
              the use of materials.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/3 space-y-4 flex flex-col justify-between">
          <div className="bg-gradient-to-br from-[#c7713e] via-[#dc9377] to-[#eec797] rounded-3xl p-12 space-y-4">
            <p className="text-4xl font-semibold tracking-wide text-white">
              Register Here !
            </p>
          </div>

          <div className="bg-[#e8edd7] flex-1 rounded-3xl p-12 space-y-4">
            <div className="flex flex-row items-center gap-6">
              <p className="text-6xl font-semibold tracking-wide text-[#3c4043]">
                24
              </p>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  March
                </p>
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  2023
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <p className="text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdAccessTime />
              </p>
              <div className="flex flex-col">
                <p className="text-xl font-semibold tracking-wide text-[#3c4043]">
                  09:30 AM - 12:00 PM
                </p>
                <p className="text-xl font-semibold tracking-wide text-[#3c4043]">
                  02:00 PM - 03:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <p className="text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
                <MdOutlineLocationOn />
              </p>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  K Block 1<sup>st</sup> Floor
                </p>
                <p className="text-2xl tracking-wide text-[#3c4043]">
                  Civil Seminar Hall
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-6">
              <p className="text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
                <AiOutlineTeam />
              </p>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  2 - 3 Members
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#dbeaf3] flex-1 rounded-3xl p-12 space-y-4">
            <p className="text-4xl font-semibold tracking-wide text-[#3c4043]">
              Contact
            </p>

            <div className="flex flex-row items-center gap-8">
              <div className="w-1/2">
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  Ellakiyaa A
                </p>
                <p className="text-xl tracking-wider text-[#3c4043]">
                  7598436113
                </p>
              </div>
              <button
                onClick={() => {
                  window.open("tel:7598436113");
                }}
              >
                <IoMdCall className="text-[#3c4043] hover:text-[#5f6164] text-3xl" />
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/7598436113");
                }}
              >
                <IoLogoWhatsapp className="text-[#3c4043] hover:text-[#5f6164] text-3xl" />
              </button>
            </div>

            <div className="flex flex-row items-center gap-8">
              <div className="w-1/2">
                <p className="text-2xl font-semibold tracking-wide text-[#3c4043]">
                  Gokul Ram C
                </p>
                <p className="text-xl tracking-wider text-[#3c4043]">
                  9361135851
                </p>
              </div>
              <button
                onClick={() => {
                  window.open("tel:9361135851");
                }}
              >
                <IoMdCall className="text-[#3c4043] hover:text-[#5f6164] text-3xl" />
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/9361135851");
                }}
              >
                <IoLogoWhatsapp className="text-[#3c4043] hover:text-[#5f6164] text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 w-full lg:w-3/4">
        <div className="bg-[#eeedf4] w-full rounded-3xl p-12 space-y-4">
          <p className="text-3xl font-semibold tracking-wider text-[#3c4043]">
            Rules
          </p>
          <p className="text-xl tracking-wide text-justify text-[#3c4043]">
            <li>
              Participants are advised to come with laptop, if not computers
              with autocad version 2007 will only be provided.
            </li>
            <li>
              Time based events and rounds will be conducted on elimination
              basis.
            </li>
            <li>Judges decisions will be final.</li>
          </p>
        </div>
      </div>
    </section>
  );
};

export const PortalAnother = () => {
  return (
    <div className="relative flex flex-row overflow-hidden">
      <div className="absolute w-full h-full bg-black/50 z-[-1]"></div>
      <div className="absolute w-full h-full z-[-2]">
        <img
          className="object-cover w-full h-full"
          src="https://assets.justinmind.com/wp-content/uploads/2020/01/free-vector-image-designs-header-768x492.png"
        />
      </div>
      <section className="h-screen relative w-[65%] px-20 py-10">
        <div className="w-[80%]">
          <h1 className="text-7xl text-white mb-4">Scan Plan and Reckon</h1>
          <h1 className="text-xl text-white">
            An interesting event to bring out the Civil engineer in you. All you
            need for this event is knowledge in AutoCAD software, innovative
            ideas and the talent of justifying your ideas. If you have a knack
            for all this, Come and grab your opportunities.
          </h1>
        </div>
      </section>
      <div className="flex-1 overflow-y-auto h-screen py-20 px-10">
        <div className="mb-16">
          <div className="p-5 bg-white rounded-xl mb-4">
            <h1 className="text-2xl">Rounds</h1>
          </div>
          <div className="p-5 bg-white rounded-xl mb-4 flex flex-row items-center space-x-6">
            <div>
              <p className="text-9xl">1</p>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl mb-4">ROUGH SKETCH</h1>
              <p>
                Participants should prepare a Line sketch for the specified type
                of building with the specifications provided(eg. Area of the
                plot,size of the rooms) and it should contain the necessary data
                for making a 2-D Plan in AutoCAD by following the NBC guidelines
              </p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl mb-4 flex flex-row items-center space-x-6">
            <div>
              <p className="text-9xl">2</p>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl mb-4">PLAN.dwg</h1>
              <p>
                To make a 2-D plan with the drawn line sketch (in ROUND1) in
                AutoCAD within the given time (45 mins) with all data for the
                construction with accurate dimensioning and using
                layers.Decorative blocks are not necessary,may be provided for
                appearance. Completing the plan fully before the given time will
                be appreciated.
              </p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-xl mb-4 flex flex-row items-center space-x-6">
            <div>
              <p className="text-9xl">3</p>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl mb-4">BUDGET ASSESSMENT</h1>
              <p>
                In this round the selected participants from the previous round
                will have to prepare an approximate estimation and an impressive
                pitch of their proposed plan as a contractor with maximum
                utility to impress the judges and to be crowned as winners. The
                cost per unit area of the materials to be used will be provided,
                by efficiently using the materials for the building the
                estimation should be prepared without negotiating the quality of
                the building. Participants should present their estimate and
                justify the use of materials.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="p-5 bg-white rounded-xl mb-4">
            <h1 className="text-2xl">Rules</h1>
          </div>
          <div className="p-5 bg-white rounded-xl mb-4 flex flex-col space-y-2">
            <p>
              Participants are advised to come with laptop, if not computers
              with autocad version 2007 will only be provided.
            </p>
            <p>
              Time based events and rounds will be conducted on elimination
              basis.
            </p>
            <p>Judges decisions will be final.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portal;
