// Main application component that sets up the routing and layout.

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for routing
import Blue from './components/Blue'; // Importing the Blue component
import Red from './components/Red'; // Importing the Red component
import Home from './components/Home'; // Importing the Home component
import Navbar from './components/Navbar'; // Importing the Navbar component
import Footer from './components/Footer'; // Importing the Footer component

export default function App() {
  return (
    <div id="container">
      <Navbar /> {/* Navigation bar */}
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route path="/blue" element={<Blue />} /> {/* Route for Blue */}
          <Route path="/red" element={<Red />} /> {/* Route for Red */}
        </Routes>
      </div>
      <Footer /> {/* Footer with links */}
    </div>
  );
}
