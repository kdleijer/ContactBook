import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import List from './components/List';
import About from './components/About';
import Settings from './components/Settings';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/accounts/auth/', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            setIsAuthenticated(data.authenticated);
        })
        .catch(error => console.error(error))
        .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        if (isAuthenticated === false) {
          window.location.replace('http://localhost:8000/accounts/login');
        }
    }, [isAuthenticated]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

     return isAuthenticated && (
        <div className="container-fluid">
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default App;
