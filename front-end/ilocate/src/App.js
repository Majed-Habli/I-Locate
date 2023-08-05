import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbarComponent/navbar';
import Home from './pages/home/home';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"/>
        <Route path="/register"/>
      </Routes>
    </Router>
  );
}

export default App;
