// Navbar component that contains links for navigation.

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation

export default function Navbar() {
  return (
    <div id="navbar">
      <Link to="/">Home</Link> {/* Link to Home */}
      <Link to="/blue">Blue</Link> {/* Link to Blue page */}
      <Link to="/red">Red</Link> {/* Link to Red page */}
    </div>
  );
}
