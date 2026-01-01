import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-center py-6 px-10 border-b border-gray-800 bg-blue-900 text-white">
      <h2 className="text-3xl font-semibold">Media Search</h2>
      <div className="flex gap-4">
        <Link
          className="text-white cursor-pointer transition-colors duration-200 active:scale-95 hover:bg-gray-900 px-2 py-1 rounded bg-gray-800"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-white cursor-pointer transition-colors duration-200 active:scale-95 hover:bg-gray-900 px-2 py-1 rounded bg-gray-800"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
