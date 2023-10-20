import './App.css';
import React from 'react'
import Projects from './components/Projects';
import { Routes, Route } from 'react-router-dom'
import './server/server.js'
import Header from './components/Header';
import Notes from './components/notes_apps/Notes';
import LoginBasic from './components/form_things/LoginBasic'
import SignUpBasic from './components/form_things/SignUpBasic'


function App() {

  return (
    <div className="App">
      <Header/>
      <div  className='context'>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/login' element={<LoginBasic />} />
        <Route path='/signup' element={<SignUpBasic />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
