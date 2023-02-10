import React from "react";

const Profile = () => {
  return (
    <section className="w-full font-poppins h-screen overflow-y-scroll">
      <div className="w-full h-36 bg-gradient-to-r from-[#C80067] to-[#5451B6]"></div>
      <div className="px-16 py-12 text-white">
        <div className="h-48 w-48 rounded-full bg-gray-300 -mt-36 "></div>
        <h1 className="text-4xl mt-8 font-bold text-white">John Tenning</h1>
        <h3 className="text-sm text-gray-300 tracking-widest">Profile</h3>
      </div>
    </section>
  );
};

export default Profile;
