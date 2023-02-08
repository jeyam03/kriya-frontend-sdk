import React, { useEffect } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import TextInput from "../components/TextInput";

const Register = () => {
  return (
    <main className="w-screen h-screen overflow-x-hidden flex items-center bg-[#181818] font-poppins">
      <div className="w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen"></div>
      <section className="w-full bg-[#f5f5f5] h-screen overflow-hidden flex relative">
        <div className="absolute w-[30vw] h-screen top-0 right-[calc(15vw)] z-20 flex justify-center items-center">
          <div className="w-full py-16 px-8 shadow-xl bg-white space-y-4">
            <h1 className="text-2xl font-bold text-[#181818]">
              Register for Kriya 2023
            </h1>
            <TextInput title="Name" className="" />
            <TextInput title="Email" type="email" className="" />
            <TextInput title="University/College" className="" />
            <TextInput title="" className="" />
          </div>
        </div>
        <div className="w-4/6 h-screen bg-[#f5f5f5]"></div>
        <div
          className="w-2/6 h-screen "
          style={{
            opacity: "0.5",
            background:
              "url(https://res.cloudinary.com/dksmk66vo/image/upload/v1675859289/e8ffd8ea-fc90-48c0-81ec-2703167b1b12_600x400_palaal.svg)",
          }}
        ></div>
      </section>
    </main>
  );
};

export default Register;
