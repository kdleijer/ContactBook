import { Link } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function NavItem({path, selected, onClick, children}) {
    return (
        <li className="nav-item">
            <Link className={`nav-link ${selected === path ? "active" : ""}`} to={path}
                  onClick={() => onClick(path)}>
                {children}
            </Link>
        </li>
    );
}

function Navbar() {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const handleClick = (path) => {
        setSelected(path);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavbarBrand selected={selected} onClick={handleClick} />
            <NavbarItems selected={selected} onClick={handleClick} />
        </nav>
    );
}

function NavbarBrand({selected, onClick}) {
    return (
        <Link className={`navbar-brand ${selected === "/home" ? "active" : ""}`} to="/home"
              onClick={() => onClick("/home")}>SzymCode</Link>
    );
}

function NavbarItems({selected, onClick}) {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavItem path="/list" selected={selected} onClick={onClick}>My lists</NavItem>
                <NavItem path="/settings" selected={selected} onClick={onClick}>Settings</NavItem>
                <NavItem path="/about" selected={selected} onClick={onClick}>About</NavItem>
            </ul>

            {/* TODO: fix logout from navbar | manually entered "http://127.0.0.1:8000/accounts/logout/" works */}
            <ul className="navbar-nav ml-auto">
                <p style={{color: "white", position: "absolute", top: 15, right: 80}}>TYPE IN SEARCHBOARD localhost:8000/accounts/logout BECAUSE NAVITEM LOGOUT DOESNT WORK RIGHT NOW >>></p>
                <NavItem path="http://127.0.0.1:8000/accounts/logout/" selected={selected} onClick={onClick}>Logout</NavItem>
            </ul>
            {/* TODO: fix logout from navitem | manually entered "http://127.0.0.1:8000/accounts/logout/" works*/}

        </div>
    );
}

export default Navbar;