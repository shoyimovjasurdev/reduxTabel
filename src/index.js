import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App.js';
import {Provider} from 'react-redux';
import "bootstrap/dist/css/bootstrap.css"
import store from './Store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>
);