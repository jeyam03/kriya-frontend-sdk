import React, { useEffect } from "react";
import "../../styles/Landing.css";
import Event from "../../components/Event";

const Section3 = () => {
  useEffect(() => {
    const element = document.querySelector("#anchor3");
    const eventsTexts = document.querySelectorAll(".events-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        eventsTexts.forEach((eventsText) => {
          eventsText.classList.add("animate-fade-in");
        });
      } else {
        eventsTexts.forEach((eventsText) => {
          eventsText.classList.remove("animate-fade-in");
        });
      }
    });

    observer.observe(element);
  });

  return (
    <div className="w-full h-full relative">
      <section
        id="section3"
        className=" h-screen w-full relative p-16 px-[calc(100vw/12)] flex items-center"
      >
        {/* <div className="w-[70vw] overflow-hidden h-full bg-red-600">
        <div className="flex relative p-12 space-x-6 bg-red-400">
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
           </div>

            <div className="flex relative p-12 space-x-6 bg-red-500">
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
             <Event
               title="Scan and Reckon"
               description="Lorem Ipsum blah blah blah"
               className="w-72"
             />
           </div> 

         </div>  */}

        {/* <div className="w-[70vw] h-full bg-red-500">
          <div className="grid grid-cols-3"></div>
        </div> */}

        <div className="w-[30vw] pl-12">
          <h1 className="text-7xl font-poppins font-semibold text-white events-text opacity-0">
            Unleash your
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" potential "}
            </span>
            , participate in events.
          </h1>
        </div>
      </section>
      <a id="anchor3" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section3;
