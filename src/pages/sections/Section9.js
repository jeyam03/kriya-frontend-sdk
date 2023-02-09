import React, { useEffect } from "react";

const Section9 = () => {
  useEffect(() => {
    const element = document.querySelector("#anchor9");
    const faqTexts = document.querySelectorAll(".faq-text");
    const observer = new IntersectionObserver((entries) => {
      // console.log(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
        faqTexts.forEach((faqText, index) => {
          console.log(index, Math.floor(index / 3) === 0);
          faqText.classList.add(
            "animate-fade-in",
            Math.floor(index / 3) === 0
              ? "animation-delay-1"
              : "animation-delay-2"
          );
        });
      } else {
        faqTexts.forEach((faqText, index) => {
          faqText.classList.remove(
            "animate-fade-in",
            Math.floor(index / 3) === 0
              ? "animation-delay-1"
              : "animation-delay-2"
          );
        });
      }
    });

    observer.observe(element);
  });

  return (
    <div className="">
      <section
        id="section9"
        className=" h-screen w-screen relative overflow-x-hidden lg:overflow-hidden px-[calc(100vw/12)] font-poppins py-24"
      >
        <h1 className="text-5xl font-bold w-[40vw]">
          Frequently asked{" "}
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
            Questions
          </span>
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 mt-16">
          {FAQContent.map((item, index) => (
            <FAQItem
              question={item.question}
              answer={item.answer}
              delay={Math.floor(index / 3) === 0}
            />
          ))}
        </div>
      </section>
      <a id="anchor9"></a>
    </div>
  );
};

const FAQItem = ({ question, answer, delay = false }) => {
  return (
    <div
      className={`space-y-4 font-poppins faq-text opacity-0 ${
        delay ? "delay-500" : "delay-1000"
      }`}
    >
      <p className="font-bold text-lg">{question}</p>
      <p className="text-sm">{answer}</p>
    </div>
  );
};

const FAQContent = [
  {
    question: "What is the purpose of the college event?",
    answer:
      "The purpose of the college event is to provide a platform for students, faculty, and staff to come together to participate in a range of activities and programs designed to promote community building and learning. The event may include workshops, speakers, concerts, and other forms of entertainment.",
  },
  {
    question: "Who can attend the college event?",
    answer:
      "The college event is open to all students, faculty, and staff members of the college, as well as alumni and members of the local community.",
  },
  {
    question: "What is the schedule for the event?",
    answer:
      "The schedule for the college event will be made available in advance through the college's website, social media channels, and other communication channels. It will typically include a detailed schedule of activities and programs, along with information on when and where they will take place.",
  },
  {
    question: "Is there a cost to attend the college event?",
    answer:
      "The cost of attending the college event will depend on the specific activities and programs included in the event. Some activities and programs may be free, while others may require a fee. Information on the cost of attending each event will be made available in advance through the college's website and other communication channels.",
  },
  {
    question: "How can I register to attend the college event?",
    answer:
      "Registration to attend the college event can typically be done through the college's website or by contacting the event organizers directly. Information on how to register will be made available in advance through the college's website and other communication channels.",
  },
  {
    question:
      "Are there any accommodations available for attendees with disabilities?",
    answer:
      "The college is committed to providing accommodations for attendees with disabilities. Information on available accommodations will be made available in advance through the college's website and other communication channels, and attendees are encouraged to contact the event organizers directly to request any necessary accommodations.",
  },
];

export default Section9;
