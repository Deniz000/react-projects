import './App.css';
import React from 'react'
import Projects from './pages/Projects';
import { Routes, Route } from 'react-router-dom'
import './server/server.js'
import Header from './components/Header';
import Notes from './pages/notes_apps/Notes';
import LoginBasic from './pages/form_things/LoginBasic'
import SignUpBasic from './pages/form_things/SignUpBasic'
import FormikSignUp from './pages/formik/FormikSignUp';
import Buttons from './components/Button/Button';



function App() {

  return (
    <div className="App">
      <Header/>
      <div  className='context'>
        <Buttons color={'primary'}/>
      <Routes>
        <Route path='/' element={<Projects />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/login' element={<LoginBasic />} />
        <Route path='/signup' element={<SignUpBasic />} />
        <Route path='/formik_login' element={<FormikSignUp />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
