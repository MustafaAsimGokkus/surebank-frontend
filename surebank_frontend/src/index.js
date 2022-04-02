import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {toast} from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

toast.configure({
  autoClose:8000,
  draggable:false
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

