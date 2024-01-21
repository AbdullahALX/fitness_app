import React from 'react';
import NavLink from '../components/NavLink';
import logo from '../assets/logo2.png';
import img1 from '../assets/img1.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="bg-[#E5E5E5] h-screen  overflow-hidden">
      <div className="flex flex-col items-center">
        <div className=" w-full h-16 max-w-[1490px] items-center flex justify-between mx-auto px-10 pt-10 ">
          <img
            src={logo}
            alt="logo"
            className="logo w-[8rem] object-contain md:w-[14rem] cursor-pointer"
          />
          {/* <ul className=" hidden md:flex  items-center gap-5 font-Roboto font-[400]">
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">How it works</NavLink>
            <NavLink to="#">Contact us</NavLink>
          </ul> */}
        </div>
      </div>

      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 h-full">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-3xl md:mb-8 mb-3 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl font-mono font-bold ">
            Elevate Your Fitness
          </h1>
          <p class="max-w-2xl mb-6 text-gray-800 lg:mb-8 md:text-xl lg:text-xl text-pretty lg:leading-10 font-[300] font-Roboto ">
            Transform your fitness journey with{' '}
            <span className="text-[#7b73f2] font-bold md:text-2xl text-lg ">
              GymGrids
            </span>{' '}
            Tailored split workouts, personalized nutrition plans, real-time
            progress reports, and instant motivational notifications - all in
            one place using{' '}
            <span className="text-[#7b73f2] font-bold md:text-2xl text-lg  ">
              AI
            </span>
          </p>
          <Link
            to="/addUser"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#7b73f2]  hover:bg-[#877ff8] text-white border-b-4 border-[#6a60ec] hover:border-[#5b50f1] rounded  cursor-pointer"
          >
            Get started
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
          <img src={img1} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
