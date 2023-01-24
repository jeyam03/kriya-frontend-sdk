import React, { useEffect } from "react";
import { animate, stagger, scroll } from "motion";
import Event from "../components/Event";
import { BsCalendar2EventFill } from "react-icons/bs";

const Landing = () => {
  const VIDEO_LINK =
    "https://res.cloudinary.com/dksmk66vo/video/upload/v1674456543/FINAL_RENDER_v2_1_u0bkpf.mp4";

  return (
    <>
      <section className="bg-black flex flex-row justify-center items-center h-screen">
        <a href="https://ibb.co/M97bZvT">
          <img
            src="https://i.ibb.co/3kcw43X/Kriya-Logo-2023-white.png"
            alt="Kriya-Logo-2023"
          />
        </a>
      </section>
      <section className="h-screen relative">
        <div className="absolute w-full h-full left-0 top-0">
          <video controls={false} autoPlay muted loop>
            <source src={VIDEO_LINK} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="relative grid grid-cols-5 gap-2 px-10">
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
        <Event
          title="Event 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
          icon=<BsCalendar2EventFill />
          date="24th March"
          time="10:00 AM"
        />
      </section>
    </>
  );
};

export default Landing;
