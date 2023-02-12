import React from 'react';
import './bootstrap.min.css';
import './App.css';

import List from './components/List';
import {Routes, Route,Link} from 'react-router-dom';

function App(){
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<List/>} exact />
      </Routes>
    </div>
  );
}

export default App;
