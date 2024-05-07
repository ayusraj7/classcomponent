import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
import { BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
      <Toaster/>
      <App1 />
    </BrowserRouter>
    
);


