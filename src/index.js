import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render(
  <React.StrictMode>
    <HttpsRedirect>
      <Router>
        <App />
      </Router>
    </HttpsRedirect>
  </React.StrictMode>,
  document.getElementById('root')
);
