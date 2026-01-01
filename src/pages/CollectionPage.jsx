import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  return (
    <div className="h-screen px-10 py-6 bg-blue-950">
      <div className="flex justify-start w-full flex-wrap gap-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
