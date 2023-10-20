import './App.css';
import React from 'react'
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom'
import './server/server.js'
import ProjectsDetails from './components/ProjectsDetails';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      <Header/>
      <div  className='context'>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectsDetails />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
