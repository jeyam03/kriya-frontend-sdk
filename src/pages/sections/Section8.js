import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

// FAQs

const Section8 = () => {
  const [faqOpenIdx, setFaqOpenIdx] = useState(0);

  return (
    <div className="">
      <section
        id="section8"
        className="h-fit w-screen relative overflow-x-hidden lg:overflow-hidden px-[calc(100vw/12)] font-poppins py-24"
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Frequently Asked{" "}
          <span className="bg-clip-text [-webkit-text-fill-color:transparent] bg-gradient-to-r from-[#C80067] to-[#5451B6]">
            Questions
          </span>
        </h1>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center w-full lg:w-[60vw] mt-16">
            {FAQContent.map((item, index) => (
              <FAQItem
                question={item.question}
                answer={item.answer}
                isOpened={index === faqOpenIdx}
                onClick={() => setFaqOpenIdx(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FAQItem = ({ question, answer, isOpened = false, onClick }) => {
  return (
    <div className="w-full">
      <div className="p-4 lg:px-8 border-t border-gray-300 text-lg flex justify-between items-center font-semibold">
        <button className={`text-left text-base lg:text-lg py-2 ${isOpened ? "text-blue-700" : "text-black"}`} onClick={onClick}>
          {question}
        </button>
        <button onClick={onClick}>
          <AiOutlinePlus className="text-2xl" />
        </button>
      </div>
      <div
        className={`${isOpened ? "h-fit px-4 lg:px-8 py-4 " : "h-0 overflow-y-hidden"
          } transition-all ease-in-out text-sm`}
      >
        {answer}
      </div>
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

export default Section8;
