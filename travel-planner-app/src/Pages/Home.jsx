import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="page home">
      <h2>Find your next place to visit</h2>
      <p>Popular Destination</p>
      <div className="destination-box"></div>
      <Navbar />
    </div>
  );
}
