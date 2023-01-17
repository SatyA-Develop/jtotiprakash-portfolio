import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About/About';
import Work from './Components/Work/Work';


const App = ({ title }) => {
  return (
    <div>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<About title="Jyotiprakash Sahoo" />} />
        <Route path="/work" element={<Work  title="Work | Jyotiprakash Sahoo" />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App

