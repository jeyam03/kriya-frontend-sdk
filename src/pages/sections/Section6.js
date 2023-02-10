import React, { useEffect, useState } from "react";
import "../../styles/Landing.css";

const Section6 = () => {
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

  useEffect(() => {
    const element = document.querySelector("#anchor6");
    const workshopTexts = document.querySelectorAll(".workshop-text");
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      // if (entries[0].isIntersecting) {
      //   teamTexts.forEach((eventsText) => {
      //     eventsText.classList.add("animate-fade-in");
      //   });
      // } else {
      //   teamTexts.forEach((eventsText) => {
      //     eventsText.classList.remove("animate-fade-in");
      //   });
      // }
      workshopTexts.forEach((eventsText) => {
        eventsText.classList.add("animate-fade-in");
      });
    });

    observer.observe(element);
  });

  const [fixedPosition, setFixedPosition] = useState("relative");

  useEffect(() => {
    const rightGrid = document.querySelector("#right-workshop-grid");
    const leftGrid = document.querySelector("#left-workshop-grid");
    if (
      leftGrid.getBoundingClientRect().top <= 0 &&
      leftGrid.getBoundingClientRect().bottom > window.innerHeight &&
      fixedPosition !== "fixed"
    ) {
      setFixedPosition("fixed");
    } else if (leftGrid.getBoundingClientRect().top > 0) {
      setFixedPosition("relative");
    } else if (leftGrid.getBoundingClientRect().bottom <= window.innerHeight) {
      setFixedPosition("absolute");
    }
    console.log(
      leftGrid.getBoundingClientRect(),
      fixedPosition,
      window.innerHeight
    );
  });

  return (
    <div className="w-full relative">
      <section
        id="section8"
        className="w-screen relative flex flex-col lg:flex-row items-start workshop-text opacity-0"
      >

        <div
          className={`hidden lg:w-screen lg:flex items-center h-screen overflow-y-hidden transition-all ${fixedPosition === "fixed"
            ? "fixed top-0 left-0"
            : fixedPosition === "absolute"
              ? "absolute bottom-0 left-0"
              : "absolute top-0 left-0"
            }`}
          id="right-workshop-grid"
        >
          <div className="w-[50%] h-full flex flex-col lg:justify-center items-center p-24">
            <h1 className={`text-5xl font-poppins font-semibold workshop-text opacity-0 px-8 lg:p-0 pt-8`}>
              Join the
              <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
                {" masterclass workshops "}
              </span>{" "}
              from innovation leaders and industry experts.
            </h1>
          </div>
        </div>

        <div
          className={`hidden lg:flex relative items-center right-0 w-screen font-poppins pt-16 pb-0`}
          id="left-workshop-grid"
        >
          <div className="flex-1"></div>
          <div className="lg:w-[calc(100vw-75vh)] pl-[calc(100vw/24)] pr-8 pt-96">
            <RightImage
              number={1}
              imgurl="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Discovery-Workshop-The-complete-guide-to-starting-projects-right.png"
              title="Discovery Workshop"
            />
            <LeftImage
              number={2}
              imgurl="https://i.pinimg.com/736x/0c/87/1b/0c871b0a561e310c830b60630367442a.jpg"
              title="Data Science Workshop"
            />
            <RightImage
              number={3}
              imgurl="https://davewentzel.com/images/discovery_1024.jpg"
              title="Discovery Workshop"
            />
            <LeftImage
              number={4}
              imgurl="https://www.xevensolutions.com/wp-content/uploads/2022/11/Workshop-main.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={5}
              imgurl="https://www.thinkplaceglobal.com/sites/default/files/styles/detail_banner/public/online_workshop_adobestock_337053566-01.png?itok=rcLL_AzU"
              title="Discovery Workshop"
            />
            <LeftImage
              number={6}
              imgurl="https://www.zohowebstatic.com/sites/default/files/zoho_general_pages/workshop/apac-art-work-6.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={7}
              imgurl="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Discovery-Workshop-The-complete-guide-to-starting-projects-right.png"
              title="Discovery Workshop"
            />
            <LeftImage
              number={8}
              imgurl="https://i.pinimg.com/736x/0c/87/1b/0c871b0a561e310c830b60630367442a.jpg"
              title="Data Science Workshop"
            />
            <RightImage
              number={9}
              imgurl="https://davewentzel.com/images/discovery_1024.jpg"
              title="Discovery Workshop"
            />
            <LeftImage
              number={10}
              imgurl="https://www.xevensolutions.com/wp-content/uploads/2022/11/Workshop-main.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={11}
              imgurl="https://www.thinkplaceglobal.com/sites/default/files/styles/detail_banner/public/online_workshop_adobestock_337053566-01.png?itok=rcLL_AzU"
              title="Discovery Workshop"
            />
            <LeftImage
              number={12}
              imgurl="https://www.zohowebstatic.com/sites/default/files/zoho_general_pages/workshop/apac-art-work-6.png"
              title="Data Science Workshop"
            />
          </div>
        </div>



        <div className="lg:hidden w-full p-8 pt-0">
          <h1 className={`text-4xl font-poppins font-semibold workshop-text opacity-0 text-center`}>
            Join the
            <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
              {" masterclass workshops "}
            </span>{" "}
            from innovation leaders and industry experts.
          </h1>
        </div>

        <div className={`lg:hidden items-center w-full font-poppins py-8`}>
          <div className="p-4">
            <RightImage
              number={1}
              imgurl="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Discovery-Workshop-The-complete-guide-to-starting-projects-right.png"
              title="Discovery Workshop"
            />
            <LeftImage
              number={2}
              imgurl="https://i.pinimg.com/736x/0c/87/1b/0c871b0a561e310c830b60630367442a.jpg"
              title="Data Science Workshop"
            />
            <RightImage
              number={3}
              imgurl="https://davewentzel.com/images/discovery_1024.jpg"
              title="Discovery Workshop"
            />
            <LeftImage
              number={4}
              imgurl="https://www.xevensolutions.com/wp-content/uploads/2022/11/Workshop-main.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={5}
              imgurl="https://www.thinkplaceglobal.com/sites/default/files/styles/detail_banner/public/online_workshop_adobestock_337053566-01.png?itok=rcLL_AzU"
              title="Discovery Workshop"
            />
            <LeftImage
              number={6}
              imgurl="https://www.zohowebstatic.com/sites/default/files/zoho_general_pages/workshop/apac-art-work-6.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={7}
              imgurl="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/Discovery-Workshop-The-complete-guide-to-starting-projects-right.png"
              title="Discovery Workshop"
            />
            <LeftImage
              number={8}
              imgurl="https://i.pinimg.com/736x/0c/87/1b/0c871b0a561e310c830b60630367442a.jpg"
              title="Data Science Workshop"
            />
            <RightImage
              number={9}
              imgurl="https://davewentzel.com/images/discovery_1024.jpg"
              title="Discovery Workshop"
            />
            <LeftImage
              number={10}
              imgurl="https://www.xevensolutions.com/wp-content/uploads/2022/11/Workshop-main.png"
              title="Data Science Workshop"
            />
            <RightImage
              number={11}
              imgurl="https://www.thinkplaceglobal.com/sites/default/files/styles/detail_banner/public/online_workshop_adobestock_337053566-01.png?itok=rcLL_AzU"
              title="Discovery Workshop"
            />
            <LeftImage
              number={12}
              imgurl="https://www.zohowebstatic.com/sites/default/files/zoho_general_pages/workshop/apac-art-work-6.png"
              title="Data Science Workshop"
            />
          </div>
        </div>
      </section>
      <a id="anchor6" className="absolute top-[75%] w-full h-20"></a>
    </div>
  );
};

export default Section6;

const LeftImage = ({ number, imgurl, title }) => {
  return (
    <div className="flex flex-row justify-end">
      <div className="bg-opacity-50 bg-gray-200 flex w-1/2 h-28 lg:w-96 lg:h-64">
        <div
          style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

          }}
          className={`w-full h-full`}></div>
      </div>
      <div className="w-1/2 h-28 lg:w-96 lg:h-64 border-r border-r-gray-300 p-4 flex flex-row items-end space-x-4">
        <div className="text-sm lg:text-lg w-[75%] pb-2 font-semibold">
          {title}
        </div>
        <div className="text-6xl lg:text-8xl font-semibold text-gray-300">
          {number}
        </div>
      </div>
    </div>
  );
};

const RightImage = ({ number, imgurl, title }) => {
  return (
    <div className="flex flex-row justify-end">
      <div className="w-1/2 h-28 lg:w-96 lg:h-64 border-l border-l-gray-300 p-4 flex flex-row items-end space-x-4">
        <div className="text-sm lg:text-lg w-[75%] pb-2 font-semibold">
          {title}
        </div>
        <div className="text-6xl lg:text-8xl font-semibold text-gray-300">
          {number}
        </div>
      </div>
      <div className="bg-opacity-50 bg-gray-200 flex w-1/2 h-28 lg:w-96 lg:h-64">
        <div
          style={{
            background: `url("${imgurl}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

          }}
          className={`w-full h-full`}></div>
      </div>
    </div>
  );
};
