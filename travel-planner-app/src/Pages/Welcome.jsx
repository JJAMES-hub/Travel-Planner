import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to Guardian</h1>
      <p className="mb-8 text-gray-700 text-lg">
        Plan your next trip effortlessly with real-time weather and destination insights.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Explore
        </Link>
        <Link
          to="/trips"
          className="bg-gray-200 text-blue-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Destinations
        </Link>
      </div>
    </div>
  );
}
