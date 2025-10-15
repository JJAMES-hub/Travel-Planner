const apiKey = "5ae2e3f221c38a28845f05b60830de6684c1d2275dc8ce341327df35";

export async function apiGet(method, query) {
  const baseUrl = `https://api.opentripmap.com/0.1/en/places/${method}?apikey=${apiKey}${
    query ? "&" + query : ""
  }`;

  try {
    const response = await fetch(baseUrl);
    if (!response.ok) throw new Error("Failed to fetch data from OpenTripMap");
    return response.json();
  } catch (error) {
    console.error("Error fetching OpenTripMap data:", error);
    throw error;
  }
}

export async function getCityCoordinates(city) {
  const data = await apiGet("geoname", `name=${city}`);
  if (data.status === "OK") {
    return { lon: data.lon, lat: data.lat, country: data.country };
  } else {
    throw new Error("City not found");
  }
}

export async function getNearbyPlaces(lon, lat, offset = 0, limit = 5) {
  return apiGet(
    "radius",
    `radius=1000&limit=${limit}&offset=${offset}&lon=${lon}&lat=${lat}&rate=2&format=json`
  );
}
