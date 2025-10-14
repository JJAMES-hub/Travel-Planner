export default function Trips() {
  return (
    <div className="page trips">
      <header>
        <button className="back-btn">←</button>
        <h2>My Trips</h2>
      </header>

      <section className="planned">
        <div className="header-row">
          <h3>Planned Trips</h3>
          <a href="#">See all</a>
        </div>
        <div className="trip-box"></div>
      </section>

      <button className="new-trip">＋ New Trip</button>

      <section className="past">
        <div className="header-row">
          <h3>Past Trips</h3>
          <a href="#">See all</a>
        </div>
      </section>
    </div>
  );
}
