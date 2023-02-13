import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div style={{display: 'flex'}}>
          <h1>ContactBook</h1>
          <h6 style={{position: 'relative', top: 202, left: -20}}>by SzymCode</h6>
        </div>
        <div style={{ display: 'flex', marginLeft: 13 + '%' }}>
          <h2>Keep in touch with your&nbsp;</h2>
          <Link  to="/list" className={"linkList"} style={{ textDecoration: 'none', color: '#03befc', cursor: 'pointer' }}>contacts</Link>
        </div>
      </div>
    );
  }
}
export default Home;