import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import PasswordContextProvider from './store/PasswordContextProvider';
import './index.css';

ReactDOM.render(
  <PasswordContextProvider>
    <App />
  </PasswordContextProvider>,
  document.getElementById('root'),
);
