import React from 'react';
import { useState, useEffect, useReducer } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';
import Forms from './Forms';
import { set } from 'react-hook-form';

const SingleCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, repetitions, sets, targetedMuscles, instructions } = data;

  const ShowModal = () => {
    return (
      <>
        {showModal ? (
          <>
            <div className="flex bg-gray-700/50 justify-center  font-mono items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative  my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-md shadow-lg w-[500px] h-[500px]  relative flex flex-col  bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font-bold uppercase">
                      Instructions
                    </h3>
                    <button
                      class="text-gray-400 absolute cursor-pointer top-5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto h-full">
                    <ul className="max-w-md space-y-[40px] text-gray-500 list-inside dark:text-gray-400">
                      {instructions.map((inst, i) => (
                        <li className="flex items-center">
                          <svg
                            className="w-3.5 h-3.5 me-2 text-green-500  flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          {inst}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  };

  return (
    <div className="p-2 lg:w-1/2  w-full md:w-1/2 my-4 flex items-center justify-center ">
      <div
        className="flex flex-col h-[270px] w-[450px] cursor-pointer px-6 py-10 overflow-hidden bg-transparent border-[1px] border-[#7b73f2]  hover:bg-gradient-to-br hover:from-purple-400 hover:via-blue-400 hover:to-blue-500 rounded-xl shadow-lg duration-300 hover:shadow-2xl group"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div className="flex  flex-row justify-between items-center">
          <div className="px-4 py-4 bg-gray-300  rounded-xl bg-opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:text-gray-50 rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="inline-flex text-sm  text-gray-600 group-hover:text-gray-200 sm:text-base font-mono">
            {repetitions} reps, {sets} sets
          </div>
        </div>
        <h1 className="text-3xl  line-clamp-1  sm:text-4xl xl:text-4xl font-bold text-gray-700 mt-12 group-hover:text-gray-50">
          {name}
        </h1>
        <div className="flex flex-row  justify-between group-hover:text-gray-200">
          <p> {targetedMuscles}</p>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-600 group-hover:text-gray-200 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
      <ShowModal />
    </div>
  );
};

const Row = ({ data, day }) => {
  return (
    <>
      {data?.map((exercise, i) => (
        <SingleCard key={i} data={exercise} />
      ))}
    </>
  );
};

const RestRow = ({ data, day }) => {
  return <div className="bg-black w-screen h-full"></div>;
};

const ShowPlan = () => {
  const [data, setData] = useState();
  const [days, setDays] = useState([]);
  const [restDay, setRestDay] = useState(false);
  const [filterDay, setFilterDay] = useState('');
  let allDays =
    'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'.split(
      ', '
    );

  const { User } = useParams();

  const handleClose = (state) => {
    if (state) {
      setRestDay(false);
      return;
    } else {
      setRestDay(true);
      return;
    }
  };

  useEffect(() => {
    console.log('Data Updated');
    allDays = allDays.filter((el) => !days.includes(el));
    setRestDay(allDays);
    console.log(restDay);
  }, [data, days]);

  useEffect(() => {
    onSubmit();
  }, []);

  const onSubmit = async () => {
    let reqName = User;
    console.log(reqName);
    axios.get(`http://localhost:3002/plan/${reqName}`).then((response) => {
      console.log(response);
      setData(response.data.userData.schedule);
      setDays(response.data.userData.workoutDays.split(', '));
      setFilterDay(response.data.userData.workoutDays.split(', ')[0]);
    });
  };

  return (
    <div className=" h-screen w-screen  overflow-hidden bg-white">
      <div className="container items-center px-4 py-8 m-auto mt-5  ">
        <div className="flex flex-wrap  pb-3 mx-4 md:mx-24 lg:mx-0">
          <ul>
            <li className="absolute">
              <div className="group cursor-pointer relative inline-block  text-center px-4 py-4 bg-gray-200   rounded-full text-sm text-gray-700 hover:bg-indigo-500 hover:text-gray-200">
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                </svg>
              </div>
            </li>
          </ul>
          <ul className="w-full text-xs   sm:text-sm justify-center lg:justify-center items-center flex flex-row space-x-1 mt-6 overflow-hidden mb-4">
            {days?.map((day, i) => {
              return (
                <li>
                  <button
                    className="px-4 py-2 bg-gray-200 focus:bg-indigo-500 focus:text-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-700 hover:text-gray-200"
                    onClick={() => setFilterDay(day)}
                  >
                    {day}
                  </button>
                </li>
              );
            })}
          </ul>

          {days
            ?.filter((day) => day === filterDay)

            .map((day, i) => {
              return <Row data={data?.[day]?.exercises} day={day} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ShowPlan;
