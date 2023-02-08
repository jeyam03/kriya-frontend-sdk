import React, { useEffect, useState } from "react";
import { IoMdCall, IoLogoWhatsapp } from "react-icons/io";
import { MdAccessTime, MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import TextInput from "../components/TextInput";

const Register = () => {
  const [isLogInPage, setIsLogInPage] = useState(true);

  return (
    <main className="w-screen h-screen overflow-x-hidden flex items-center bg-[#181818] font-poppins">
      <div className="w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen"></div>
      <section
        className={`w-full transition-all duration-200 ease-in-out ${
          isLogInPage ? "bg-[#181818]" : "bg-[#f5f5f5]"
        } h-screen overflow-hidden flex  relative`}
      >
        <div
          className={`transition-all duration-300 ease-in absolute w-[30vw] h-screen top-0 right-[calc(15vw)] z-20 flex justify-center items-center`}
        >
          {isLogInPage ? (
            <div className="w-full py-16 px-8 shadow-xl bg-white space-y-4">
              <h1 className="text-2xl font-bold text-[#181818]">Login</h1>
              <TextInput title="Email" type="email" className="" />
              <button
                onClick={(e) => setIsLogInPage(!isLogInPage)}
                className="w-full text-center"
              >
                Already have an account ?{" "}
              </button>
            </div>
          ) : (
            <div className="w-full py-16 px-8 shadow-xl bg-white space-y-4">
              <h1 className="text-2xl font-bold text-[#181818]">
                Register for Kriya 2023
              </h1>
              <TextInput title="Name" className="" />
              <TextInput title="Email" type="email" className="" />
              <TextInput title="Phone number" className="" />
              <TextInput title="Phone number" className="" />
              <TextInput title="Phone number" className="" />
              <button
                onClick={(e) => setIsLogInPage(!isLogInPage)}
                className="w-full text-center"
              >
                Already have an account ?{" "}
              </button>
            </div>
          )}
        </div>
        <div
          className={`w-4/6 h-screen transition-all duration-200 ease-in-out pr-[15vw] ${
            isLogInPage ? "bg-[#181818]" : "bg-[#f5f5f5]"
          }`}
        >
          <div className="w-full h-full p-8 flex flex-col justify-end">
           Insert Content Here
          </div>
        </div>
        <div
          className="w-2/6 h-screen transition-all duration-200 ease-in-out"
          style={
            isLogInPage
              ? {
                  opacity: "0.5",
                  background:
                    "url(https://res.cloudinary.com/dksmk66vo/image/upload/v1675859289/e8ffd8ea-fc90-48c0-81ec-2703167b1b12_600x400_palaal.svg)",
                  filter: "invert(1)",
                }
              : {
                  opacity: "0.5",
                  background:
                    "url(https://res.cloudinary.com/dksmk66vo/image/upload/v1675859289/e8ffd8ea-fc90-48c0-81ec-2703167b1b12_600x400_palaal.svg)",
                }
          }
        ></div>
      </section>
    </main>
  );
};

export default Register;
