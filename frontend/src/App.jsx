import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Detector from './pages/Detector';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthProvider } from './context/AuthContext';
import Profile from './pages/Profile';
import VidDetector from './pages/VidDetector';
import AudDetector from './pages/AudDetector';

function App() {

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Landing />} />3
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path="/image" element={<Detector />} />
            <Route exact path="/video" element={<VidDetector />} />
            <Route exact path="/audio" element={<AudDetector />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
