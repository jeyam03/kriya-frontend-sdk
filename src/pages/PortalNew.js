import React from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";

const Portal = () => {
  return <main className="w-screen h-screen overflow-x-hidden flex items-center bg-[#181818] ">
    <div className="w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen"></div>
    <NavBar />
    <Main />
  </main>
};

const NavBar = () => {
  return <nav className="w-1/4 bg-white  h-screen overflow-y-scroll px-6 divide-y divide-gray-600 font-poppins">
    <div className="py-8">
      <h1 className="text-5xl font-bold uppercase py-6 ">Kriya '23</h1>

      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Register</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sponsors</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Events</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Workshops</button>
    </div>
    <div className="py-8">
      <h3 className="text-2xl font-semibold py-6">✨ Suggested Events</h3>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Scan and Reckon</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Thirstify</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sodapops</button>
    </div>
    <div className="py-8">
      <h3 className="text-2xl font-semibold py-6">All Events</h3>
      <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Scan and Reckon</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Thirstify</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sodapops</button>

      <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Scan and Reckon</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Thirstify</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sodapops</button>

      <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Scan and Reckon</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Thirstify</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sodapops</button>

      <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Scan and Reckon</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Thirstify</button>
      <button className="w-full text-gray-600 text-left hover:text-black text-lg py-2">Sodapops</button>
    </div>
  </nav>
}

const Main = () => {
  return <section className="w-full px-16 font-poppins py-12 h-screen overflow-y-scroll">
    {/* <h1 className="text-5xl text-white font-semibold">Scan and Reckon</h1>
    <h2 className="text-lg mt-2 text-gray-400 tracking-widest">Brainiac</h2>
    <p className="text-white mt-8 text-lg w-[70%]">An interesting event to bring out the Civil engineer in you. All you need for this event is knowledge in AutoCAD software, innovative ideas and the talent of justifying your ideas. If you have a knack for all this, Come and grab your opportunities.</p> */}

    <div className="flex flex-col lg:flex-row gap-4 w-full px-4 lg:px-0">
      <div className="bg-[#ffffff] w-full lg:w-1/3 rounded-3xl p-12">
        <p className="text-4xl lg:text-5xl font-semibold tracking-wider text-[#3c4043]">
          Scan Plan and Reckon
        </p>
      </div>
      <div className="bg-[#ffffff] w-full lg:w-2/3 rounded-3xl p-12">
        <p className="text-xl text-justify font-semibold tracking-wider text-[#3c4043]">
          An interesting event to bring out the Civil engineer in you. All you
          need for this event is knowledge in AutoCAD software, innovative
          ideas and the talent of justifying your ideas. If you have a knack
          for all this, Come and grab your opportunities.
        </p>
      </div>
    </div>

    <div className="flex flex-col lg:flex-row gap-4 w-full px-4 lg:px-0 my-6">
      <div className="bg-[#ffffff] w-full lg:w-2/3 rounded-3xl p-12 space-y-8 relative">
        <p className="text-9xl font-semibold tracking-wider text-[#3c4043] absolute z-10 opacity-40">
          1
        </p>
        <div className="space-y-2 z-30">
          <p className="pl-[5.5rem] tracking-wider uppercase">ROUND 1</p>
          <div className="flex flex-row items-end gap-y-4">
            <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pl-[5.5rem]">
              Rough Sketch
            </p>
          </div>
          <p className="text-lg lg:text-xl text-justify text-[#3c4043] lg:pl-[5.5rem] pt-4 lg:pt-0">
            Participants should prepare a Line sketch for the specified type
            of building with the specifications provided(eg. Area of the
            plot,size of the rooms) and it should contain the necessary data
            for making a 2-D Plan in AutoCAD by following the NBC guidelines.
          </p>
        </div>

        <p className="text-9xl font-semibold tracking-wider text-[#3c4043] absolute z-10 opacity-40">
          2
        </p>
        <div className="space-y-2 z-30 pt-8">
          <p className="pl-[5.5rem] tracking-wider uppercase">ROUND 2</p>
          <div className="flex flex-row items-end gap-4">
            <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pl-[5.5rem]">
              Plan.dwg
            </p>
          </div>
          <p className="text-lg lg:text-xl text-justify text-[#3c4043] lg:pl-[5.5rem] pt-4 lg:pt-0">
            To make a 2-D plan with the drawn line sketch (in ROUND1) in
            AutoCAD within the given time (45 mins) with all data for the
            construction with accurate dimensioning and using
            layers. Decorative blocks are not necessary, may be provided for
            appearance. Completing the plan fully before the given time will
            be appreciated.
          </p>
        </div>

        <p className="text-9xl font-semibold tracking-wider text-[#3c4043] absolute z-10 opacity-40">
          3
        </p>
        <div className="space-y-2 z-30 pt-8">
          <p className="pl-[5.5rem] tracking-wider uppercase">ROUND 3</p>
          <div className="flex flex-row items-end gap-4">
            <p className="text-3xl font-semibold tracking-wide text-[#3c4043] pl-[5.5rem]">
              Budget Assessment
            </p>
          </div>
          <p className="text-lg lg:text-xl text-justify text-[#3c4043] lg:pl-[5.5rem] pt-4 lg:pt-0">
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
        <div className="bg-[#ffffff] rounded-3xl p-8 lg:p-12 space-y-4">
          <span className="text-3xl lg:text-4xl font-semibold tracking-wide bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#7470ff]">
            {"Register Here !"}
          </span>
        </div>

        <div className="bg-[#ffffff] flex-1 flex flex-col rounded-3xl p-8 lg:p-12 space-y-4 justify-evenly">
          <div className="flex flex-row items-center gap-4 lg:gap-6">
            <p className="text-5xl lg:text-6xl font-semibold tracking-wide text-[#3c4043]">
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
          <div className="flex flex-row items-center gap-4 lg:gap-6">
            <p className="text-4xl lg:text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
              <MdAccessTime />
            </p>
            <div className="flex flex-col">
              <p className="text-lg lg:text-xl font-semibold tracking-wide text-[#3c4043]">
                09:30 AM - 12:00 PM
              </p>
              <p className="text-lg lg:text-xl font-semibold tracking-wide text-[#3c4043]">
                02:00 PM - 03:30 PM
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 lg:gap-6">
            <p className="text-4xl lg:text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
              <MdOutlineLocationOn />
            </p>
            <div className="flex flex-col">
              <p className="text-xl lg:text-2xl font-semibold tracking-wide text-[#3c4043]">
                K Block 1<sup>st</sup> Floor
              </p>
              <p className="text-xl lg:text-2xl tracking-wide text-[#3c4043]">
                Civil Seminar Hall
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 lg:gap-6">
            <p className="text-4xl lg:text-5xl font-semibold tracking-wide text-[#3c4043] p-3">
              <AiOutlineTeam />
            </p>
            <div className="flex flex-col">
              <p className="text-xl lg:text-2xl font-semibold tracking-wide text-[#3c4043]">
                2 - 3 Members
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#ffffff] flex-2 rounded-3xl p-12 space-y-6">
          <p className="text-3xl lg:text-4xl font-semibold tracking-wide text-[#3c4043]">
            Contact
          </p>

          <div className="flex flex-row items-center gap-8">
            <div className="w-1/3 lg:w-1/2">
              <p className="text-xl lg:text-2xl font-semibold tracking-wide text-[#3c4043]">
                Ellakiyaa A
              </p>
              <p className="text-lg lg:text-xl tracking-wider text-[#3c4043]">
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
            <div className="w-1/3 lg:w-1/2">
              <p className="text-xl lg:text-2xl font-semibold tracking-wide text-[#3c4043]">
                Gokul Ram C
              </p>
              <p className="text-lg lg:text-xl tracking-wider text-[#3c4043]">
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

    <div className="flex flex-row gap-4 w-full my-8 px-4 lg:px-0">
      <div className="bg-[#ffffff] w-full rounded-3xl p-12 space-y-4">
        <p className="text-3xl lg:text-4xl font-semibold tracking-wider text-[#3c4043]">
          Rules
        </p>
        <ul className="list-disc text-xl tracking-wide text-justify text-[#3c4043] pl-4">
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
}


export default Portal;
