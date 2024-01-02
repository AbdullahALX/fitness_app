import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Forms from '../src/components/Forms';
import Plan from './components/Plan';
import ShowPlan from './components/ShowPlan';

function App() {
  const [post, setPost] = useState(null);

  return (
    <>
      <Forms />
      <Plan />
      <ShowPlan />
    </>
  );
}

export default App;
