import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Landing from './Pages/Landing';

import ShowPlan from './components/ShowPlan';
import Plan from './components/Plan';
import Forms2 from './components/Forms2';
import Forms from './components/Forms';
import MyDocument from './components/MyDocument';

import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [post, setPost] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/addUser" element={<Forms2 />} />
        <Route path="/makePlan" element={<Plan />} />
        {/* <Route
          path="/test"
          element={
            <PDFDownloadLink
              document={<MyDocument />}
              fileName="Abdulllah-Workout.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
              }
            </PDFDownloadLink>
          }
        ></Route> */}
        <Route path="/showPlan/:User" element={<ShowPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
