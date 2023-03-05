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
    const handleLogout = () => {
        window.location.href = 'http://localhost:8000/accounts/logout';
    };

    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavItem path="/list" selected={selected} onClick={onClick}>My lists</NavItem>
                <NavItem path="/settings" selected={selected} onClick={onClick}>Settings</NavItem>
            </ul>
            <ul className="navbar-nav ml-auto">
                <NavItem selected={selected} onClick={handleLogout}>Logout</NavItem>
            </ul>
        </div>
    );
}

export default Navbar;