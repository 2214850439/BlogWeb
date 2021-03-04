// import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './APP';
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

