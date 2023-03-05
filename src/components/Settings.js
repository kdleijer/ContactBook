import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Settings() {
    return (
        <>
            <Navbar/>
            <Link to="/about">
                <button className={["btn", "btn-outline-dark"].join(" ")}
                       style={{ position: "absolute", bottom: 20, right: 20, background: "white", color: "black", width: 65 }}>About
                </button>
            </Link>
        </>
    );
}

export default Settings;
