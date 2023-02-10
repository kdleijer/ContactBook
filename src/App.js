import React from 'react';
import './bootstrap.min.css';
import './App.css';

import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';

import {Routes, Route,Link} from 'react-router-dom';

function App(){
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">YourBrand</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<List/>} exact />
        <Route path="/add" element={<Add/>} />
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
