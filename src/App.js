import React from 'react';
import './bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import List from './components/List';
import About from './components/About';
import Settings from './components/Settings';
import {Routes, Route,} from 'react-router-dom';

function App(){
      return (
        <div className="container-fluid">
          <Routes>
            <Route path="home/" element={<Home/>} exact />
            <Route path="list/" element={<List/>} exact />
            <Route path="about/" element={<About/>} exact />
            <Route path="settings/" element={<Settings/>} exact />
          </Routes>
        </div>
        /* TODO: RESTRICT ROUTES */
      );
}

export default App;
