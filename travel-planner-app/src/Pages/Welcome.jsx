import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="page welcome-page">
      <div className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Guardian</h1>
          <p className="hero-sub">
            Plan your next trip effortlessly. Discover places, weather, and nearby sights.
          </p>
          <div className="cta-row">
            <Link to="/home" className="btn btn-primary">Get Started</Link>
            <Link to="/trips" className="btn btn-ghost">Explore Destinations</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <h3>Where to next?</h3>
            <p>Search, explore points of interest and check live weather.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
