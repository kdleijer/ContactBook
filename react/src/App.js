import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';

import List from './components/List';
import About from './components/About';
import Settings from './components/Settings';
import { Routes, Route } from 'react-router-dom';

function Authentication() {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_PATH}/accounts/auth/`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => { setIsAuthenticated(data.authenticated); })
        fetch(`${process.env.REACT_APP_BASE_PATH}/accounts/username/`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
        })
            .then((response) => response.json())
            .then((data) => { localStorage.setItem('user', data.username); })
            .finally(() => setIsLoading(false));
    }, []);
    return { isAuthenticated, isLoading };
}

function App() {
    const { isAuthenticated, isLoading } = Authentication();

    if (isAuthenticated === false) {
        window.location.replace(`${process.env.REACT_APP_BASE_PATH}/accounts/login`);
    }

    if (isLoading) {
        return <h2 className="bounce_header" style={{ marginLeft: 38 + '%' }}>Loading...</h2>;
    }

    return isAuthenticated && (
        <div className="container-fluid">
            <Routes>
                <Route path="*"           element={ <List/>     } />
                <Route path="/list"       element={ <List/>     } />
                <Route path="/about"      element={ <About/>    } />
                <Route path="/settings"   element={ <Settings/> } />
            </Routes>
        </div>
    );
}

export default App;