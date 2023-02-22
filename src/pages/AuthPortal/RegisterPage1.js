import React from 'react'

const GOOGLE_ICON = "https://cdn-icons-png.flaticon.com/512/281/281764.png";

const RegisterPage1 = ({ switchPage }) => {
  return (
    <div className="w-full py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <h1 className="text-2xl font-bold text-[#181818]">
        Register for Kriya 2023
      </h1>
      <p className="">Choose the method of Registration</p>
      <a
        href="http://localhost:5002/api/auth/google"
        className="bg-white shadow-lg px-4 py-3 w-full hover:bg-gray-300 transition-all border-gray-300 border-2 rounded-lg flex items-center justify-center space-x-6"
      >
        <img
          src={GOOGLE_ICON}
          className="h-6 aspect-square w-6"
          alt="Google Icon"
        />
        <p className="">Register with Google</p>
      </a>
      <button
        className="bg-black hover:bg-gray-700 transition-all duration-500 w-full text-white rounded-lg py-3 px-4"
        onClick={(e) => switchPage("register")}
      >
        Register with Email
      </button>
      <button
        onClick={(e) => switchPage("login")}
        className="w-full text-center"
      >
        Already have an account ? <u>Login</u>
      </button>
      <p className="w-full text-xs text-center">Page 1 of 3</p>
    </div>
  );
};

export default RegisterPage1