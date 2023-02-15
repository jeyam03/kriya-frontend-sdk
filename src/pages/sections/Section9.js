import React from "react";
import { BsInstagram, BsLinkedin, BsTelephone } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

// Contact Us

const Section9 = () => {
  return (
    <section id="section9" className="w-screen bg-black px-[calc(100vw/12)] py-16 font-poppins">
      <h1 className="text-5xl text-white font-bold pb-6">Contact Us</h1>
      <div className="flex flex-col lg:flex-row gap-8 flex-wrap text-white mt-8">
        <div className="flex-1 space-y-6">
          <button className="flex items-center space-x-4"
            onClick={() => window.open("https://www.linkedin.com/company/studentsunion-psgtech/", "_blank")}
          >
            <BsLinkedin size={24} className="text-white" />
            <p className="text-lg">Students Union</p>
          </button>
          <button className="flex items-center space-x-4"
            onClick={() => window.open("https://www.instagram.com/kriya_psgtech/", "_blank")}
          >
            <BsInstagram size={24} className="text-white" />
            <p className="text-lg">@kriya_psgtech</p>
          </button>
          <button className="flex items-center space-x-4"
            onClick={() => window.open("mailto:events@psgkriya.in", "_blank")}
          >
            <SiGmail size={24} className="text-white" />
            <p className="text-lg">events@psgkriya.in</p>
          </button>
        </div>
        <div className="w-full lg:w-56">
          <h5 className="text-xs tracking-widest">Chairperson</h5>
          <ContactItem name="Dharmendra R" phone="+91 94860 60706" />

          <h5 className="text-xs tracking-widest mt-8">Co-Chairperson</h5>
          <ContactItem name="Mano M" phone="+91 93600 07515" />
        </div>
        <div className="w-full lg:w-56">
          <h5 className="text-xs tracking-widest">Event Support</h5>
          <ContactItem name="Kavinesh" phone="+91 93613 57737" />
          <ContactItem
            name="Aditya Varma"
            phone="+91 82486 84835"
            className="mt-4"
          />
        </div>
        <div className="w-full lg:w-56">
          <h5 className="text-xs tracking-widest">PR & Sponsorship Support</h5>
          <ContactItem name="Athrukshna" phone="+91 99433 19292" />
          <ContactItem
            name="Sudharshan"
            phone="+91 87546 13534"
            className="mt-4"
          />
        </div>
        <div className="w-full lg:w-56">
          <h5 className="text-xs tracking-widest">Tech Support</h5>
          <ContactItem name="T G Ashwin Kumar" phone="+91 96596 04838" />
          <ContactItem
            name="Jeyam Palaniappan"
            phone="+91 93847 68177"
            className="mt-4"
          />
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ name, phone, className = "" }) => {
  return (
    <div className={`${className}`}>
      <h4 className="text-lg mt-2 font-semibold">{name}</h4>
      <button className="flex items-center space-x-4 mt-2"
        onClick={() => window.open(`tel:${phone}`)}
      >
        <BsTelephone className="text-white" />
        <p className="text-sm">{phone}</p>
      </button>
    </div>
  );
};

export default Section9;
