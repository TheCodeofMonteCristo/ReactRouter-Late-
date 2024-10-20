// Entry point for the application.
// This file sets up the React application and the React Router.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing
import App from './App'; // Importing the main App component
import './index.css'; // Importing global styles

// Rendering the application wrapped in BrowserRouter for routing capabilities
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
