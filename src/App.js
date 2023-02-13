import React from 'react';
import './bootstrap.min.css';
import './App.css';

import List from './components/List';
import Home from './components/Home';
import {Routes, Route,} from 'react-router-dom';

function App(){
      return (
        <div className="container-fluid">
          <Routes>
            <Route path="home/" element={<Home/>} exact />
            <Route path="list/" element={<List/>} exact />
          </Routes>
        </div>
      );
}

export default App;
