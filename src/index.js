import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserDetails from './UserDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/user_details" element={<UserDetails />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);