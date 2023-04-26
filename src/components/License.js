import React, {useState} from "react";
import {Modal} from "react-bootstrap";
import {Button} from "./About";

function LicenseRender() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="license-button" text="LICENSE" onClick={ handleShow } />
            <Modal show={ show } onHide={ handleClose }>
                    <Modal.Header>
                        <Modal.Title>
                            LICENSE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="license">
                            <b>BSD 3-Clause License</b> <br/>Copyright (c) 2023, SzymCode Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:<br/>&nbsp;1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.<br/>&nbsp;2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.<br/>&nbsp;3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.<br/><br/>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button text="Close" onClick={ handleClose } />
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default LicenseRender