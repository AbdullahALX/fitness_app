import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Forms from '../src/components/Forms';

function App() {
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   axios.get('http://localhost:3002/api').then((response) => {
  //     setPost(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  return (
    <>
      <Forms />
    </>
  );
}

export default App;
