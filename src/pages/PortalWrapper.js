import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

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
    <nav className="z-50 w-screen lg:w-1/4 bg-white fixed lg:relative top-0 lg:h-screen overflow-y-scroll px-6 font-poppins shadow-md">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-3xl font-bold uppercase py-6 ">Kriya '23</h1>
        <MenuToggle isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`divide-y divide-gray-600 ${isOpen ? "h-fit" : "h-0 overflow-hidden"} transition-all ease-in-out duration-300`}>
        <div className="py-8 w-full">
          <Link to="/register" className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Register
          </Link>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sponsors
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Events
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Workshops
          </button>
        </div>
        <div className="py-8">
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
        </div>
        <div className="py-8">
          <h3 className="text-base font-semibold py-6">All Events</h3>
          <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Scan and Reckon
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Thirstify
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sodapops
          </button>

          <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Scan and Reckon
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Thirstify
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sodapops
          </button>

          <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Scan and Reckon
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Thirstify
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sodapops
          </button>

          <p className="w-full text-sm text-gray-500 py-4">Brainiac</p>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Scan and Reckon
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Thirstify
          </button>
          <button className="w-full text-gray-600 text-left hover:text-black text-base py-2">
            Sodapops
          </button>
        </div>
      </div>
    </nav>
  );
};

export default PortalWrapper;

const MenuToggle = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="lg:hidden flex items-center p-1 text-gray-500 lg:hover:text-gray-300"
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
