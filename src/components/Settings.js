import React from "react";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import Navbar from "./Navbar";

function Settings(props) {
/* DOWNLOAD DATA */
    function downloadAsJSON () {
        const jsonData = JSON.stringify(props.data);
        const blob = new Blob([jsonData], { type: "application/json" });
        saveAs(blob, "contacts.json");
    }
/* DOWNLOAD DATA */
    return (
        <>
            <Navbar/>
            <Link to="/about">
                <button className={["btn", "btn-outline-dark"].join(" ")}
                       style={{ position: "absolute", bottom: 20, left: 1835, width: 65 }}>About
                </button>
            </Link>
            <button className={["downloads", "btn", "btn-outline-dark"].join(" ")} onClick={downloadAsJSON}
                   style={{width: 120, left: 1785}}>Download JSON
            </button>
        </>
    );
}

export default Settings;
