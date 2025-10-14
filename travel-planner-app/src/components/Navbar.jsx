import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">🔍</Link>
      <Link to="/trips">📅</Link>
      <Link to="/profile">👤</Link>
    </nav>
  );
}
