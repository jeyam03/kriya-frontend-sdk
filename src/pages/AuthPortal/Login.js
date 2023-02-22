import React, { useState } from "react";
import TextInput from "../../components/TextInput";

const GOOGLE_ICON = "https://cdn-icons-png.flaticon.com/512/281/281764.png";

const Login = ({ switchPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-screen lg:h-fit py-12 px-6 lg:py-16 lg:px-8 shadow-xl bg-white space-y-6">
      <h1 className="text-2xl font-bold text-[#181818]">Login</h1>

      <div className="w-full space-y-4 py-4">
        <TextInput
          title="Email / Kriya ID"
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

      <div className="w-full space-y-4 py-6 border-t border-t-gray-400">
        <a
          href="http://localhost:5002/api/auth/google"
          className="bg-white shadow-lg px-4 py-3 w-full hover:bg-gray-300 transition-all border-gray-300 border-2 rounded-lg flex items-center justify-center space-x-6"
        >
          <img
            src={GOOGLE_ICON}
            className="h-6 aspect-square w-6"
            alt="Google Icon"
          />
          <p className="">Login with Google</p>
        </a>
      </div>

      <button
        onClick={(e) => switchPage("register")}
        className="w-full text-center"
      >
        Don't have an account yet ? <u>Sign up</u>
      </button>
    </div>
  );
};

export default Login;
