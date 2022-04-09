

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/main.css';

import Header from './components/Header'
import Home from './components/Pages/Home'
import BioPage from './components/Pages/Bio';
import ResearchPage from './components/Pages/Research';
import WebsitesPage from './components/Pages/Websites';
import ProjectsPage from './components/Pages/Projects';
import WritingPage from './components/Pages/Writing';
import PortfolioPage from './components/Pages/PortfolioPage';
import ProjectPage from './components/Pages/ProjectPage';

function App() {
  return (
    <div className="App">

      <Router>

      {/* Header */}
      <Header />
      {/* <div style={{height: '60px'}} /> */}

      <Switch>

        {/* Home */}
        <Route exact path='/' 
          render={({...props}) => <Home />}
        />

        {/* Portfolio Page */}
        <Route exact path='/portfolio/:groupId'
          render={({...props}) => <PortfolioPage {...props} />}
        />

        {/* Project Page */}
        <Route exact path='/project/:projectId'
          render={({...props}) => <ProjectPage {...props} />}
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
