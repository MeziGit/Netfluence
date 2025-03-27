import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Clarity from '@microsoft/clarity';

// Initialize Microsoft Clarity
Clarity.init("quub6qff3z");

// Add global styles for tailwind components
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 