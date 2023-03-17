import React, { useState, useEffect } from 'react';
import './bootstrap.min.css';
import './App.css';

import List from './components/List';
import About from './components/About';
import Settings from './components/Settings';
import { Routes, Route } from 'react-router-dom';

function App() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetch('http://127.0.0.1:8000/contact/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
    }, []);

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
        return <h2 style={{marginLeft: 40 + '%'}}>Loading...</h2>;
    }

    return isAuthenticated && (
        <div className="container-fluid">
            <Routes>
                <Route path="*" element={<List/>}/>
                <Route path="/list" element={<List/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/settings" element={<Settings data={data} setData={setData}/>}/>
            </Routes>
        </div>
    );
}

export default App;
