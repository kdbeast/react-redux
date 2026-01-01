import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex gap-2 p-10 bg-gray-900 w-[600px] mx-auto"
      >
        <input
          required
          type="text"
          value={text}
          placeholder="Search Anything..."
          className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="p-2 border border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer active:scale-95 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
