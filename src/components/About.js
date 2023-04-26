import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import RenderCheck from "./Check";
import RenderUnCheck from "./UnCheck";
import LicenseRender from "./License";
import TechStackRender from "./TechStackLogo";

export function Button (props) {
    return (
        <button onClick={props.onClick} className={`btn btn-outline-dark ${props.className}`} style={{ width: 65 }}>
            {props.text}
        </button>
    )
}

function AboutContent() {
    return (
        <div>
            <h2 className="bounce_header" style={{ marginLeft: '8%', marginTop: '-3%' }}>
                ContactBook
            </h2>
            <div className='line1'/>
            <p className='about-content1'>
                This website helps to storage contacts data and share it with others (in future). For now is under construction, so it is full of bugs and missing many functionalities. The project was created for educational purposes and to demonstrate my coding skills to my future recruiters.
                <br/><b>I highly encourage you to contributions!</b>
            </p>
            <p className='about-content2'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
            <div className='linev'/>
            <RenderCheck/>
            <RenderUnCheck/>
        </div>
    )
}


function About() {
    return (
        <div style={{ height: 950, overflowY: "hidden" }}>
            <Navbar/>
            { AboutContent() }
            <LicenseRender/>
            <TechStackRender/>
            <Link to='/settings'>
                <Button className="settings-button"  text="Settings" style={{background: "red"}}/>
            </Link>
        </div>
    );
}

export default About;