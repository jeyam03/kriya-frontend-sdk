import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchUpdateUser, fetchUserByEmail } from "../../API/call";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import colleges from "../CollegeList";
import departments from "../DepartmentList";
import { toast } from "react-hot-toast";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const RegisterPageDetails = ({ switchPage }) => {
  const [authEmail, setAuthEmail] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    source: "",
    department: "",
    year: "",
    isPSGStudent: false,
    phone: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("email")) return;
    const email = searchParams.get("email");
    setAuthEmail(searchParams.get("email"));
    fetchUserByEmail(email)
      .then((res) => {
        console.log({ ...formData, ...res.data.user });
        setFormData({ ...formData, ...res.data.user });
        if (
          email.endsWith("psgtech.ac.in") &&
          (!res.data.user.college || res.data.user.college.length <= 0)
        )
          setFormData({
            ...res.data.user,
            college: PSG_COLLEGE,
            isPSGStudent: true,
          });
      })
      .catch((err) => console.log("ERROR", err));
  }, [searchParams]);

  const handleBack = () => {
    setSearchParams({ ...searchParams, type: "signup", page: "switch" });
  };

  const handleContinue = () => {
    toast.promise(fetchUpdateUser(authEmail, formData), {
      loading: "Updating User",
      success: (res) => {
        if (
          formData.college === PSG_COLLEGE &&
          !formData.email.endsWith("psgtech.ac.in")
        ) {
          setSearchParams({
            ...searchParams,
            type: "signup",
            page: "psg",
            email: formData.email,
          });
        } else {
          if (res.data.user.source === "google") {
            setSearchParams({
              ...searchParams,
              type: "signup",
              page: "password",
              email: authEmail,
            });
          } else {
            setSearchParams({
              ...searchParams,
              type: "signup",
              page: "verify-email",
              email: formData.email,
            });
          }
        }
        return "User Updated";
      },
      error: (err) => {
        console.log(err);
        return "Error updating user";
      },
    });
  };

  useEffect(() => {
    console.log("formData", formData);
  }, [formData]);

  return (
    <div className="w-full h-screen lg:h-fit py-12 px-6 lg:py-8 lg:px-8 shadow-xl bg-white space-y-6">
      <div className="">
        <h3 className="text-sm text-gray-500">Register for Kriya 2023</h3>
        <h1 className="text-2xl font-bold text-[#181818]">
          Enter your personal details
        </h1>
      </div>
      <TextInput
        title="Name"
        className="w-full"
        valueState={[
          formData.name,
          (val) => setFormData({ ...formData, name: val }),
        ]}
      />
      <TextInput
        title="Email"
        type="email"
        isDisabled={formData.source === "google"}
        className="w-full"
        valueState={[
          formData.email,
          (val) => setFormData({ ...formData, email: val }),
        ]}
      />
      <TextInput
        title="Phone number"
        className=""
        valueState={[
          formData.phone,
          (val) => setFormData({ ...formData, phone: val }),
        ]}
      />
      <Dropdown
        valueState={[
          formData.college,
          (val) =>
            setFormData({
              ...formData,
              college: val,
              isPSGStudent: val === PSG_COLLEGE,
            }),
        ]}
        title="College/University"
        className=""
        placeholder="Select a college"
        options={colleges}
      />
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-2 w-full">
        <Dropdown
          valueState={[
            formData.department,
            (val) => setFormData({ ...formData, department: val }),
          ]}
          title="Department"
          className="w-full lg:w-2/3"
          placeholder="Select a department"
          options={departments}
        />
        <Dropdown
          valueState={[
            formData.year,
            (val) => setFormData({ ...formData, year: val }),
          ]}
          title="Year"
          className="w-full lg:w-1/3"
          placeholder="Select a year"
          options={[1, 2, 3, 4, 5]}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-2 w-full">
        <button
          onClick={handleBack}
          className="border-2 border-black bg-white hover:bg-gray-700 hover:text-white transition-all duration-500 text-black text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="border-2 border-black bg-black hover:bg-gray-700 transition-all duration-500 text-white text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
        >
          Continue
        </button>
      </div>
      <button
        onClick={(e) => switchPage("login")}
        className="w-full text-center"
      >
        Already have an account ? <u>Login</u>
      </button>
      <p className="w-full text-xs text-center">Page 2 of 3</p>
    </div>
  );
};

export default RegisterPageDetails;