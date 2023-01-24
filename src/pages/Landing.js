import React, { useEffect } from "react";
import { animate, stagger, scroll } from "motion"
import "../styles/scrollanim.css";
import Event from "../components/Event";
import { BsCalendar2EventFill } from "react-icons/bs";

const Landing = () => {

  const VIDEO_LINK =
    "https://res.cloudinary.com/dksmk66vo/video/upload/v1674456543/FINAL_RENDER_v2_1_u0bkpf.mp4";

  return (
    <div className="flex flex-col justify-center items-center w-screen overflow-x-hidden min-h-screen bg-black">

      <section className="w-screen h-screen">
        <div>
          <a href="https://ibb.co/M97bZvT">
            <img src="https://i.ibb.co/3kcw43X/Kriya-Logo-2023-white.png" alt="Kriya-Logo-2023" border="0" />
          </a>
          <br />
        </div>
      </section>

      <section className="w-screen h-screen">
        <video
          width="320"
          height="240"
          controls={false}
          autoPlay
          className="h-screen w-full lg:w-screen aspect-video absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] object-cover"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          muted
        >
          <source src={VIDEO_LINK} type="video/mp4" />
        </video>
      </section>

      <section className="w-screen h-screen flex flex-col bg-white">
        <p className="text-3xl mt-8 font-semibold tracking-wider text-blue-500 font-sans">
          EVENTS
        </p>

        <div className="w-full flex z-10 gap-x-8 px-6 relative">
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 4"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 5"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
        </div>

        <div className="w-full flex flex-row space-x-8 px-6">
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
        </div>

        <div className="w-full flex flex-row space-x-8 px-6">
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
          <Event
            title="Event 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia."
            icon=<BsCalendar2EventFill/>
            date="24th March"
            time="10:00 AM"
          />
        </div>
      </section>

      <section className="w-screen h-screen bg-white">
        <div className="w-screen h-screen flex">
          <div className="w-1/2 h-full bg-red-500"></div>
          <div className="w-1/2 h-full bg-green-500"></div>
        </div>
      </section>

    </div>
  );
};

export default Landing;


