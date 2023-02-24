import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { fetchPayGeneral, fetchUserByEmail, fetchWorkshopById } from "../../API/call";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import colleges from "../CollegeList";
import { toast } from "react-hot-toast";

const PSG_COLLEGE =
  "PSG College of Technology (Autonomous), Peelamedu, Coimbatore District 641004";

const OtherPayments = ({ switchPage }) => {
  const [isPSG, setIsPSG] = useState(false);
  const [formData, setFormData] = useState({});
  const [authEmail, setAuthEmail] = useState("");
  const [transaction, setTransaction] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email"))
      .then((res) => {
        setIsPSG(res.data.data.college === PSG_COLLEGE);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (
      !searchParams.get("type") &&
      searchParams.get("type") !== "GENERAL" &&
      searchParams.get("type") !== "WORKSHOP"
    ) {
      toast.error("Invalid URL for payment");
      navigate(-2);
      return;
    }
  }, []);

  const onStorageUpdate = (e) => {
    if (e.key === "txn") {
      console.log("STORAGE UPDATED", e.newValue);
      console.log(transaction);
      setSearchParams({
        ...searchParams,
        type: "signup",
        email: authEmail,
        page: "final",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("storage", onStorageUpdate);
    return () => {
      window.removeEventListener("storage", onStorageUpdate);
    };
  }, []);

  const handlePayNow = () => {
    fetchPayGeneral({
      email: formData.email,
      name: formData.name,
      kriyaId: formData.kriyaId,
      fee: isPSG ? 1 : 2,
    })
      .then((res) => {
        setTransaction(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!transaction) return;
    window.open(transaction.url, "_blank");
  }, [transaction]);

  useEffect(() => {
    if (!searchParams.get("eventId")) return;
    // fetchWorkshopById(searchParams.get("eventId"))
  }, []);

  return (
    <section className="h-screen w-screen flex  items-center bg-gray-100">
      <div className="hidden lg:block w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen"></div>
      <main className="flex w-full  h-screen items-center relative justify-center  overflow-x-hidden lg:overflow-y-hidden ">
        <div
          className="absolute h-[50vh] top-0 left-0 right-0 w-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(243,244,246,0) 50%, rgba(243,244,246,1) 100%), url(https://res.cloudinary.com/dksmk66vo/image/upload/v1677240341/b3f11a2a-def8-487a-be9b-7f2aef2d0254_1920x1920_r5jfib.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {searchParams.get("type") === "WORKSHOP" && (
          <div className="relative z-30 w-full lg:w-[30vw] h-screen lg:h-fit py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6 ">
            <div className="">
              <h3 className="text-sm text-gray-500">Confirm your payment</h3>
              <h1 className="text-2xl font-bold text-[#181818]">
                Pay for Workshop
              </h1>
            </div>
            {!isPSG ? (
              <p className="">
                The general registration for Kriya 2023 is{" "}
                <b className="font-semibold">Rs. 200</b>. You will be redirected
                to our payment gateway and an email will be sent as a
                confirmation.
              </p>
            ) : (
              <p className="">
                The general registration for Kriya 2023 is{" "}
                <b className="font-semibold">Rs. 150</b> for the students of PSG
                College of Technology. You can pay now and register for the
                events. You are also availed of the option to pay later.
              </p>
            )}
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-2 w-full">
              <button
                onClick={() => navigate(-1)}
                className="border-2 border-black bg-white hover:bg-gray-100 transition-all duration-500 text-black text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                className="border-2 border-black bg-black hover:bg-gray-700 transition-all duration-500 text-white text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
              >
                Pay now
              </button>
            </div>
          </div>
        )}
        {searchParams.get("type") === "GENERAL" && (
          <div className="relative z-30 w-full lg:w-[30vw] h-screen lg:h-fit py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6 ">
            <div className="">
              <h3 className="text-sm text-gray-500">Confirm your payment</h3>
              <h1 className="text-2xl font-bold text-[#181818]">
                Pay for your registration
              </h1>
            </div>
            {!isPSG ? (
              <p className="">
                The general registration for Kriya 2023 is{" "}
                <b className="font-semibold">Rs. 200</b>. You will be redirected
                to our payment gateway and an email will be sent as a
                confirmation.
              </p>
            ) : (
              <p className="">
                The general registration for Kriya 2023 is{" "}
                <b className="font-semibold">Rs. 150</b> for the students of PSG
                College of Technology. You can pay now and register for the
                events. You are also availed of the option to pay later.
              </p>
            )}
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-2 w-full">
              <button
                onClick={() => navigate(-1)}
                className="border-2 border-black bg-white hover:bg-gray-100 transition-all duration-500 text-black text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                className="border-2 border-black bg-black hover:bg-gray-700 transition-all duration-500 text-white text-lg rounded-lg py-2 px-4 w-full lg:w-1/2"
              >
                Pay now
              </button>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default OtherPayments;
