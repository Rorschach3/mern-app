import React from 'react';
import ReactDOM from 'react-dom';

import './output.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);
