import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Checkin from './Pages/Public/Checkin/Checkin'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

