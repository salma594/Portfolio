/*  import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import { ThemeProvider } from './Context.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
     <App/> 
    </ThemeProvider>
    
  </React.StrictMode>
); */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './Context';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
); 
