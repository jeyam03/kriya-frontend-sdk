import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import Event from "../../components/Event";

// Event Grid

const Section4 = () => {
  const [consolee, setConsolee] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  const condition = `${parseFloat(consolee) <= 2.75 ? "text-white" : "text-[#181818]"}`;
  const arrowBgCondition = `${parseFloat(consolee) <= 2.75 ? "bg-[#181818]" : "bg-white"}`;

  return (
    <div className="">
      <section
        id="section4"
        className="h-fit w-screen relative overflow-x-hidden lg:overflow-hidden px-[calc(100vw/12)] font-poppins py-24"
      >
        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
            Kriyative
          </span>
        </h1>
        <EventsGrid />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
            Brainiac
          </span>
        </h1>
        <EventsGrid />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
            Coding
          </span>
        </h1>
        <EventsGrid />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
            Circuit
          </span>
        </h1>
        <EventsGrid />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
            Core Engineering
          </span>
        </h1>
        <EventsGrid />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`}>
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#27eba2]">
            Management
          </span>
        </h1>
        <EventsGrid />

      </section>
    </div>
  );
};

export default Section4;

const EventsGrid = ({ }) => {
  const [consolee, setConsolee] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  const arrowBgCondition = `${window.innerWidth < 768 ?  parseFloat(consolee) <= 3.5 ? "bg-[#181818]" : "bg-white" : parseFloat(consolee) <= 2.75 ? "bg-[#181818]" : "bg-white"}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
      <Event
        title="Kriyative"
        description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds to showcase their talent and get recognized."
        date="21st March 2021"
        time="10:00 AM"
        arrowColor={arrowBgCondition}
        icon={<FaSoundcloud />}
      />
    </div>
  );
};