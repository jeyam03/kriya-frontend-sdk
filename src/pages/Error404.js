import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <main className="h-screen w-screen relative overflow-hidden">
      <div
        className="absolute z-0 top-0 left-0 right-0 h-[40vh] w-full"
        style={{
          background:
            "url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676489173/cf6c51dc-f626-4169-8220-b74e114145b2_1920x1920_dxpfiv.png)",
        }}
      ></div>
      <section className="relative z-20 flex flex-col justify-center items-center w-full h-full">
        <div
          style={{
            background:
              "url(https://res.cloudinary.com/dksmk66vo/image/upload/v1676490184/2d9b083a-d626-4668-892c-7e62c9e58721_dpd5bk.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "screen",
          }}
          className="lg:w-[40vw] w-[90vw] h-[50vh] "
        />
        <h1 className="text-2xl font-semibold font-poppins lg:w-[40vw] w-[90vw] text-center">
          Oops! Sorry, we can't match your rizz.
          <br /> How about you try ours? 😉
        </h1>
        <Link
          to="/"
          className="bg-gray-200 px-6 py-2 text-xl rounded-xl font-poppins mt-16 font-semibold shadow-lg lg:hover:scale-110 transition-all"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#8458eb] ">
            Go to Home Page
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Error404;
