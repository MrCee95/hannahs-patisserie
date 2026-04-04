import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Preload critical fonts
const link = document.createElement('link');
link.rel = 'preload';
link.as = 'font';
link.type = 'font/woff2';
link.crossOrigin = 'anonymous';
link.href = 'https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;600&family=Inter:wght@300;400;600&display=swap';
document.head.appendChild(link);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);