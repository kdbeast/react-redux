import { useEffect } from "react";
import ResultCard from "./ResultCard";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUnsplashImages, getPexelsVideos } from "../api/mediaApi";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, results, loading, error, activeTab } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      let data = [];
      try {
        dispatch(setLoading());
        if (activeTab === "photos") {
          let res = await getUnsplashImages(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            src: item.urls.small,
            thumbnail: item.urls.small,
            title: item.alt_description,
          }));
        }
        if (activeTab === "videos") {
          let res = await getPexelsVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            title: item.user.name || "video",
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        console.log(error);
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [activeTab, query, dispatch]);

  if (loading) {
    return <div className="flex justify-center items-center h-full w-full">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-full w-full">Error: {error}</div>;
  }

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
