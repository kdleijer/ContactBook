import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";

function About() {
    return (
        <>
            <Navbar/>
            <h2 style={{marginLeft: 41.5 + '%'}}>ABOUT</h2>
            <Link to="/settings">
                <button className="btn btn-outline-dark"
                       style={{ position: "absolute", bottom: 20, right: 20, background: "white", color: "black", width: 65 }}>Settings
                </button>
            </Link>
        </>
    );
}

export default About;