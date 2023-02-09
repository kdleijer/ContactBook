import React from 'react';
import logo from './logo.svg';
import './bootstrap.min.css';

import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';

import {Link, Routes, Route} from 'react-router-dom';

function App(){
  return (
    <div className="container">
      <Link to="/">List</Link>|
      <Link to="/add">Add</Link>|
      <Link to="/update/1">Update</Link>
      <Routes>
        <Route path='/' element={<List/>} exact />
        <Route path='/add' element={<Add/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
    </div>
  );
}
export default App;