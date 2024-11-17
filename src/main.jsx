import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import for React 18
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
