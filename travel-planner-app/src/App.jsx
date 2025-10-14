import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Welcome from "./Pages/Welcome";
import Trips from "./Pages/Trips";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  );
}
