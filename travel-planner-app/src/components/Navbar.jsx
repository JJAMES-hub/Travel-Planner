import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">Guardian</div>
        <ul className="nav-links">
          <li className={loc.pathname === "/home" ? "active" : ""}>
            <Link to="/home">Home</Link>
          </li>
          <li className={loc.pathname === "/trips" ? "active" : ""}>
            <Link to="/trips">Explore</Link>
          </li>
          <li className={loc.pathname === "/" ? "active" : ""}>
            <Link to="/">Welcome</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
