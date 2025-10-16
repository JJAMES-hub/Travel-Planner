import { useEffect, useState } from "react";
import { getCities } from "../services/opentripmap";
import { getWeather } from "../services/weather";
import DestinationCard from "../components/DestinationCard";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [selected, setSelected] = useState("");
  const [weather, setWeather] = useState(null);
  const [loadingCities, setLoadingCities] = useState(true);
  const [loadingWeather, setLoadingWeather] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const list = await getCities();
        setCities(list);
      } catch (err) {
        console.error("Failed to load cities:", err);
      } finally {
        setLoadingCities(false);
      }
    }
    load();
  }, []);

  async function handleShowWeather() {
    if (!selected) return;
    setLoadingWeather(true);
    try {
      const w = await getWeather(selected);
      setWeather(w);
    } catch (err) {
      console.error(err);
      setWeather(null);
      alert("Weather not found for that city.");
    } finally {
      setLoadingWeather(false);
    }
  }

  return (
    <div className="page page-home">
      <section className="section intro">
        <h2 className="section-title">Find your next place to visit</h2>
        <p className="section-sub">Popular destinations hand-picked for you</p>
      </section>

      <section className="section cards">
        {loadingCities ? (
          <div className="loader">Loading cities...</div>
        ) : (
          <div className="cards-grid">
            {cities.map((c, i) => (
              <DestinationCard
                key={i}
                title={c.name}
                subtitle={c.country}
                img={c.image}
                href={c.link}
              />
            ))}
          </div>
        )}
      </section>

      <section className="section weather">
        <div className="weather-control">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="select"
          >
            <option value="">Select a city to check weather</option>
            {cities.map((c, i) => (
              <option key={i} value={c.name}>
                {c.name}, {c.country}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" onClick={handleShowWeather}>
            {loadingWeather ? "Checking..." : "Show Weather"}
          </button>
        </div>

        {weather && (
          <div className="weather-card">
            <h3>
              {weather.name}, {weather.sys?.country}
            </h3>
            <p className="temp">{Math.round(weather.main.temp)}°C</p>
            <p className="desc">{weather.weather[0].description}</p>
          </div>
        )}
      </section>
    </div>
  );
}
