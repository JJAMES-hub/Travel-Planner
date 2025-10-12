import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";

function ArrowButton() {
  return (
    <a href="#target-section">
      <button className="arrow-btn">→</button>
    </a>
  );
}

function App() {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // Example data to filter (you can replace this with destinations, hotels, etc.)
  const destinations = [
    "Nairobi",
    "Mombasa",
    "Kisumu",
    "Diani",
    "Naivasha",
    "Malindi",
  ];

  // Filtered results
  const filteredDestinations = destinations.filter((place) =>
    place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>GUARDIAN</h1>
      <p>Wander often, plan just enough to brag later.</p>

      {/* SearchBar Component */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeholder="Search destinations..."
      />

      {/* Filtered Results */}
      <div className="results">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((place, index) => (
            <p key={index}>{place}</p>
          ))
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>

      <ArrowButton />
    </div>
  );
}

export default App;
