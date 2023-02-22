import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { fetchUserByEmail } from "../../API/call";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import colleges from "../CollegeList";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const RegisterPagePayment = ({ switchPage }) => {
  const [isPSG, setIsPSG] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchParams.get("email")) return;
    const email = searchParams.get("email");
    fetchUserByEmail(email)
      .then((res) => {
        console.log(res.data.user);

        if (res.data.user.college === PSG_COLLEGE) setIsPSG(true);
      })
      .catch((err) => {
        console.log("ERROR", err);
        if (err.response.status >= 400) navigate("/auth?type=login");
      });
  }, [searchParams]);

  return (
    <div className="w-full h-screen lg:h-fit py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <div className="">
        <h3 className="text-sm text-gray-500">Register for Kriya 2023</h3>
        <h1 className="text-2xl font-bold text-[#181818]">
          Pay for your registration
        </h1>
      </div>
      {isPSG ? (
        <p className="">
          The general registration for Kriya 2023 is{" "}
          <b className="font-semibold">Rs. 200</b>. You can pay now and register
          for the events. You are also availed of the option to pay later.
        </p>
      ) : (
        <p className="">
          The general registration for Kriya 2023 is{" "}
          <b className="font-semibold">Rs. 150</b> for the students of PSG
          College of Technology. You can pay now and register for the events.
          You are also availed of the option to pay later.
        </p>
      )}
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-2 w-full">
        <button
          onClick={() => {
            setSearchParams({ ...searchParams, type: "signup", page: 3 });
          }}
          className="border-2 border-black bg-white hover:bg-gray-100 transition-all duration-500 text-black text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
        >
          Later
        </button>
        <button className="border-2 border-black bg-black hover:bg-gray-700 transition-all duration-500 text-white text-lg rounded-lg py-2 px-4 w-full lg:w-1/2">
          Pay now
        </button>
      </div>
      <button
        onClick={(e) => switchPage("login")}
        className="w-full text-center"
      >
        Already have an account ? <u>Login</u>
      </button>
      <p className="w-full text-xs text-center">Page 4 of 5</p>
    </div>
  );
};

export default RegisterPagePayment;
