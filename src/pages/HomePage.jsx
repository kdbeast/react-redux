import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import ResultGrid from "../components/ResultGrid";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  return (
    <div className="h-screen overflow-scroll items-center py-6 px-10 border-b border-gray-800 bg-blue-950 text-white">
      <SearchBar />

      {query == "" && (
        <p className="text-center justify-center align-center text-gray-400 py-4 text-2xl font-semibold">
          Enter a query to get started
        </p>
      )}
      {query != "" ? (
        <div className="">
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
