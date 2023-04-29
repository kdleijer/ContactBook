import React from "react";
import {Link} from "react-router-dom";

function Check() {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
        </svg>
    )
}
function RenderCheck() {
    return (
        <>
            <h3 className='about-header'>
                Solved problems
            </h3>
            <div className='line2'/>
            <div className='about-content3'>
                <Check/> Full functionality of restrict routes in App.js with authentication from django API endpoint! <br/>
                <Check/> Implemented user login/registration from my own template project: <Link to="https://github.com/SzymCode/RegistrationDjango"> RegistrationDjango</Link>! <br/>
                <Check/> User specific data and contact groups! <br/>
                <Check/> Render multiple tables with contact group specific data! <br/>
                <Check/> Fetch data with REST API! <br/>
                <Check/> Download data to JSON and PDF file <br/>
                <Check/> Edit all contacts in table with editable header above table <br/>
                <Check/> Search contacts by selected value <br/>
                <Check/> Specific tables headers <br/>
                <Check/> Scrollable tables with max height <br/>
                <Check/> Refactored code for better maintainability <br/>
                <Check/> Loading screen <br/>
            </div>
        </>
    )
}
export default RenderCheck