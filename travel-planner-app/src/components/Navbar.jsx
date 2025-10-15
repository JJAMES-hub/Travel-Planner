import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white px-8 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Guardian Travel</h1>
      <div className="flex gap-5">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/trips" className="hover:text-gray-200">Trips</Link>
        <Link to="/weather" className="hover:text-gray-200">Weather</Link>
      </div>
    </nav>
  );
}
