import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="red accent-3">
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/home" className="brand-logo left">
            Blog
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "pink accent-2" : "";
                }}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? "pink accent-2" : "";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "pink accent-2" : "";
                }}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
