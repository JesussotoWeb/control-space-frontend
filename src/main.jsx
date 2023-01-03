import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/index.css';
import ControlSpace from './ControlSpace';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ControlSpace />
    </BrowserRouter>
  </React.StrictMode>
)
