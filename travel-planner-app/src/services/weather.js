const KEY = import.meta.env.VITE_WEATHER_KEY || "98afba99161c6d405671b10450000342";

export async function getWeather(city) {
  if (!city) throw new Error("City required");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${KEY}&units=metric`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather fetch failed");
  return res.json();
}
