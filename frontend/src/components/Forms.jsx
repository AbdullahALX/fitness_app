import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Forms = () => {
  const [open, setOpen] = useState(false);
  const muscles =
    'Biceps, Hamstring, Triceps, Latissimus Dorsi, Quadriceps, Cardiac, Calf, Trapezius, Glutes, Gastrocnemius, Pectorals, Deltoid, Erector spinae, None'.split(
      ', '
    );

  const days =
    'Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday'.split(
      ', '
    );

  const rainbow = 'red orange yellow green blue indigo violet'.split(' ');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const dataFinsl = JSON.stringify(data);
    console.log(dataFinsl);
    await axios
      .post('http://localhost:3002/api', data)
      .then((res) => console.log(res));
    // .then(e.target.reset());
  };

  return (
    <div>
      <form
        className="max-w-[500px] my-0 mx-auto pt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="Your Name"
          {...register('name', { required: true })}
        />

        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="Email"
          {...register('email', { required: true })}
        />

        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="phone"
          {...register('phone')}
        />
        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="age"
          {...register('age', { required: true })}
        />

        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="weight"
          {...register('weight', { required: true })}
        />

        <input
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="Height"
          {...register('height', { required: true })}
        />
        <select
          required
          className=" my-5 block w-full py-3 px-3 rounded-md"
          {...register('gender', { required: true })}
        >
          <option className="placeholder" selected disabled value="">
            Choose
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          required
          className=" my-5 block w-full py-3 px-3 rounded-md"
          {...register('levelOfExercise', { required: true })}
        >
          <option className="placeholder " selected disabled value="">
            Choose level Of Exercise
          </option>
          1- Light exercise 1-3 times a week
          <option value="Light exercise 1-3 times a week">
            Light exercise 3 times a week
          </option>
          <option value="Moderate exercise 4-5 times a week">
            Moderate exercise 5 times a week
          </option>
          <option value="Active  daily exercise">Active daily exercise</option>
          <option value="Very active intense exercise 6 times a week">
            Very active intense exercise 7 times a week
          </option>
          <option value="Extra active intense daily exercise">
            Extra active intense daily exercise
          </option>
        </select>

        <fieldset
          className={`mt-5 block w-full  h-[200px] py-3 px-2 bg-white  rounded-md border-4 hover:border-purple-300 cursor-pointer overflow-y-scroll `}
          onClick={() => setOpen(!open)}
        >
          <label className="my-3 block text-xl">Targeted muscles </label>
          {muscles.map((c, i) => (
            <label key={c} className="block my-2 mx-2 ">
              <input
                type="checkbox"
                value={c}
                name="sameName"
                {...register('targeted_muscles', { required: true })}
              />
              {c}
            </label>
          ))}
        </fieldset>

        <fieldset
          className={`mt-5 block w-full  h-[200px] py-3 px-2 bg-white  rounded-md border-4 hover:border-purple-300 cursor-pointer overflow-y-scroll `}
          onClick={() => setOpen(!open)}
        >
          <label className="my-3 block text-xl">Workout days </label>
          {days.map((d, i) => (
            <label key={d} className="block my-2 mx-2 ">
              <input
                type="checkbox"
                value={d}
                name="days"
                {...register('workoutDays', { required: true })}
              />
              {d}
            </label>
          ))}
        </fieldset>
        <input
          type="submit"
          className=" my-5 block w-full py-3 px-2 bg-purple-500 rounded-md hover:bg-purple-400 cursor-pointer "
        />
      </form>
    </div>
  );
};

export default Forms;
