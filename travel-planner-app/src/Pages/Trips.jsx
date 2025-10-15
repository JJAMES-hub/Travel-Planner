import { useState } from "react";
import { getCityCoordinates, getNearbyPlaces } from "../api/opentripmap";
import { getWeather } from "../api/weather";

export default function Trips() {
  const [city, setCity] = useState("");
  const [places, setPlaces] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { lon, lat } = await getCityCoordinates(city);
      const nearbyPlaces = await getNearbyPlaces(lon, lat);
      const cityWeather = await getWeather(city);

      setPlaces(nearbyPlaces);
      setWeather(cityWeather);
    } catch (err) {
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-800">Explore Your Next Trip 🌍</h1>

      <form
        onSubmit={handleSearch}
        className="w-full max-w-md flex bg-white shadow-md rounded-2xl overflow-hidden"
      >
        <input
          type="text"
          placeholder="Enter a city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-grow p-3 text-lg outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-5 py-2 hover:bg-indigo-700 transition"
        >
          Explore
        </button>
      </form>

      {loading && <p className="mt-5 text-gray-600">Loading...</p>}
      {error && <p className="mt-5 text-red-500">{error}</p>}

      {weather && (
        <div className="mt-6 bg-white p-5 rounded-xl shadow-md w-full max-w-lg text-center">
          <h2 className="text-2xl font-semibold text-indigo-700">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-lg text-gray-700">
             {weather.main.temp}°C — {weather.weather[0].description}
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-5 mt-8 w-full max-w-5xl">
        {places.map((place) => (
          <div
            key={place.xid}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-bold text-indigo-700">{place.name || "Unnamed Place"}</h3>
            <p className="text-gray-600">{place.kinds}</p>
            <a
              href={`https://opentripmap.com/en/card/${place.xid}`}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-500 mt-2 block"
            >
              View Details →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

