import './App.css';
import React from 'react'
import Projects from './pages/Projects/Projects';
import { Routes, Route } from 'react-router-dom'
import './server/server.js'
import Notes from './pages/notes_apps/Notes';
import LoginBasic from './pages/form_things/LoginBasic'
import SignUpBasic from './pages/form_things/SignUpBasic'
import FormikSignUp from './pages/formik/FormikSignUp';
import Home from './pages/Home/Home';
import Layout from './pages/Layout';
import Weather from './pages/weather/Weather';



function App() {

  return (
    <div className="App">
      <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='weather' element={<Weather />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/login' element={<LoginBasic />} />
        <Route path='/signup' element={<SignUpBasic />} />
        <Route path='/formik_login' element={<FormikSignUp />} />
        </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
