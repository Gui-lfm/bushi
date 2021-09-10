import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import './assets/reset.css'
import App from './App';
import { Provider } from 'react-redux';
import store from './components/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

