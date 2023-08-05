import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route pat="/"/>
        <Route pat="/login"/>
        <Route pat="/register"/>
      </Routes>
    </Router>
  );
}

export default App;
