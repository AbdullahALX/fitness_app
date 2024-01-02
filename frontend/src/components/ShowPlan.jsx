import React from 'react';
import { useState, useEffect, useReducer } from 'react';

import axios from 'axios';

const SingleCard = ({ data }) => {
  const { name, repetitions, sets, targetedMuscles, instructions } = data;

  return (
    <div className="w-[350px] h-w-[380px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-500">
        {name}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {repetitions} repetitions
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {sets} sets
      </p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Targeted Muscles: {targetedMuscles}
      </p>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Instructions
      </p>
      <p className="mb-3 font-normal  text-gray-800 dark:text-gray-500">
        {instructions.map((inst, i) => (
          <li className=" text-balance mt-1 " key={i}>
            {inst}
          </li>
        ))}
      </p>
      {/* <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a> */}
    </div>
  );
};

const Row = ({ data, day }) => {
  return (
    <>
      <h1 className=" text-white font-mono text-3xl  my-10">{day}</h1>
      <div className=" w-full flex flex-row justify-center gap-4 ">
        {data?.map((exercise, i) => (
          <SingleCard key={i} data={exercise} />
        ))}
      </div>
    </>
  );
};

const ShowPlan = () => {
  const [data, setData] = useState();
  const [days, setDays] = useState([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('Data Updated');
    // console.log(days);
  }, [data, days]);

  const onSubmit = async () => {
    let reqName = email;
    axios.get(`http://localhost:3002/plan/${reqName}`).then((response) => {
      setData(response.data.userData.schedule);
      setDays(response.data.userData.workoutDays.split(', '));

      setEmail('');
    });
  };

  return (
    <div className="bg-gray-900 w-full  justify-center items-start  h-screen  relative ">
      <div className="w-[400px] absolute mx-3 gap-3 right-5 top-5">
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" w-[45%] py-3 px-2 rounded-md mr-3"
          placeholder="Enter your email"
        />
        <button
          className="my-5  w-[40%] py-3 px-6 text-white  bg-purple-500 rounded-md hover:bg-purple-400 cursor-pointer"
          onClick={onSubmit}
        >
          Get Plan
        </button>
      </div>
      <h1 className="text-2xl font-mono font-bold p-10  text-purple-400">
        Your Schedule
      </h1>
      <div>
        <h1 className="text-3xl font-mono font-bold p-10 text-blue-100 ">
          Days
        </h1>
      </div>
      <div className="justify-center flex gap-1 w-screen flex-wrap  overflow-y-auto h-screen my-5">
        {days?.map((day, i) => {
          return <Row data={data?.[day]?.exercises} day={day} key={i} />;

          // data?.[day]?.exercises?.map((exercise, i) => (
          //   <SingleCard key={i} data={exercise} />
          // ))
        })}
      </div>
    </div>
  );
};

export default ShowPlan;
