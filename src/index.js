import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { MainContainer } from './Compenents/MainContainer';
import { Header } from './Compenents/Header';
import { Alert } from './Compenents/Alert';

ReactDOM.render(
  <React.StrictMode>
    <Alert/>

    <Header />

    <MainContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
