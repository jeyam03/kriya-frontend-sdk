import React, { useState, useEffect, useRef } from "react";

const Section2 = ({ scrollYByVH }) => {
  const [fadeInAnimate, setFadeInAnimate] = useState(false);

  const [timer, setTimer] = useState({
    hours: "0",
    minutes: "0",
    seconds: "0",
    days: "0",
  });

  const timerRef = useRef(null);

  const startTimer = (e) => {
    let { total, hours, minutes, seconds, days } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer({ hours, minutes, seconds, days });
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer({
      hours: "00",
      minutes: "00",
      seconds: "00",
      days: "00",
    });

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (timerRef.current) clearInterval(timerRef.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    timerRef.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date("2023-03-24");
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / 1000 / 60 / 60 / 24);
    return {
      total,
      hours,
      minutes,
      seconds,
      days,
    };
  };

  useEffect(() => {
    const element = document.querySelector("#anchor1");
    const numberTags = document.querySelectorAll(".number-tag");
    const calenderTexts = document.querySelectorAll(".calender-text");
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        numberTags.forEach((numberTag) => {
          numberTag.classList.add("animate-fade-in-bottom");
        });
        calenderTexts.forEach((calenderText) => {
          calenderText.classList.add("animate-fade-in");
        });
      } else {
        numberTags.forEach((numberTag) => {
          numberTag.classList.remove("animate-fade-in-bottom");
        });
        calenderTexts.forEach((calenderText) => {
          calenderText.classList.remove("animate-fade-in");
        });
      }
    });

    observer.observe(element);
  });

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full relative">
      <section
        id="section2"
        className="h-screen w-full relative [scroll-snap-align:start] m-0 p-0 py-12 lg:py-16 flex flex-col lg:flex-row lg:justify-center"
      >
        <div className="w-full lg:w-[50vw] lg:pl-[calc(100vw/12)] py-16 lg:pr-16 h-full flex flex-col justify-center">
          <h1 className="text-7xl opacity-0 px-8 lg:p-0  font-[600] text-[#181818] calender-text font-poppins">
            Mark your{" "}
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              calendar
            </span>
          </h1>
          <p className="text-xl mt-8 opacity-0 px-8 lg:p-0  text-[#181818] calender-text font-poppins">
            Join us at the forefront of technological advancements and gain
            valuable insights at our upcoming technical symposium Kriya 2023 !
          </p>
          <div className="px-8 lg:p-0 ">
            <button className="calender-text opacity-0 mt-8 w-fit px-4 py-2 text-lg font-poppins rounded-lg border-[#181818] border ">
              Add to Calendar
            </button>
          </div>
          <div className="flex space-x-4 lg:hidden items-center justify-center w-full mt-8 px-8 lg:p-0 ">
            <NumberAndTagForMobile number={timer.days} tag="days" />
            <h1 className="text-3xl font-poppins font-bold">:</h1>
            <NumberAndTagForMobile number={timer.hours} tag="hours" />
            <h1 className="text-3xl font-poppins font-bold">:</h1>
            <NumberAndTagForMobile number={timer.minutes} tag="minutes" />
            <h1 className="text-3xl font-poppins font-bold">:</h1>
            <NumberAndTagForMobile number={timer.seconds} tag="seconds" />
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-x-0 w-full lg:w-[50vw] pr-[calc(100vw/12)] relative">
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number={timer.days}
            tag="days"
          />
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number={timer.hours}
            tag="hours"
          />
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number={timer.minutes}
            tag="minutes"
          />
          <NumberAndTag
            fadeInAnimate={fadeInAnimate}
            number={timer.seconds}
            tag="seconds"
          />
        </div>
      </section>
      <a id="anchor1" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

const NumberAndTag = ({ number, tag, fadeInAnimate }) => {
  return (
    <div className="relative w-[40ch] number-tag">
      <h1 className="absolute bottom-4 right-4 [line-height:40vh] bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-t from-[rgba(18,18,18,0.3)] to-[rgba(18,18,18,0.6)] text-[40vh] text-red-400 font-oswald font-bold tracking-[-0.15em]">
        {parseInt(number) % 10 === parseInt(number) ? `0${number}` : number}
        &nbsp;
      </h1>
      <p className="absolute right-4 bottom-8 uppercase  text-[rgb(18,18,18)] text-5xl font-bold font-oswald">
        {tag}
      </p>
    </div>
  );
};

const NumberAndTagForMobile = ({ number, tag }) => {
  return (
    <div className="space-y-4 flex flex-col justify-center">
      <h1 className="text-4xl font-oswald font-bold text-center">
        {parseInt(number) % 10 === parseInt(number) ? `0${number}` : number}
      </h1>
      <p className="text-center text-xs uppercase tracking-widest">{tag}</p>
    </div>
  );
};

export default Section2;