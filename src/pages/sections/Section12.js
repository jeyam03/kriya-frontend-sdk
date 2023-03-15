import React, { useState, useEffect, useRef } from "react";

// Countdown

const Section12 = ({ scrollYByVH }) => {
  const [fadeInAnimate, setFadeInAnimate] = useState(false);
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
    const element = document.querySelector("#anchor2");
    const numberTags = document.querySelectorAll(".number-tag");
    const calenderTexts = document.querySelectorAll(".calender-text");
    const observer = new IntersectionObserver((entries) => {

      numberTags.forEach((numberTag) => {
        numberTag.classList.add("animate-fade-in-bottom");
      });
      calenderTexts.forEach((calenderText) => {
        calenderText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  useEffect(() => { }, []);

  const condition = `${parseFloat(consolee) < 0.75 ? "text-[#181818]" : "text-white"}`;
  const borderCondition = `${parseFloat(consolee) < 0.75 ? "border-[#181818]" : "border-white"}`;

  return (
    <div className="w-full h-full relative">
      <section
        id="section2"
        className="h-screen w-full relative [scroll-snap-align:start] flex flex-row"
      >
        <div className={`w-full h-full`}
          style={{
            background: `url(/assets/Design/syed5.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
        </div>
      </section>
      <a id="anchor2" className="absolute top-[35%] w-full h-20 -z-10"></a>
    </div>
  );
};

export default Section12;
