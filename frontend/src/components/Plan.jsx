import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import img3 from '../assets/img3.svg';

const Plan = () => {
  const url = 'https://fitness-app-server-7k3b.onrender.com/';
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const [Done, setDone] = useState(false);
  const [email, setEmail] = useState();
  const [isUser, setIsUser] = useState(false);

  const handleSubmitStatus = (status) => {
    setShow(false);
    if (status) {
      setDone(true);
    } else {
      setDone(false);
    }
  };

  const onSubmit = async () => {
    setShow(true);
    let reqName = email;
    axios
      .get(url + `users/${reqName}`)
      .then((response) => {
        console.log(email);
        setData(response.data);
        handleSubmitStatus(false);
      })
      .catch((err) => {
        if (err.response.data === 'schedule was already created') {
          handleSubmitStatus(true);
        } else if (err.response.data === 'User not found') {
          setIsUser(true);
          setShow(false);
        }
      });
  };

  return (
    <div
      className={`h-screen w-screen bg-[#fff] flex flex-row items-center p-[35px] justify-center gap-[200px] `}
    >
      <div className=" object-contain  flex   items-start flex-col justify-between order-2 ">
        {' '}
        <h1 className="max-w-3xl md:mb-8 mb-3 text-2xl  tracking-tight leading-none md:text-3xl xl:text-4xl font-mono font-bold my-10 text-[#4942ad] ">
          Let's formulate your workout 👾
        </h1>
        <img src={img3} alt="mockup" className="w-[80%] my-10" />
      </div>
      <div className=" order-2 h-full flex flex-col justify-center items-center ">
        {show && (
          <div
            class="inline-block  h-[300px] w-[300px] animate-spin rounded-full border-4 border-solid border-[#7b73f2] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.7s_linear_infinite] "
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        )}
        {isUser && (
          <div className=" mb-[30px]">
            <h1 className="text-lg text-red-500 font-mono font-[100] inline-block ">
              {' '}
              User not found,
            </h1>
            <a
              href="addUser"
              onClick={() => setIsUser(!isUser)}
              type="button"
              className="text-[#7b73f2] font-medium  text-lg font-mono mx-2 py-2.5 text-center inline-flex items-center hover:underline"
            >
              Create User
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </a>
          </div>
        )}
        {Done ? (
          <div className=" mb-[30px]">
            <h1 className="text-lg text-black font-mono font-[100] inline-block ">
              {' '}
              You already have a schedule,
            </h1>
            <a
              onClick={() => console.log(email)}
              href={`/showPlan/${email} `}
              type="button"
              className="text-[#7b73f2] font-medium  text-lg font-mono mx-2 py-2.5 text-center inline-flex items-center hover:underline"
            >
              Show plan
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
            </a>
          </div>
        ) : (
          data && (
            <div className=" mb-[30px]">
              <h1 className="text-lg text-black font-mono font-[100] inline-block ">
                {' '}
                Successfully generated the schedule,
              </h1>
              <a
                onClick={() => console.log(email)}
                href={`/showPlan/${email} `}
                type="button"
                className="text-[#7b73f2] font-medium  text-lg font-mono mx-2 py-2.5 text-center inline-flex items-center hover:underline"
              >
                Show plan
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
              </a>
            </div>
          )
        )}
        <div className="flex flex-wrap -mx-3  mb-2 py-3 my-10 w-fititems-center justify-center">
          <div className="w-full px-3 text-center ">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Your Email
            </label>
            <input
              required
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] 
            `}
              placeholder="example@email.com"
            />
          </div>
          <button
            onClick={() => {
              if (email) {
                onSubmit();
              }
            }}
            className="py-2  my-2 px-5 text-sm font-medium text-center border-[1px] border-[#7b73f2] text-black rounded-sm hover:bg-[#7b73f2] hover:text-white focus:outline-none cursor-pointer "
          >
            submit
          </button>
        </div>
      </div>

      {/* <button
        className="my-5 block w-full py-3 px-2 bg-purple-500 rounded-md hover:bg-purple-400 cursor-pointer"
        onClick={onSubmit}
      >
        run
      </button>
      {show ? (
        <h1 className="text-green-500 text-center text-lg">Done</h1>
      ) : (
        <h1 className="text-red-500 text-center text-lg">
          Run & Generating...
        </h1>
      )}
      {!email && (
        <h1 className="text-red-400 text-center text-lg">
          Waiting for you data
        </h1>
      )} */}
    </div>
  );
};

export default Plan;
