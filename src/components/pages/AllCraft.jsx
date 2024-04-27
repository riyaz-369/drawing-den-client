import { useLoaderData } from "react-router-dom";
import AllCraftCard from "./AllCraftCard";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allCraft.map((craft) => (
        <AllCraftCard key={craft._id} craft={craft} />
      ))}
    </div>
  );
};

export default AllCraft;
