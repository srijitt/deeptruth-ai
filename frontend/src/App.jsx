import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ImageDetector from './pages/ImageDetector';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>} />
          <Route exact path="/image" element={<ImageDetector/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
