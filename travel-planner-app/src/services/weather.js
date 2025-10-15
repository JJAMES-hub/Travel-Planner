const API_KEY = "98afba99161c6d405671b10450000342";

export async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch weather data");
  return response.json();
}
