import React, { useState } from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import { Modal } from 'react-bootstrap';

function About() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function check(){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
            </svg>
        )
    }
    function uncheck(){
        return (
            <input className='form-check-input' type='checkbox' disabled style={{position: 'relative', top: -0.5, marginRight: 3}}/>
        )
    }

    return (
        <div style={{height: 950, overflowY: "hidden"}}>
            <Navbar/>
            <h2 className="bounce_header" style={{marginLeft: '8%', marginTop: '-3%'}}>ContactBook</h2>
            <div className='line1'/>
            <p className='about-content1' style={{maxWidth: '45%', marginLeft: 20, marginTop: 10, fontSize: 20}}>
                This website helps to storage contacts data and share it with others (in future). For now is
                under construction, so it is full of bugs and missing many functionalities. The project was created for educational
                purposes and to demonstrate my coding skills to my future recruiters.<br/><b>I highly encourage you to contributions!</b>
            </p>
            <p className='about-content2' style={{maxWidth: '45%', marginLeft: 20, marginTop: 10, fontSize: 20}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <div className='linev' style={{width: 1, height: 820, background: 'black', marginLeft: 'auto', marginRight: 'auto', position: 'absolute', left: 960, top: 100}}/>


            <h3 className='about-header' style={{position: 'relative', top: -680, marginLeft: '60%'}}>Solved problems</h3>
            <div className='line2' style={{position: 'relative', top: -680, left: 1025, height: 1, width: '46%', background: 'black'}}/>
            <p className='about-content3' style={{position: 'relative', top: -680, right: -20, maxWidth: '45%', marginLeft: 'auto', marginRight: 20, marginTop: 10, fontSize: 20}}>
                {check()} Full functionality of restrict routes in App.js with authentication from django API endpoint! <br/>
                {check()} Implemented user login/registration from my own template project: <a href="https://github.com/SzymCode/RegistrationDjango">RegistrationDjango</a> <br/>
                {check()} Contact groups! <br/>
                {check()} Render multiple tables with contact group specific data! <br/>
                {check()} Download data to JSON and PDF file <br/>
                {check()} Edit all contacts in table with editable header above table <br/>
                {check()} Fetch data with REST API! <br/>
                {check()} Search contacts by selected value! <br/>
                {check()} Specific tables headers <br/>
                {check()} Scrollable tables with max height <br/>
                {check()} Refactored code for better maintainability <br/>
                {check()} Loading screen <br/>
            </p>

            <h3 className='about-header1' style={{position: 'relative', top: -660, marginLeft: '60%'}}>TODO</h3>
            <div className='line3' style={{position: 'relative', top: -660, left: 1025, height: 1, width: '46%', background: 'black'}}/>
            <p className='about-content4' style={{position: 'relative', top: -660, right: -44, maxWidth: '45%', marginLeft: 'auto', marginRight: 20, marginTop: 10, fontSize: 20}}>
                {uncheck()} Dragging, resizing, deleting columns and create custom ones <br/>
                {uncheck()} Static position of tables <br/>
                {uncheck()} Display contacts by selected order <br/>
                {uncheck()} Settings page <br/>
                {uncheck()} User specific data + share data with other users <br/>
                {uncheck()} Better UI design + theme selection <br/>
                {uncheck()} Combine logging/registration with home page <br/>
                {uncheck()} Resizing website + mobile version <br/>
            </p>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>LICENSE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p style={{fontSize: 12}}>
                        BSD 3-Clause License
                        Copyright (c) 2023, SzymCode

                        Redistribution and use in source and binary forms, with or without
                        modification, are permitted provided that the following conditions are met:

                        <br/>&nbsp;1. Redistributions of source code must retain the above copyright notice, this
                        list of conditions and the following disclaimer.

                        <br/>&nbsp;2. Redistributions in binary form must reproduce the above copyright notice,
                        this list of conditions and the following disclaimer in the documentation
                        and/or other materials provided with the distribution.

                        <br/>&nbsp;3. Neither the name of the copyright holder nor the names of its
                        contributors may be used to endorse or promote products derived from
                        this software without specific prior written permission.

                        <br/><br/>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
                        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
                        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
                        DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
                        FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
                        DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
                        SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
                        CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
                        OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                        OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-dark' onClick={handleClose}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
            <div className='tech-stack'>
                <h3 style={{position: "relative", top: -740, left: 30, fontSize: 50}}>Tech Stack:</h3>
                <p style={{position: "relative", top: -745, left: 20}}>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70"/> </a>
                    <a href="https://www.python.org"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="70" height="70"/> </a>
                    <a href="https://reactjs.org/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70"/> </a>
                    <a href="https://www.djangoproject.com/"> <img src="https://cdn.worldvectorlogo.com/logos/django.svg" alt="django" width="70" height="70"/> </a>
                    <a href="https://www.w3.org/html/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70"/> </a>
                    <a href="https://www.w3schools.com/css/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70"/> </a>
                    <a href="https://getbootstrap.com"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="70" height="70"/> </a>
                    <a href="https://www.sqlite.org/"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="70" height="70"/> </a>
                    <a href="https://nodejs.org"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="70" height="70"/> </a>
                    <a href="https://git-scm.com/"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70"/> </a>
                </p>
            </div>
            <button className='btn btn-outline-dark' style={{position: 'relative', top: -800, left: 1760, width: 65}} onClick={handleShow}>
                LICENSE
            </button>
            <Link to='/settings'>
                <button className='btn btn-outline-dark' style={{position: 'relative', top: -800, left: 1770, width: 65}}>
                    Settings
                </button>
            </Link>
        </div>
    );
}

export default About;