import React from 'react';
import './App.css';
// import { Navbar } from 'react-bootstrap';
import Navbar from "./component/Navbar"
import {  Route, Routes } from 'react-router-dom';
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Page404 from "./component/Page404"
import Protacted from "./component/Protacted"
import Todos from './component/Todos';

function App() {
  

  return (
    <div className="App">
    
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/todos' element={<Protacted Cmd = {Todos}/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
     
      
    </div>
  );
}

export default App;
