import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import Trips from "./Pages/Trips";
import About from "./Pages/About";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}
