import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchUpdateUser, fetchUserByEmail } from "../../API/call";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import colleges from "../CollegeList";
import departments from "../DepartmentList";
import { toast } from "react-hot-toast";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import referralCodes from "../../data/referralCodes";
import Select from "react-select";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const RegisterPageDetails = ({ switchPage }) => {
  const [authEmail, setAuthEmail] = useState("");
  const [refDisable, setrefDisable] = useState(false);
  const [otherCollege, setOtherCollege] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    source: "",
    referral: "",
    department: "",
    year: "",
    isPSGStudent: false,
    accomodation: "",
    phone: "",
  });

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (localStorage.getItem("referral")) {
      setFormData({ ...formData, referral: localStorage.getItem("referral").split("-")[1] });
      // setrefDisable(true);
    }
  }, []);

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
    if (!formData.name || formData.name.length === 0) return toast.error("Please enter your name");
    if (!formData.email) return toast.error("Please enter your email");
    if (!formData.phone) return toast.error("Please enter your phone number");
    if (!formData.college) return toast.error("Please select your college");
    if (formData.college === "Other" && (otherCollege === null || otherCollege.length === 0)) return toast.error("Please enter your college name");
    if (!formData.department) return toast.error("Please select your department");
    if (!formData.year) return toast.error("Please select your year");

    if (formData.referral && formData.referral.length > 0) {
      if (!formData.referral.startsWith("KRI-")) {
        formData.referral = "KRI-" + formData.referral;
      }
      if (!referralCodes.includes(formData.referral)) {
        toast.error("Invalid referral code");
        return;
      }
    }
    else {
      formData.referral = null;
    }

    if (formData.college === "Other") {
      formData.college = otherCollege;
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(formData.phone)) {
      toast.error("Please enter a valid phone number");
      return;
    }

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
        localStorage.removeItem("referral");
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

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "2px solid #E5E7EB",
      borderRadius: "0.5rem",
      padding: "0.25rem 0.5rem",
    }),
  }

  const handleCollegeChange = e => {
    setFormData({ ...formData, college: e.value });
  }

  return (
    <div className="w-full h-full overflow-y-scroll lg:overflow-y-hidden flex flex-col lg:h-fit lg:max-h-[90%] py-12 px-6 lg:pt-8 lg:pb-0 lg:px-0 shadow-xl bg-white space-y-6">
      <div className="flex w-full justify-center lg:hidden items-center">
        <img
          src="https://res.cloudinary.com/dksmk66vo/image/upload/v1677849228/Kriya_KLA_Logo_Final_qbhzt5.png"
          alt="Kriya black"
          className="lg:hidden h-24 w-auto opacity-70"
        />
      </div>
      <button
        onClick={() => navigate(-2)}
        className="flex hover:cursor-pointer group text-sm items-center space-x-2 lg:px-8"
      >
        <MdOutlineArrowBackIosNew size={12} />
        <p className="group-hover:underline">Back</p>
      </button>
      <div className="lg:px-8">
        <h3 className="text-sm text-gray-500">Register for Kriya 2023</h3>
        <h1 className="text-2xl font-bold text-[#181818]">
          Enter your personal details
        </h1>
      </div>
      <div className="h-full space-y-6 lg:overflow-auto lg:flex-1 pb-12 lg:px-8">
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
        <TextInput
          title="Referral Code (Optional)"
          // isDisabled={refDisable}
          className=""
          referral
          valueState={[
            formData.referral,
            (val) => setFormData({ ...formData, referral: val }),
          ]}
        />
        <div className="">
          <label className="text-blue text-sm z-30 bg-white p-2">
            College/University
          </label>
          <Select
            styles={selectStyles}
            className="z-20"
            options={
              colleges.map((college) => {
                return {
                  value: college,
                  label: college,
                };
              })
            }
            onChange={handleCollegeChange}
          />
        </div>
        {formData.college === "Other" && (
          <TextInput
            title="College/University Name"
            placeholder="Enter your college/university name"
            className=""
            valueState={[otherCollege, setOtherCollege]}
          />
        )}
        {formData.college !== PSG_COLLEGE && (
          <Dropdown
            valueState={[
              formData.accomodation,
              (val) => setFormData({ ...formData, accomodation: val }),
            ]}
            title="Accomodation Required"
            className=""
            placeholder="Select an option"
            options={["No", "Yes"]}
          />
        )}
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
      </div>
      <div className="w-full pb-4 lg:py-8 px-8 lg:shadow-black lg:shadow-lg space-y-4">
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
      </div>
    </div>
  );
};

export default RegisterPageDetails;
