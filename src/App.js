import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/StudentPortal/Login/Login';
import LeaderBoard from './components/StudentPortal/LeaderBoard/LeaderBoard';
import Quiz from './components/StudentPortal/Quiz/Quiz';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home' element={<Home />} />

        //StudentPortal
        <Route exact path='/StudentPortal/login' element={<Login />} />
        <Route exact path='/StudentPortal/leaderboard' element={<LeaderBoard />} />
        <Route exact path='/StudentPortal/quiz' element={<Quiz />} />


      </Routes>

    </BrowserRouter>

  );
}

export default App;
