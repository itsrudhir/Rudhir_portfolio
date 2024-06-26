
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import AnimatedRoutes from './component/AnimatedRoutes';

function App() {
  return (
    <div className="h-screen text-white bg-slate-800">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;