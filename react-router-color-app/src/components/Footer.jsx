// Footer component that contains links to all routes.

import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation

export default function Footer() {
  return (
    <div id="footer">
      <Link to="/">Home</Link> | {/* Link to Home */}
      <Link to="/blue">Blue</Link> | {/* Link to Blue page */}
      <Link to="/red">Red</Link> {/* Link to Red page */}
    </div>
  );
}
