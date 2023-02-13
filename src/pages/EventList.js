import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import EventGrid from "../components/EventGrid";

const EventList = () => {
  const [consolee, setConsolee] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        setConsolee((window.pageYOffset / window.innerHeight).toFixed(2));
      },
      { passive: true }
    );
  }, [consolee]);

  useEffect(() => {
    if (!searchParams.get("ctg")) return;
    const element = document.querySelector(`#${searchParams.get("ctg")}`);
    element.scrollIntoView({ behavior: "smooth" });
  }, [searchParams])

  const condition = `${parseFloat(consolee) <= 2.75 ? "text-white" : "text-[#181818]"}`;

  return (
    <div className="w-full font-poppins py-12 pt-36 lg:pt-12 h-screen overflow-y-scroll">
      <section
        className="h-fit w-full relative overflow-x-hidden lg:overflow-hidden font-poppins p-12"
      >
        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="kriyative">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#5238d1] to-[#8938d1]">
            Kriyative
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/coding_dpsp2m.png"}
          arrowCircleStart="from-[#121a43]"
          arrowCircleEnd="to-[#a21cd9]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#7d1ab2]"
          rightCurve="bg-[#551789]"
        />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="brainiac">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
            Brainiac
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/brainiac_wgpqys.png"}
          arrowCircleStart="from-[#980283]"
          arrowCircleEnd="to-[#500d23]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#770658]"
          rightCurve="bg-[#630a3d]"
        />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="coding">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
            Coding
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/coding_dfiojkgn_bfjdah.png"}
          arrowCircleStart="from-[#c61b59]"
          arrowCircleEnd="to-[#371243]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#b21a56]"
          rightCurve="bg-[#891750]"
        />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="circuit">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
            Circuit
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/circuit_lcvpuh.png"}
          arrowCircleStart="from-[#c74517]"
          arrowCircleEnd="to-[#5c330f]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#e04918]"
          rightCurve="bg-[#e04918]"
        />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="core">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
            Core Engineering
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676283611/EventGrid/core_engg_i8jzke.png"}
          arrowCircleStart="from-[#029893]"
          arrowCircleEnd="to-[#0d2e50]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#066b77]"
          rightCurve="bg-[#0a4c63]"
        />

        <h1 className={`text-3xl lg:text-4xl font-semibold text-center lg:text-left ${condition}`} id="management">
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#27eba2]">
            Management
          </span>
        </h1>
        <EventsGrid
          imgurl={"https://res.cloudinary.com/dksmk66vo/image/upload/v1676282935/EventGrid/management_vogvi4.png"}
          arrowCircleStart="from-[#2696d9]"
          arrowCircleEnd="to-[#152e60]"
          obj={["One", "Two", "Three", "Four"]}
          topCurve="bg-[#28a5ea]"
          rightCurve="bg-[#28a5ea]"
        />

      </section>
    </div>
  );
};

export default EventList;

const EventsGrid = ({ obj, imgurl, arrowCircleStart, arrowCircleEnd, topCurve, rightCurve }) => {
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

  const arrowBgCondition = `${window.innerWidth < 768 ? parseFloat(consolee) <= 3.5 ? "bg-[#121212]" : "bg-white" : parseFloat(consolee) < 2.75 ? "bg-[#121212]" : "bg-white"}`;

  return (
    <div className="flex-wrap flex gap-8 py-12">
      {
        obj.map((i) => {
          return (
            <EventGrid
              title={i}
              description="Kriyative is a platform for the creative minds to showcase their talent and get recognized. It is a platform for the creative minds."
              date="21st March 2021"
              time="10:00 AM"
              arrowColor={arrowBgCondition}
              icon={<FaSoundcloud />}
              imgurl={imgurl}
              arrowCircleStart={arrowCircleStart}
              arrowCircleEnd={arrowCircleEnd}
              topCurve={topCurve}
              rightCurve={rightCurve}
            />
          )
        }
        )}
    </div>
  );
}