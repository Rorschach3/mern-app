import React from 'react';
import ReactDOM from 'react-dom/client';
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Auth0ProviderWithNavigate>
          <AppRoutes />
        </Auth0ProviderWithNavigate>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error('Unable to find root element with id "root".');
}
