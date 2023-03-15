import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={"messages"}>
                    <h1>ContactBook</h1>
                    <h6 style={{position: 'relative', top: 202, left: -20}}>by SzymCode</h6>
                </div>
                <div className={"messages"}>
                    <h2 style={{ marginLeft: 12 +'%', fontSize: 100}}>Keep in touch with your&nbsp;</h2>
                    <Link to="/list" style={{ textDecoration: "none" }} className={"linkList"}>contacts</Link>
                </div>
            </div>
        );
    }
}
export default Home;