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
import Assignment from './components/Admin Portal/Assignment/Assignment';
import AssignmentMark from './components/Admin Portal/AssignmentMark/AssignmentMark';
import Quizzes from './components/Admin Portal/Quizzes/Quizzes';
import Videos from './components/Admin Portal/Videos/Videos';
import useAuthCheck from './hooks/useAuthCheck';
import PrivateRoute from './components/ui/PrivateRoute';
import PublicRoute from './components/ui/PublicRoute';
import AddVideo from './components/Admin Portal/Videos/AddVideo';
import VideoEdit from './components/Admin Portal/Videos/VideoEdit';
import Addassignment from './components/Admin Portal/Assignment/Addassignment';
import EditAssignment from './components/Admin Portal/Assignment/EditAssignment';
import AddQuizze from './components/Admin Portal/Quizzes/AddQuizze';

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/home' element={<Home />} />

          //StudentPortal
          <Route exact path='/StudentPortal/login' element={
            // <PublicRoute>
            <Login />
            // </PublicRoute>

          } />

          <Route exact path='/StudentPortal/Course Player' element={
            <PrivateRoute>
              <CoursePlayer />
            </PrivateRoute>

          } />


          <Route exact path='/StudentPortal/StudentReistration' element={<Resigtration />} />

          <Route exact path='/StudentPortal/leaderboard' element={<LeaderBoard />} />
          <Route exact path='/StudentPortal/quiz' element={<Quiz />} />

          //adminPortal
          <Route exact path='/Dashboard/adminLogin' element={<AdminLogin />} />
          <Route exact path='/Dashboard/dashboard' element={
            <PrivateRoute>
              <DassBoard />
            </PrivateRoute>

          } />

          //handle Assignments route
          <Route exact path='/Dashboard/assignment' element={<Assignment />} />
          <Route exact path='/Dashboard/assignment/addAssignment' element={<Addassignment />} />
          <Route exact path='/Dashboard/assignment/editAssignment/:assignmentId' element={<EditAssignment />} />


          <Route exact path='/Dashboard/assignmentMark' element={<AssignmentMark />} />

          //handle quizzes route
          <Route exact path='/Dashboard/quizzes' element={<Quizzes />} />
          <Route exact path='/Dashboard/quizzes/addQuizze' element={<AddQuizze />} />

          //handle videos route
          <Route exact path='/Dashboard/videos' element={<Videos />} />
          <Route exact path='/Dashboard/videos/addvideo' element={<AddVideo />} />
          <Route exact path='/Dashboard/videos/videoEdit/:videoId' element={<VideoEdit />} />

        </Routes>

      </BrowserRouter>

    );
}

export default App;
