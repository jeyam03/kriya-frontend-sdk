import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { fetchUserByEmail } from "../API/call";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchUserByEmail(localStorage.getItem("email")).then((res) => {
      console.log(res.data);
      setUserDetails(res.data.user);
    });
  }, []);

  return (
    <section className="w-full font-poppins h-screen overflow-y-scroll py-24 lg:py-0">
      <div className="hidden lg:block w-full h-36 bg-gradient-to-r from-[#C80067] to-[#5451B6]"></div>
      <div className="lg:px-16 py-12 text-white flex flex-col items-center lg:items-start">
        <div className="h-48 w-48 rounded-full bg-gray-300 lg:-mt-36 "></div>
        <h1 className="text-4xl mt-8 font-bold text-white text-center lg:text-left">
          {userDetails ? userDetails?.name : "XXXXX"}
        </h1>
        <h3 className="text-sm text-gray-300 tracking-widest text-center lg:text-left ">
          Profile
        </h3>
      </div>
      {userDetails && (
        <div className="grid gap-16 grid-cols-1 lg:grid-cols-2 text-white px-8 lg:px-16 lg:pr-[calc(100vw/6)]">
          <div className="">
            <div className="flex items-center space-x-4 w-full">
              <AiOutlineUser className="text-2xl" />
              <h1 className="text-2xl">About</h1>
            </div>
            <div className="grid grid-cols-[100px_minmax(400px,1fr)]  w-full mt-8 space-y-1  ">
              <TextOutput heading="Name" content={userDetails.name} />
              <TextOutput heading="Email" content={userDetails.email} />
              <TextOutput heading="Phone" content="+91 9876543210" />
              <TextOutput heading="College" content={userDetails.college} />
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center space-x-4 w-full">
              <GrTransaction className="text-2xl text-white invert" />
              <h1 className="text-2xl">Transactions</h1>
            </div>
            <div className="mt-8 space-y-2">
              <div className="">
                <div className="flex items-center justify-between text-xs">
                  <p className="">Transaction: 03456458976458967</p>
                  <p className="">10/02/2023</p>
                </div>
                <p className="text-lg">Registration paid successfully.</p>
              </div>
              <div className="">
                <div className="flex items-center justify-between text-xs">
                  <p className="">Transaction: 03456458976458967</p>
                  <p className="">10/02/2023</p>
                </div>
                <p className="text-lg">Registration paid successfully.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const TextOutput = ({ heading, content }) => {
  return (
    <React.Fragment>
      <p className="font-semibold text-white">{heading}</p>
      <p className="text-white">{content}</p>
    </React.Fragment>
  );
};

export default Profile;
