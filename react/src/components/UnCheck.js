import React from "react";

function UnCheck() {
    return (
        <input className='form-check-input' type='checkbox'/>
    )
}

function RenderUnCheck() {
    return (
        <>
            <h3 className='about-header1'>
                TODO
            </h3>
            <div className='line3'/>
            <div className='about-content4'>
                <UnCheck/> Dragging, resizing, deleting columns and create custom ones <br/>
                <UnCheck/> Static position of tables <br/>
                <UnCheck/> Display contacts by selected order <br/>
                <UnCheck/> Settings page <br/>
                <UnCheck/> Share data with other users <br/>
                <UnCheck/> Better UI design + theme selection <br/>
                <UnCheck/> Combine logging/registration with home page <br/>
                <UnCheck/> Resizing website + mobile version <br/>
            </div>
        </>
    )
}

export default RenderUnCheck