import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HttpsRedirect from 'react-https-redirect';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HttpsRedirect>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </HttpsRedirect>,
  document.getElementById('root')
);
