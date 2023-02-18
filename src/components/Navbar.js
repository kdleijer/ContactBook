import { Link } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const [selected, setSelected] = useState(location.pathname);
    const handleClick = (path) => {
        setSelected(path);
    }

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

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className={`navbar-brand ${selected === "/home" ? "active" : ""}`} to="/home"
                  onClick={() => handleClick("/home")}>SzymCode</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavItem path="/list" selected={selected} onClick={handleClick}>My lists</NavItem>
                    <NavItem path="/about" selected={selected} onClick={handleClick}>About</NavItem>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;