import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

const Plan = () => {
  const [data, setData] = useState('');
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    let reqName = email;
    axios.get(`http://localhost:3002/users/${reqName}`).then((response) => {
      console.log(email);
      setData(response.data);
      setShow(true);
      console.log(data);
      console.log(response.data);

      setEmail('');
    });
  };

  return (
    <div className=" flex bg-gray-600-500 w-full  justify-center items-center h-screen ">
      <div className="max-w-[500px]">
        <h1 className="  text-2xl  text-center text-white ">Generate plan </h1>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="Enter your email"
        />
        <button
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
        )}
      </div>
    </div>
  );
};

export default Plan;
