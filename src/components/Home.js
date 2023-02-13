import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h1>ContactBook</h1>
          <h6 style={{position: 'relative', top: 155, left: -20}}>by SzymCode</h6>
        </div>
        <div style={{ display: 'flex', marginLeft: 39 + '%' }}>
          <h2>No&nbsp;</h2>
          <Link  to="/list" className={"linkList"} style={{ color:'blue', cursor: 'pointer' }}>contacts</Link>
          <h2>&nbsp;in list!</h2>
        </div>
      </div>
    );
  }
}
export default Home;