import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { SearchContextProvider } from './context/context';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
 
