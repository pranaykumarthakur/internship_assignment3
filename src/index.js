import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // CRITICAL: This loads your Tailwind CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);