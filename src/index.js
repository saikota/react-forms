import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
// import App from './App';
import RouterApp from './RouterApp';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
