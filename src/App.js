import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/StudentPortal/Login/Login';
import LeaderBoard from './components/StudentPortal/LeaderBoard/LeaderBoard';
import Quiz from './components/StudentPortal/Quiz/Quiz';
import CoursePlayer from './components/StudentPortal/Course Player/CoursePlayer';
import Resigtration from './components/StudentPortal/Resigtration/Resigtration';
import DassBoard from './components/Admin Portal/Dassboard/DassBoard';
import AdminLogin from './components/Admin Portal/AdminLogin/AdminLogin';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home' element={<Home />} />

        //StudentPortal
        <Route exact path='/StudentPortal/login' element={<Login />} />
        <Route exact path='/StudentPortal/StudentReistration' element={<Resigtration />} />
        <Route exact path='/StudentPortal/Course Player' element={<CoursePlayer />} />
        <Route exact path='/StudentPortal/leaderboard' element={<LeaderBoard />} />
        <Route exact path='/StudentPortal/quiz' element={<Quiz />} />

        //adminPortal
        <Route exact path='/Dashboard/adminLogin' element={<AdminLogin />} />
        <Route exact path='/Dashboard/dashboard' element={<DassBoard />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
