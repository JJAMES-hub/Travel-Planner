import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="page welcome">
      <div className="image-box"></div>
      <div className="welcome-text">
        <h1>GUARDIAN</h1>
        <p>Wander often, plan just enough to brag later.</p>
        <Link to="/home">
          <button className="arrow-btn">→</button>
        </Link>
      </div>
    </div>
  );
}
