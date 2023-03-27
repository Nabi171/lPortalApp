import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/StudentPortal/Login/Login';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/StudentPortal/login' element={<Login />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
