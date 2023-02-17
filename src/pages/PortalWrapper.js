import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { fetchEvents } from "../API/call";

const PortalWrapper = ({ children }) => {
  return (
    <main className="w-screen h-screen overflow-x-hidden flex items-center bg-[#181818] ">
      <div className="w-4 bg-gradient-to-t from-[#C80067] to-[#5451B6] h-screen hidden lg:block"></div>
      <NavBar />
      <Outlet />
    </main>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const events = fetchEvents()
    .map((event) => ({
      name: event.eventName,
      category: event.category,
      id: event.eventId,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (!isMobileDevice) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <nav className="z-50 w-screen lg:w-1/4 bg-white fixed lg:relative top-0 max-h-screen lg:h-screen overflow-y-scroll px-6 font-poppins shadow-md">
      <div className="flex w-full justify-between items-center sticky top-0 bg-white">
        <Link
          to={"/"}
          className="w-[4.5rem] h-[4.5rem] lg:w-28 lg:h-28 mt-0 lg:mt-4 -mb-3"
          style={{
            background: `url(https://res.cloudinary.com/dksmk66vo/image/upload/v1674055063/el0wb34j9oudv852shzv.png)`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
        </Link>
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div
        className={`divide-y divide-gray-600 ${isOpen ? "h-fit" : "h-0 overflow-hidden"
          } transition-all ease-in-out duration-300`}
      >
        <div className="py-8 w-full flex flex-col">
          {/* <Link to="/auth" className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Register
          </Link> */}
          <Link
            to="/portal/event"
            className="w-full text-gray-600 text-left hover:text-black text-base py-2"
          >
            Events
          </Link>
          <Link
            to="/../?sn=section5"
            className="w-full text-gray-600 text-left hover:text-black text-base py-2"
          >
            Workshops
          </Link>
          <Link
            to="/../?sn=section4"
            className="w-full text-gray-600 text-left hover:text-black text-base py-2"
          >
            Paper Presentations
          </Link>
        </div>
        {/* <div className="py-8">
          <h3 className="text-base font-semibold py-6">✨ Suggested Events</h3>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Scan and Reckon
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Thirstify
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sodapops
          </button>
        </div> */}
        <div className="py-8">
          <h3 className="text-base font-semibold py-6">All Events</h3>
          <EventNav category="Kriyative" noMargin events={events} />
          <EventNav category="Brainiac" events={events} />
          <EventNav category="Coding" events={events} />
          <EventNav category="Circuit" events={events} />
          <EventNav category="Core Engineering" events={events} />
          <EventNav category="Management" events={events} />
        </div>
      </div>
    </nav>
  );
};

export default PortalWrapper;

const EventNav = ({ category, noMargin = false, events }) => {
  return (
    <React.Fragment>
      <p
        className={`w-full text-sm uppercase tracking-widest text-gray-500 ${!noMargin && "mt-8"
          } py-4`}
      >
        {category}
      </p>
      {events
        .filter((e) => e.category === category)
        .map((e) => (
          <Link to={`/portal/event/${e.id}`} className="w-full text-gray-600 text-left hover:text-black text-base py-2 block">
            {e.name}
          </Link>
        ))}
    </React.Fragment>
  );
};

const MenuToggle = ({ isOpen, setIsOpen, className }) => {
  return (
    <button
      className={`lg:hidden relative z-20 flex items-center p-1 text-gray-500 lg:hover:text-gray-300`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
};
