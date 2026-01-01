import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = [
    { label: "Photos", value: "photos" },
    { label: "Videos", value: "videos" },
  ];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          className={
            activeTab === tab.value
              ? "p-2 px-4 py-2 mt-2 mb-2 mr-2 ml-2 text-sm font-semibold text-gray-200 border border-gray-800 hover:border-gray-600 hover:text-gray-100 hover:bg-emerald-600 bg-emerald-500 rounded-lg transition-colors duration-200 active:scale-95 cursor-pointer"
              : "p-2 px-4 py-2 mt-2 mb-2 mr-2 ml-2 text-sm font-semibold text-gray-200 border border-gray-800 hover:border-gray-600 hover:text-gray-100 hover:bg-emerald-700 bg-gray-600 rounded-lg transition-colors duration-200 active:scale-95 cursor-pointer"
          }
          key={tab.value}
          onClick={() => dispatch(setActiveTab(tab.value))}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
