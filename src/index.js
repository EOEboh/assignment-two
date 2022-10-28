import React from 'react';
import { Provider } from 'react-redux';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Account from './components/routes/Account';
import Profile from './components/routes/Profile';
import ErrorPage from './components/ErrorPage';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
      <Routes>
      <Route path="/" element={<App />}> 
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


