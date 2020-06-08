

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header'
import Home from './components/Pages/Home'
import BioPage from './components/Pages/Bio';
import ResearchPage from './components/Pages/Research';
import WebsitesPage from './components/Pages/Websites';
import ProjectsPage from './components/Pages/Projects';
import WritingPage from './components/Pages/Writing';

function App() {
  return (
    <div className="App">

      <Router>

      {/* Header */}
      <Header />
      <div style={{height: '60px'}} />

      <Switch>

        {/* Home */}
        <Route exact path='/' 
          render={({...props}) => <Home />}
        />

        {/* Bio */}
        <Route exact path='/Bio'
          render={({...props}) => <BioPage />}
        />        

        {/* Research */}
        <Route exact path='/Research'
          render={({...props}) => <ResearchPage />}
        />    

        {/* Websites */}
        <Route exact path='/Websites'
          render={({...props}) => <WebsitesPage />}
        />    

        {/* Projects */}
        <Route exact path='/Projects'
          render={({...props}) => <ProjectsPage />}
        />    

        {/* Writing */}
        <Route exact path='/Writing'
          render={({...props}) => <WritingPage />}
        />  

      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
