import { useState } from "react";
import { getCityCoordinates, getNearbyPlaces } from "../services/opentripmap";
import { getWeather } from "../services/weather";
import DestinationCard from "../components/DestinationCard";

export default function Trips() {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(e) {
    e?.preventDefault();
    setError("");
    if (!query) return setError("Please enter a city name.");
    setLoading(true);
    setPlaces([]);
    setWeather(null);

    try {
      // 1) get city coordinates
      const geo = await getCityCoordinates(query);
      // Some endpoints return object with lat/lon or lat & lon, handle both:
      const lat = geo.lat ?? geo.latitude ?? geo.x;
      const lon = geo.lon ?? geo.longitude ?? geo.y;

      // 2) get nearby places
      const nearby = await getNearbyPlaces(lat, lon, 1000, 8);
      setPlaces(nearby || []);

      // 3) get weather (best effort)
      const w = await getWeather(query);
      setWeather(w);
    } catch (err) {
      console.error(err);
      setError("Failed to load data. Check the city name or your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="page page-trips">
      <section className="search-section">
        <h2>Explore places nearby</h2>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a city name (e.g. Nairobi)"
            className="input"
          />
          <button className="btn btn-primary" type="submit">
            {loading ? "Searching..." : "Explore"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {weather && (
          <div className="weather-inline">
            <div>
              <strong>{weather.name}</strong> — {Math.round(weather.main.temp)}°C • {weather.weather[0].description}
            </div>
          </div>
        )}
      </section>

      <section className="places-grid">
        {loading ? (
          <div className="loader">Loading places...</div>
        ) : places.length === 0 ? (
          <div className="empty">No places yet. Search a city to see nearby POIs.</div>
        ) : (
          places.map((p) => (
            <div key={p.xid || p.wikidata} className="place-card">
              <h3 className="place-title">{p.name || "Unnamed place"}</h3>
              <p className="place-kind">{p.kinds}</p>
              <a className="place-link" href={`https://opentripmap.com/en/card/${p.xid}`} target="_blank" rel="noreferrer">View details →</a>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
