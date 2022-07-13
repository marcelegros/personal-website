

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/main.css';

import Header from './components/Header'
import Home from './components/Pages/Home'
import PortfolioPage from './components/Pages/PortfolioPage';
import ProjectPage from './components/Pages/ProjectPage';
import ResumePage from './components/Pages/Resume';

function App() {
  return (
    <div className="App">

      <Router>

      {/* Header */}
      <Header />
      {/* <div style={{height: '60px'}} /> */}

      <Routes>

        {/* Home */}
        <Route path='/' 
          element={<Home />}
        />

        {/* Portfolio Page */}
        <Route path='/portfolio/:groupId'
          element={<PortfolioPage />}
        />

        {/* Project Page */}
        <Route path='/project/:projectId'
          element={<ProjectPage />}
        />

        <Route path="/resume"
          element={<ResumePage/>}
        />



      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
