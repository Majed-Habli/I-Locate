import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbarComponent/navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"/>
        <Route path="/login"/>
        <Route path="/register"/>
      </Routes>
    </Router>
  );
}

export default App;
