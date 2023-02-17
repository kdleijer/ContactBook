import { Link } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const handleClick = (path) => {
    setSelected(path);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className={`navbar-brand ${selected === "/home" ? "active" : ""}`} to="/home"
            onClick={() => handleClick("/home")}>SzymCode</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={`nav-link ${selected === "/list" ? "active" : ""}`} to="/list"
              onClick={() => handleClick("/list")}>My lists</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${selected === "/about" ? "active" : ""}`} to="/about"
              onClick={() => handleClick("/about")}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;