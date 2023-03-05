import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import List from './components/List';
import About from './components/About';
import Settings from './components/Settings';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:8000/accounts/auth/', {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setIsAuthenticated(data.authenticated);
            console.log(data);
        })
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (isAuthenticated === false) {
            navigate('/login'); /* TODO: redirect to absolute path localhost:8000/accounts/login instead :3000/login */
        }
    }, [isAuthenticated, navigate]);
    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return (
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
