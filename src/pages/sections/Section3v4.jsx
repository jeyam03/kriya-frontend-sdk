import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import {motion} from 'framer-motion';


const variant1={
  initial:{
    scale:1
  },
  hover:{
    scale:1.05,
    transition:{
      duration:0.2
    }
  }
}

const Section3v4 = () => {

    const navigate = useNavigate();

  return (

    <div className='flex justify-center text-white items-center py-28'>
        <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 px-[15%]'>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='hover:shadow-2xl flex flex-col space-y-4 lg:col-span-3 justify-between bg-1 bg-cover rounded-xl py-8 px-6'>
            <h1 className='text-5xl font-poppins font-bold'>
            Kriyative
            </h1>

            <p className='text-base font-poppins font-medium w-[60%]'>
            Let your imagination run wild with Kriyative! Whether you're an
                        experienced artist, a hobbyist or a curious beginner, our events
                        will inspire you to think outside the box, experiment with new
                        techniques and express your unique vision
            </p>

            <Link
                className="bg-transparent mt-4 text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=kriyative"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-2 bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-3 justify-between rounded-xl bg-[#8f3ccf] py-8 px-6'>
            <h1 className='text-5xl font-poppins font-bold'>
            Brainiac
            </h1>

            <p className='text-base font-poppins font-medium w-[60%]'>
            Unlock Your Inner Genius: Join the Brainiac Brigade! Brainiac
                events are designed to challenge your intellect, ignite your
                curiosity and push the boundaries of your knowledge. From trivia
                challenges to mind-bending puzzles, there's something for every
                cerebral superhero.
            </p>

            <Link
                className="bg-transparent text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=brainiac"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>
            

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-3 bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-4 justify-between rounded-xl bg-[#dc4fab] py-8 px-6'>
            <h1 className='text-5xl font-poppins font-bold'>
            Coding
            </h1>

            <p className='text-base font-poppins font-medium w-[60%]'>
            Whether you're a seasoned coder or just starting out, our events
                offer something for everyone. Explore cutting-edge technologies,
                connect with like-minded coders, and compete for glory in our
                exciting challenges. Unleash the power of programming and take
                your skills to the next level at our Coding Events!
            </p>

            <Link
                className="bg-transparent text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=coding"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-4 bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-2 justify-between rounded-xl bg-[#e8567c] py-8 px-6'>
            <h1 className='text-5xl font-poppins font-bold'>
            Circuit
            </h1>

            <p className='text-base font-poppins font-medium'>
            Delve into the world of circuit engineering! From digital
                electronics to power systems, our Circuit Events cover it all.
                Get ready to master the fundamentals of circuit design and don’t
                miss out on this high-voltage opportunity to supercharge your
                knowledge and network with fellow circuit enthusiasts!
            </p>

            <Link
                className="bg-transparent text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=circuit"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-5 bg-right-bottom bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-2 justify-between rounded-xl bg-[#eac64a] py-8 px-6'>
            <h1 className='text-5xl font-poppins font-bold'>
            Core Engineering
            </h1>

            <p className='text-base font-poppins font-medium'>
            Unleash the engineer in you and dive into the world of
                innovation with our cutting-edge Core Engineering events at this
                Kriya! Discover the power of engineering, and explore endless
                possibilities to put your skills to the test.
            </p>

            <Link
                className="bg-transparent text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=core"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-2 bg-right-bottom bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-2 justify-between rounded-xl bg-[#e8567c] py-8 px-6'>
            <h1
            className={`text-4xl lg:text-5xl font-poppins font-bold events-text text-whi opacity-100 text-center lg:text-left`}
          >
            Unleash your
            <span>
              {" potential"}
            </span>
            , participate in events.
          </h1>
          <button
            className="bg-transparent text-white border-white border-2 w-fit px-4 py-3 rounded-xl font-poppins flex items-center group"
            onClick={() => navigate("/auth/payment?type=GENERAL")}
          >
            <p className="font-medium">Pay general registration fee!</p>
            <IoIosArrowForward
              className="ml-2 transition-all text-white group-hover:translate-x-2"
              size={24}
            />
          </button>

            </motion.div>

            <motion.div variants={variant1} initial='initial' whileHover='hover' className='bg-1 bg-right-bottom bg-cover hover:shadow-2xl flex flex-col space-y-4 lg:col-span-2 justify-between rounded-xl bg-[#02b7e6] py-8 px-6'>


            <h1 className='text-5xl font-poppins font-bold'>
            Management
            </h1>


            <p className='text-base font-poppins font-medium'>
            Calling all aspiring leaders and entrepreneurs! Explore the
                dynamic world of Management at Kriya. From strategic planning to
                marketing and innovation, join us for an engaging and
                exhilarating set of events that will put your leadership skills
                to the test.
            </p>

            <Link
                className="bg-transparent text-white border-white border-2 w-fit px-4 py-2 rounded-xl text-sm flex items-center group"
                to="/portal/event/?ctg=management"
              >
                <p className="font-medium">Explore more</p>
                <IoIosArrowForward
                  className="ml-1 group-hover:ml-2 transition-all"
                  size={16}
                />
              </Link>
            

            </motion.div>



        </div>
    </div>
  )
}

export default Section3v4