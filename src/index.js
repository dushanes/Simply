import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import SimplyApp from './SimplyApp';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <SimplyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
