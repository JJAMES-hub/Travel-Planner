// service for OpenTripMap
const KEY = import.meta.env.VITE_OPENTRIPMAP_KEY || "5ae2e3f221c38a28845f05b60830de6684c1d2275dc8ce341327df35";
const BASE = "https://api.opentripmap.com/0.1/en/places";

/**
 * Basic fetch helper
 */
async function apiGet(endpoint, query = "") {
  const q = query ? `&${query}` : "";
  const url = `${BASE}/${endpoint}?apikey=${KEY}${q}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OpenTripMap error (${res.status})`);
  return res.json();
}

/**
 * Search for a city coordinates by name
 * returns an object with lat, lon (API returns lat/lon)
 */
export async function getCityCoordinates(name) {
  const data = await apiGet("geoname", `name=${encodeURIComponent(name)}`);
  // data typically: {status: "OK", name: "...", lat: ..., lon: ..., country: "..."}
  if (!data || data.status !== "OK") throw new Error("City not found");
  return { lat: data.lat, lon: data.lon, country: data.country };
}

/**
 * Return nearby POIs (points of interest)
 */
export async function getNearbyPlaces(lat, lon, radius = 1000, limit = 5) {
  // endpoint "radius" expects lon & lat + limit
  const data = await apiGet("radius", `radius=${radius}&lon=${lon}&lat=${lat}&limit=${limit}&rate=2&format=json`);
  return data;
}

/**
 * Small helper list for home page (simple curated list)
 * You can change to call geoDB or RestCountries for dynamic list.
 */
export async function getCities() {
  return [
    { name: "Nairobi", country: "Kenya", image: "https://images.unsplash.com/photo-1545249390-1b396e8f35f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=be3b2b2f3a8f3f14b84be86e5f03fd6b", link: "https://en.wikipedia.org/wiki/Nairobi" },
    { name: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4899d5b0aef4e5d0d6c0b5d9f1c0f1d7", link: "https://en.wikipedia.org/wiki/Tokyo" },
    { name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=a3f3bd3b6b5f1c6b0b4d5a7e9f0f8aa7", link: "https://en.wikipedia.org/wiki/Paris" },
    { name: "London", country: "United Kingdom", image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d8ea7a6c4b5e2d9f8d1e2a5b6c7d8e9", link: "https://en.wikipedia.org/wiki/London" },
    { name: "New York", country: "USA", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c3f0e8c0f0b6a2d9b6f4e8c7c6b5a6f", link: "https://en.wikipedia.org/wiki/New_York_City" },
  ];
}

