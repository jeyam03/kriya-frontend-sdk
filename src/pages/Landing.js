import React, { useEffect, useState } from "react";
import { animate, stagger, scroll } from "motion";
import Event from "../components/Event";
import { BsCalendar2EventFill } from "react-icons/bs";

const Landing = () => {
  const [bgColor, setBgColor] = useState("#121212");
  const [consolee, setConsolee] = useState("");

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee(`${window.pageYOffset} - ${window.innerHeight}`);
        console.log(window.pageYOffset);
      },
      { passive: true }
    );
  }, []);

  return (
    <React.Fragment>
      <div className="bg-white p-4 rounded-lg fixed top-10 left-10">{consolee}</div>
      <main className={`w-screen overflow-x-hidden bg-[${bgColor}]`}>
        <section id="section1" className=" h-screen w-full"></section>
        <section id="section2" className="bg-red-500 h-screen w-full"></section>
      </main>
    </React.Fragment>
  );
};

export default Landing;
