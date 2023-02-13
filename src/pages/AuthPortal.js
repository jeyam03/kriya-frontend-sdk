import React, { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Dropdown from "../components/Dropdown";
import colleges from "./CollegeList";
import { useNavigate, useSearchParams } from "react-router-dom";

const GOOGLE_ICON = "https://cdn-icons-png.flaticon.com/512/281/281764.png";

const AuthPortal = () => {
  const [isLogInPage, setIsLogInPage] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("type") === "signup") {
      setIsLogInPage(false);
    } else {
      setIsLogInPage(true);
      setSearchParams({ type: "login" });
    }
  }, [searchParams]);

  const switchPage = (page) => {
    if (page === "login") {
      setIsLogInPage(true);
      setSearchParams({ ...searchParams, type: "login" });
    } else if (page === "register") {
      setIsLogInPage(false);
      setSearchParams({ ...searchParams, type: "signup", page: 1 });
    }
  };

  return (
    <main className="w-screen h-screen overflow-x-hidden flex items-center bg-[#181818] font-poppins">
      <div className="hidden lg:block w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen"></div>
      <section
        className={`w-full transition-all duration-200 ease-in-out ${
          isLogInPage ? "bg-[#181818]" : "bg-[#f5f5f5]"
        } h-screen overflow-hidden flex  relative`}
      >
        <div
          className={`transition-all duration-300 ease-in absolute w-[calc(100vw)] lg:w-[30vw] h-screen top-0 px-4 lg:px-0 lg:right-[calc(15vw)] z-20 flex justify-center items-center`}
        >
          {isLogInPage ? (
            <Login switchPage={switchPage} />
          ) : (
            <RegisterPage1 switchPage={switchPage} />
          )}
        </div>
        <div
          className={`hidden lg:block lg:w-4/6 h-screen transition-all duration-200 ease-in-out pr-[15vw] ${
            isLogInPage ? "bg-[#181818]" : "bg-[#eeeeee]"
          }`}
        >
          <div className="w-full h-full p-8 flex flex-col items-center justify-center">
            <img
              src="https://res.cloudinary.com/dksmk66vo/image/upload/v1674502647/Kriya_Logo_2023_white_npmqdj.png"
              alt="logo"
              className={`${
                !isLogInPage && "invert"
              } transition-all duration-400 w-64`}
            />
          </div>
        </div>
        <div
          className="w-full lg:w-2/6 h-screen transition-all duration-200 ease-in-out"
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

export default AuthPortal;

const Login = ({ switchPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <h1 className="text-2xl font-bold text-[#181818]">Login</h1>
      <div className="w-full space-y-4 py-4">
        <button className="bg-white shadow-lg px-4 py-3 w-full hover:bg-gray-300 transition-all border-gray-300 border-2 rounded-lg flex items-center justify-center space-x-6">
          <img
            src={GOOGLE_ICON}
            className="h-6 aspect-square w-6"
            alt="Google Icon"
          />
          <p className="">Login with Google</p>
        </button>
      </div>
      <div className="w-full border-t border-t-gray-400 space-y-4 py-4">
        <TextInput
          title="Email"
          type="email"
          className=""
          valueState={[email, setEmail]}
        />
        <TextInput
          title="Password"
          className=""
          valueState={[password, setPassword]}
        />
      </div>
      <button className="bg-black hover:bg-gray-700 transition-all duration-500 w-full text-white rounded-lg py-3 px-4">
        Login with Email
      </button>
      <button
        onClick={(e) => switchPage("register")}
        className="w-full text-center"
      >
        Already have an account ?{" "}
      </button>
    </div>
  );
};

const RegisterPage1 = ({ switchPage }) => {
  return (
    <div className="w-full py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <h1 className="text-2xl font-bold text-[#181818]">
        Register for Kriya 2023
      </h1>
      <p className="">Choose the method of Registration</p>
      <a href="http://localhost:5002/api/auth/google" className="bg-white shadow-lg px-4 py-3 w-full hover:bg-gray-300 transition-all border-gray-300 border-2 rounded-lg flex items-center justify-center space-x-6">
        <img
          src={GOOGLE_ICON}
          className="h-6 aspect-square w-6"
          alt="Google Icon"
        />
        <p className="">Register with Google</p>
      </a>
      <button className="bg-black hover:bg-gray-700 transition-all duration-500 w-full text-white rounded-lg py-3 px-4">
        Register with Email
      </button>
      <button
        onClick={(e) => switchPage("login")}
        className="w-full text-center"
      >
        Already have an account ?{" "}
      </button>
      <p className="w-full text-xs text-center">Page 1 of 3</p>
    </div>
  );
};

const RegisterPage2 = ({ switchPage }) => {
  const [college, setCollege] = useState("");

  return (
    <div className="w-full py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <h1 className="text-2xl font-bold text-[#181818]">
        Register for Kriya 2023
      </h1>
      <TextInput title="Name" className="" />
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-2 w-full">
        <TextInput title="Email" type="email" className="w-full lg:w-1/2" />
        <TextInput title="Phone number" className="w-full lg:w-1/2" />
      </div>
      <Dropdown
        valueState={[college, setCollege]}
        title="College/University"
        className=""
        placeholder="Select a college"
        options={colleges}
      />
      <TextInput title="Referral Code" className="" />
      <button className="bg-black hover:bg-gray-700 transition-all duration-500 w-full text-white text-lg rounded-lg py-2 px-4">
        Register
      </button>
      <button
        onClick={(e) => switchPage("login")}
        className="w-full text-center"
      >
        Already have an account ?{" "}
      </button>
    </div>
  );
};
