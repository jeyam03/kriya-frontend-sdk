import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { fetchUserByEmail } from "../../API/call";
import Login from "./Login";
import RegisterPageSwitch from "./RegisterPageSwitch";
import RegisterPageDetails from "./RegisterPageDetails";
import RegisterPagePassword from "./RegisterPagePassword";
import RegisterPagePayment from "./RegisterPagePayment";
import RegisterPageFinal from "./RegisterPageFinal";
import RegisterPageVerifyEmail from "./RegisterPageVerifyEmail";
import RegisterPagePSG from "./RegisterPagePSG";

const GOOGLE_ICON = "https://cdn-icons-png.flaticon.com/512/281/281764.png";

const AuthPortal = () => {
  const [isLogInPage, setIsLogInPage] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (searchParams.get("existing") === "true") {
      navigate("/portal");
    } else {
      if (searchParams.get("type") === "signup") {
        setIsLogInPage(false);
      } else {
        setIsLogInPage(true);
        setSearchParams({ type: "login" });
      }
    }
  }, [searchParams]);

  const switchPage = (page) => {
    if (page === "login") {
      setIsLogInPage(true);
      setSearchParams({ ...searchParams, type: "login" });
    } else if (page === "register") {
      setIsLogInPage(false);
      setSearchParams({ ...searchParams, type: "signup", page: "switch" });
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
          className={`hidden lg:block lg:w-[70vw] h-screen transition-all duration-200 ease-in-out pr-[15vw] ${
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
          className={`transition-all duration-300 ease-in w-screen lg:w-[30vw] lg:absolute lg:top-0 lg:right-[15vw] lg:h-screen lg:flex lg:items-center lg:justify-center lg:z-20`}
        >
          {isLogInPage ? (
            <Login switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "switch" ? (
            <RegisterPageSwitch switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "details" ? (
            <RegisterPageDetails switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "password" ? (
            <RegisterPagePassword switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "payment" ? (
            <RegisterPagePayment switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "psg" ? (
            <RegisterPagePSG switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "verify-email" ? (
            <RegisterPageVerifyEmail switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" &&
            searchParams.get("page") === "final" ? (
            <RegisterPageFinal switchPage={switchPage} />
          ) : searchParams.get("type") === "signup" ? (
            <Navigate to="/auth?type=signup&page=switch" />
          ) : (
            <Navigate to="/auth?type=login" />
          )}
        </div>
        <div
          className="hidden lg:block w-full lg:w-[30vw] h-screen transition-all duration-200 ease-in-out"
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
