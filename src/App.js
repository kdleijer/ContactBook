import React from 'react';
import './bootstrap.min.css';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import {Routes, Route,} from 'react-router-dom';

function App(){
      return (
        <div className="container-fluid">
          <Routes>
            <Route path="home/" element={<Home/>} exact />
            <Route path="about/" element={<About/>} exact />
            <Route path="list/" element={<List/>} exact />
          </Routes>
        </div>
        /* TODO: RESTRICT ROUTES */
      );
}

export default App;
