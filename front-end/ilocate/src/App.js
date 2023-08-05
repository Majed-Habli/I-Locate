// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route pat="/"/>
        <Route pat="/login"/>
        <Route pat="/register"/>
      </Routes>
    </Router>
  );
}

export default App;
