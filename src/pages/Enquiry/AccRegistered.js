import React, { useEffect, useState } from "react";
import Inputfield from "../../components/TextInput";
import { fetchAccomodationDetailsByEmail, fetchAccomodationRegister, fetchUserByEmail } from "../../API/call";
import Dropdown from "../../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { fetchPaymentDetailsByEmail } from "../../API/call";
import { IoIosArrowForward } from "react-icons/io";
import Toggle from "../../components/Toggle";
import { FiCheck } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { BsCheck2Circle } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";

const AccRegistered = () => {
  const [accomodationDetails, setAccomodationDetails] = useState({});
  const navigate = useNavigate();

  const roomCost = {
    "Common Free Hall": 0,
    "Two Sharing": 150,
    "4 / 6 Sharing with common bathroom": 150,
    "2 Sharing with attached bathroom": 600
  };

  useEffect(() => {
    toast.promise(fetchAccomodationDetailsByEmail(localStorage.getItem("email")), {
      loading: "Loading...",
      success: (res) => {
        if (res.data.accommodations) {
          console.log(res.data.accommodations);
          setAccomodationDetails(res.data.accommodations);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }, []);

  return (
    <main className="h-full w-full p-8 pt-16 lg:py-8 lg:px-20 font-poppins bg-[#181818] text-white">
      <section className="overflow-y-scroll h-full w-full pr-2 pb-12">
        <div className="w-fit">
          <h1 className="mt-1 text-4xl font-bold relative z-10">Accomodation Details</h1>
          <div className="w-[60%] lg:w-[80%] ml-8 lg:ml-0 mt-2 h-[4px] bg-gradient-to-r rounded-[2px] from-[#C80067] to-[#7470ff]"></div>
        </div>
        {
          Object.keys(accomodationDetails).length !== 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Name</h1>
                <p className="text-lg font-medium">{accomodationDetails.name}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Kriya ID</h1>
                <p className="text-lg font-medium">{accomodationDetails.kriyaId}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Email</h1>
                <p className="text-lg font-medium">{accomodationDetails.email}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Gender</h1>
                <p className="text-lg font-medium">{accomodationDetails.gender}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Phone Number</h1>
                <p className="text-lg font-medium">{accomodationDetails.phone}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">College</h1>
                <p className="text-lg font-medium">{accomodationDetails.college}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Room Type</h1>
                <p className="text-lg font-medium">{accomodationDetails.roomType}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">No. of Days</h1>
                <p className="text-lg font-medium">{parseInt(accomodationDetails.to.slice(0, 2)) - parseInt(accomodationDetails.from.slice(0, 2))} Days</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">From Date</h1>
                <p className="text-lg font-medium">{accomodationDetails.from}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">To Date</h1>
                <p className="text-lg font-medium">{accomodationDetails.to}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Meals</h1>
                {accomodationDetails.breakfast1 && <li className="pl-4 text-lg font-medium">24th Breakfast</li>}
                {accomodationDetails.breakfast2 && <li className="pl-4 text-lg font-medium">25th Breakfast</li>}
                {accomodationDetails.breakfast3 && <li className="pl-4 text-lg font-medium">26th Breakfast</li>}
                {accomodationDetails.dinner1 && <li className="pl-4 text-lg font-medium">24th Dinner</li>}
                {accomodationDetails.dinner2 && <li className="pl-4 text-lg font-medium">25th Dinner</li>}
                {accomodationDetails.dinner3 && <li className="pl-4 text-lg font-medium">26th Dinner</li>}
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Amenities Required</h1>
                <p className="text-lg font-medium">{accomodationDetails.amenities}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Total Amount</h1>
                <p className="text-lg font-medium">₹ {(parseInt(accomodationDetails.to.slice(0, 2)) - parseInt(accomodationDetails.from.slice(0, 2))) * roomCost[accomodationDetails.roomType] + (50 * (accomodationDetails.breakfast1 + accomodationDetails.breakfast2 + accomodationDetails.breakfast3 + accomodationDetails.dinner1 + accomodationDetails.dinner2 + accomodationDetails.dinner3)) + (accomodationDetails.amenities === "Yes" && 100 * (parseInt(accomodationDetails.to.slice(0, 2)) - parseInt(accomodationDetails.from.slice(0, 2))))}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Payment Status</h1>
                <div className="flex flex-row gap-2">
                  <p className="text-lg font-medium">{accomodationDetails.payment ? (
                    <BsCheck2Circle className="text-3xl text-green-500" />
                  ) : (
                    <MdOutlineCancel className="text-3xl text-red-500" />
                  )}</p>
                  <p className={`text-lg font-medium ${accomodationDetails.payment ? "text-green-500" : "text-red-500"}`}>{accomodationDetails.payment ? "Paid" : "Not Paid"}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-12">
              <h1 className="text-2xl font-semibold">You have not registered for accomodation yet.</h1>
              <button
                onClick={() => {
                  navigate("/portal/accommodation");
                }}
                className="flex items-center gap-2 mt-8 bg-[#C80067] text-white px-4 py-2 rounded-lg font-semibold"
              >
                Register Now
                <IoIosArrowForward />
              </button>
            </div>
          )
        }
      </section>
    </main>
  );
};

export default AccRegistered;
