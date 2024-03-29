import React, { useEffect, useState } from "react";
import { FaSoundcloud } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import EventGrid from "../components/EventGrid";
import { fetchEvents } from "../API/call";
import "../styles/gradientAnimation.css";

const EventList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [events, setEvents] = useState(
    fetchEvents()
      .map((event) => ({
        name: event.eventName,
        id: event.eventId,
        date: event.date,
        desc: event.one_line_desc ? event.one_line_desc : event.description,
        category: event.category,
        time: event.timing.split("-")[0],
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  );

  useEffect(() => {
    if (!searchParams.get("ctg")) return;
    const element = document.querySelector(`#${searchParams.get("ctg")}`);
    element.scrollIntoView({ behavior: "smooth" });
  }, [searchParams]);

  useEffect(() => {
    console.log(events);
  }, [events]);

  return (
    <div className="w-full font-poppins py-12 pt-24 lg:pt-12 h-screen overflow-y-scroll">
      <section className="h-fit w-full relative overflow-x-hidden lg:overflow-hidden font-poppins px-6 lg:px-8 flex flex-col items-center lg:block p-8">
        {/* <div className="w-full my-8 lg:mt-0">
          <h1 className={`text-4xl lg:text-6xl text-white font-semibold font-poppins text-center py-2`}
            id="soon-text"
          >
            ✨ EVENTS ✨
          </h1>
        </div> */}
        <h1
          className={`text-4xl lg:text-5xl tracking-wide font-semibold text-center pt-8`}
          id="gold"
        >
          GOLD EVENTS
        </h1>
        <EventsGrid
          imgurl={
            "https://media.istockphoto.com/id/1181359760/vector/gold-glitter-and-shiny-golden-rain-on-black-background-vector-square-luxury-background.jpg?s=612x612&w=0&k=20&c=L8On7JUZdmNYNTMBeD03-45lsBvaD1E0c2z8h-MsVOs="
          }
          arrowCircleStart="from-[#8B5523]"
          arrowCircleEnd="to-[#F2CC3E]"
          obj={events.filter((i) => i.category === "Gold")}
          topCurve="bg-[#010101]"
          rightCurve="bg-[#010101]"
          iconImg={"https://cdn-icons-png.flaticon.com/512/3309/3309977.png"}
        />
        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="kriyative"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#a861ff] to-[#8938d1]">
            Kriyative
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/kriyative.png"
          }
          arrowCircleStart="from-[#121a43]"
          arrowCircleEnd="to-[#a21cd9]"
          obj={events.filter((i) => i.category === "Kriyative")}
          topCurve="bg-[#7d1ab2]"
          rightCurve="bg-[#551789]"
          iconImg={
            "/assets/CatLogo/kriyative.png"
          }
        />

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="brainiac"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#8f3ccf] to-[#df51ad]">
            Brainiac
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/brainiac.png"
          }
          arrowCircleStart="from-[#980283]"
          arrowCircleEnd="to-[#500d23]"
          obj={events.filter((i) => i.category === "Brainiac")}
          topCurve="bg-[#770658]"
          rightCurve="bg-[#630a3d]"
          iconImg={
            "/assets/CatLogo/brainiac.png"
          }
        />

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="coding"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#dc4fab] to-[#eb587b]">
            Coding
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/coding.png"
          }
          arrowCircleStart="from-[#c61b59]"
          arrowCircleEnd="to-[#371243]"
          obj={events.filter((i) => i.category === "Coding")}
          topCurve="bg-[#b21a56]"
          rightCurve="bg-[#891750]"
          iconImg={
            "/assets/CatLogo/coding.png"
          }
        />

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="circuit"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#e8567c] to-[#f48555]">
            Circuit
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/circuit.png"
          }
          arrowCircleStart="from-[#c74517]"
          arrowCircleEnd="to-[#5c330f]"
          obj={events.filter((i) => i.category === "Circuit")}
          topCurve="bg-[#e04918]"
          rightCurve="bg-[#e04918]"
          iconImg={
            "/assets/CatLogo/circuit.png"
          }
        />

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="core"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#eac64a] to-[#2ea47e]">
            Core Engineering
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/core.png"
          }
          arrowCircleStart="from-[#029893]"
          arrowCircleEnd="to-[#0d2e50]"
          obj={events.filter((i) => i.category === "Core Engineering")}
          topCurve="bg-[#066b77]"
          rightCurve="bg-[#0a4c63]"
          iconImg={
            "/assets/CatLogo/core.png"
          }
        />

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-center pt-8`}
          id="management"
        >
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#02b7e6] to-[#27eba2]">
            Management
          </span>
        </h1>
        <EventsGrid
          imgurl={
            "/assets/EventGrid/management.png"
          }
          arrowCircleStart="from-[#2696d9]"
          arrowCircleEnd="to-[#152e60]"
          obj={events.filter((i) => i.category === "Management")}
          topCurve="bg-[#28a5ea]"
          rightCurve="bg-[#28a5ea]"
          iconImg={
            "/assets/CatLogo/manager.png"
          }
        />
      </section>
    </div>
  );
};

export default EventList;

const EventsGrid = ({
  obj,
  imgurl,
  arrowCircleStart,
  arrowCircleEnd,
  topCurve,
  rightCurve,
  iconImg,
}) => {
  const toTitleCase = (phrase) => {
    const wordsToIgnore = ["of", "in", "for", "and", "a", "an", "or"];
    const wordsToCapitalize = ["it", "cad"];

    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (wordsToIgnore.includes(word)) {
          return word;
        }
        if (wordsToCapitalize.includes(word)) {
          return word.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  return (
    <div className="flex-wrap flex gap-8 py-12 justify-center">
      {obj.map((i) => {
        return (
          <EventGrid
            title={toTitleCase(i.name)}
            description={i.desc}
            date={i.date}
            time={i.time}
            iconImg={iconImg}
            imgurl={imgurl}
            arrowCircleStart={arrowCircleStart}
            arrowCircleEnd={arrowCircleEnd}
            topCurve={topCurve}
            rightCurve={rightCurve}
            to={`/portal/event/${i.id}`}
          />
        );
      })}
    </div>
  );
};
