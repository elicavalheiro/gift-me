import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as ConnectedRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'production') {
  makeServer({ environment: 'production' });
} else {
  makeServer({ environment: 'development' });
}

ReactDOM.render(
  <ConnectedRouter>
    <App />
  </ConnectedRouter>,
  document.getElementById('root')
);

reportWebVitals();
