import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img2 from '../assets/img2.svg';

const Forms2 = () => {
  const url = 'https://fitness-app-server-7k3b.onrender.com';
  const [show, setShow] = useState(false);
  const [Done, setDone] = useState(false);
  const [emailAlready, setEmailAlready] = useState('');
  const muscles =
    'None, Biceps, Hamstring, Triceps, Latissimus Dorsi, Quadriceps, Cardiac, Calf, Trapezius, Glutes, Gastrocnemius, Pectorals, Deltoid, Erector spinae'.split(
      ', '
    );

  const days =
    'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'.split(
      ', '
    );

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();

  const handleSubmitStatus = (status) => {
    setShow(true);
    if (status) {
      setDone(true);
    } else {
      setDone(false);
    }
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setEmailAlready(data.email);

    const dataFinsl = JSON.stringify(data);
    console.log(dataFinsl);
    await axios
      .post(url + '/api', data)
      .then((res) => {
        if (res.status == 200) {
          handleSubmitStatus(true);
          e.target.reset();
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data === 'User was already created') {
          handleSubmitStatus(false);
        }
      });
  };

  useEffect(() => {}, [emailAlready]);

  return (
    <div
      className={`h-screen w-screen bg-[#fff] flex flex-row items-center p-[35px]   `}
    >
      <form
        className={`w-full max-w-lg my-auto mx-10 order-2 `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 py-5">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Your Name
            </label>
            <input
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] ${
                errors.name
                  ? ' border-red-500'
                  : 'border-gray-200  focus:border-gray-500   '
              }`}
              type="text"
              placeholder="Jane"
              {...register('name', {
                required: 'Name is required',
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3  mb-2 py-3">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Your Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                  message: 'Please enter a valid email',
                },
              })}
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] ${
                errors.email
                  ? ' border-red-500'
                  : 'border-gray-200  focus:border-gray-500   '
              }`}
              type="text"
              placeholder="example@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3  mb-2">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0 py-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Gender
            </label>
            <div className="relative">
              <select
                className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3   leading-tight focus:bg-[#eaeaea] ${
                  errors.gender
                    ? ' border-red-500'
                    : 'border-gray-200  focus:border-gray-500   '
                }`}
                {...register('gender', { required: 'Gender is required' })}
              >
                <option selected disabled value="">
                  Choose ...
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-xs italic">
                  {errors.gender.message}
                </p>
              )}

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 py-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              level Of Exercise
            </label>
            <div className="relative">
              <select
                className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3   leading-tight focus:bg-[#eaeaea] ${
                  errors.levelOfExercise
                    ? ' border-red-500'
                    : 'border-gray-200  focus:border-gray-500   '
                }`}
                {...register('levelOfExercise', {
                  required: 'Level of exercise is required',
                })}
              >
                <option className="placeholder " selected disabled value="">
                  Choose ...
                </option>
                1- Light exercise 1-3 times a week
                <option value="Light exercise 1-3 times a week">
                  Light exercise 3 times a week
                </option>
                <option value="Moderate exercise 4-5 times a week">
                  Moderate exercise 5 times a week
                </option>
                <option value="Active  daily exercise">
                  Active daily exercise
                </option>
                <option value="Very active intense exercise 6 times a week">
                  Very active intense exercise 7 times a week
                </option>
                <option value="Extra active intense daily exercise">
                  Extra active intense daily exercise
                </option>
              </select>
              {errors.levelOfExercise && (
                <p className="text-red-500 text-xs italic">
                  {errors.levelOfExercise.message}
                </p>
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 my-5 text-center  mb-2 py-3">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Age
            </label>
            <input
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] ${
                errors.age
                  ? ' border-red-500'
                  : 'border-gray-200  focus:border-gray-500   '
              }`}
              type="text"
              placeholder="- -"
              {...register('age', {
                required: 'Age is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Please enter a valid age',
                },
              })}
            />
            {errors.age && (
              <p className="text-red-500 text-xs italic text-left">
                {errors.age.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Weight
            </label>
            <input
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] ${
                errors.weight
                  ? ' border-red-500'
                  : 'border-gray-200  focus:border-gray-500   '
              }`}
              type="text"
              placeholder="In lbs"
              {...register('weight', {
                required: 'Weight is required',
              })}
            />
            {errors.weight && (
              <p className="text-red-500 text-xs italic text-left">
                {errors.weight.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3  ">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              height
            </label>
            <input
              {...register('height', {
                required: 'Height is required',
              })}
              className={`appearance-none block w-full focus:outline-none bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-[#eaeaea] ${
                errors.height
                  ? ' border-red-500'
                  : 'border-gray-200  focus:border-gray-500   '
              }`}
              type="text"
              placeholder="Feet, inches"
            />
            {errors.height && (
              <p className="text-red-500 text-xs italic text-left">
                {errors.height.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex  flex-row -mx-3 py-3  ">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <fieldset>
              <labe
                className={`block uppercase  text-gray-800 text-xs font-bold mb-2 tracking-widest ${
                  errors.targeted_muscles ? 'text-red-500' : 'text-gray-800'
                } `}
              >
                Targeted muscles
              </labe>

              <div className="w-full overflow-y-auto  h-[100px]  ">
                {muscles.map((d, i) => (
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      value={d}
                      name="sameName"
                      {...register('targeted_muscles', { required: true })}
                      className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      className="ms-2 text-sm font-medium text-gray-600 "
                      key={d}
                    >
                      {d}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="w-full md:w-1/2 px-3 ">
            <fieldset>
              <label
                className={`block uppercase  text-gray-800 text-xs font-bold mb-2 tracking-widest ${
                  errors.workoutDays ? 'text-red-500' : 'text-gray-800'
                } `}
              >
                Workout days
              </label>
              <div className="w-full overflow-y-auto  h-[100px]  ">
                {days.map((c, i) => (
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      value={c}
                      name="days"
                      {...register('workoutDays', {
                        required: 'Height is required',
                      })}
                      className="w-4 h-4 ml-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <label
                      className="ms-2 text-sm font-medium text-gray-600 "
                      key={c}
                    >
                      {c}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="inline-flex w-full items-center justify-center px-5 py-3 text-base font-medium text-center bg-[#7b73f2]  hover:bg-[#877ff8] text-white border-b-4 border-[#6a60ec] hover:border-[#5b50f1] rounded  cursor-pointer"
        />
      </form>
      <div className=" w-full h-full flex flex-col   justify-center relative ">
        {show && (
          <div
            className={`absolute w-[350px] h-[300px] rounded-md shadow-lg   p-4 text-center bg-white  sm:p-5 left-0 right-0 ml-auto mr-auto `}
          >
            <div className="w-full h-full relative flex items-center justify-center  flex-col">
              <button
                onClick={() => setShow(!show)}
                type="button"
                class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="successModal"
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
              <div
                className={`w-12 h-12 rounded-full  ${
                  Done ? ' bg-green-900' : 'bg-[#7b73f2]'
                }  p-2 flex  mx-auto  mb-10 `}
              >
                <svg
                  class={`w-8 h-8 ${
                    Done ? 'text-green-500 ' : ' text-[#aca7eb]  '
                  } `}
                  fill="currentColor"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 301.691 301.691"
                  xml:space="preserve"
                >
                  <g>
                    <polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0 	" />
                    <rect
                      x="130.563"
                      y="261.168"
                      width="40.525"
                      height="40.523"
                    />
                  </g>
                </svg>
              </div>
              {Done ? (
                <>
                  <p className="text-lg font-semibold  text-green-600 font-mono  mb-10 mt-5 ">
                    Success, User Added!{' '}
                  </p>

                  <Link
                    to="/makePlan"
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-center text-white bg-green-600  rounded hover:bg-green-700  focus:outline-none  flex cursor-pointer"
                  >
                    Continue
                  </Link>
                </>
              ) : (
                <>
                  <p className="text-lg font-semibold  text-[#000000] font-mono  mb-10 mt-5 ">
                    User was already created!
                  </p>

                  <Link
                    to="/makePlan"
                    type="button"
                    className="py-2 px-3 text-sm font-medium text-center bg-[#7b73f2] text-white rounded hover:bg-[#645aeb]  focus:outline-none  flex cursor-pointer"
                  >
                    Continue
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
        <div className=" object-contain  flex justify-center  order-1  my-[50px]  ">
          <img src={img2} alt="mockup" className="w-[80%]" />
        </div>

        <div className=" p-10 ml-[50px] text-left w-full  font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent   bg-gray-600 order-1">
          Elevate your fitness with{'    '} GymGrids{' '}
          <span className="text-[#7b73f2] inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block  animate-text-slide-4 text-left leading-tight [&_li]:block">
              <li>precision workouts</li>
              <li>personalized nutrition</li>
              <li>progress tracking</li>
              <li>motivational notifications</li>
              <li aria-hidden="true">precision workouts</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forms2;
