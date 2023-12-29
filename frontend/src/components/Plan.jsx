import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

const Plan = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');

  const onSubmit = async () => {
    let reqName = name;
    axios.get(`http://localhost:3002/users/${reqName}`).then((response) => {
      console.log(name);
      setData(response.data);
      console.log(data);
      console.log(response.data);

      setName('');
    });
  };

  return (
    <div className=" flex bg-slate-500 w-full  justify-center items-center h-screen ">
      <div className="max-w-[500px]">
        <h1 className="  text-2xl  ">Generate plan </h1>
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          className=" my-5 block w-full py-3 px-2 rounded-md"
          placeholder="Enter your name"
        />
        <button
          className="my-5 block w-full py-3 px-2 bg-purple-500 rounded-md hover:bg-purple-400 cursor-pointer"
          onClick={onSubmit}
        >
          run
        </button>
        {/* {data && (
          <p className="   flex-nowrap  overflow-y-auto">
            {JSON.stringify(data)}
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Plan;
