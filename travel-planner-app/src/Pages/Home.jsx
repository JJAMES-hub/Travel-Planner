import { useEffect, useState } from "react";
import { getCities } from "../services/opentripmap";
import { getWeather } from "../services/Weather";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCities().then(setCities).catch(console.error);
  }, []);

  async function handleWeather() {
    if (!selectedCity) return;
    const data = await getWeather(selectedCity);
    setWeather(data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800">
      <h1 className="text-3xl font-bold mb-6"> Explore Cities</h1>

      <select
        className="p-3 rounded-md shadow-md mb-4"
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <button
        onClick={handleWeather}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Get Weather
      </button>

      {weather && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p> {weather.wind.speed} m/s</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
