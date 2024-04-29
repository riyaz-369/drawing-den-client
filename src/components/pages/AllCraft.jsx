import { useLoaderData } from "react-router-dom";
import AllCraftTable from "./AllCraftTable";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 md:my-16 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Name</th>
              <th>Subcategory Name</th>
              <th>Processing Time</th>
              <th>Rating (of 5)</th>
            </tr>
          </thead>
          <tbody>
            {allCraft.map((craft, idx) => (
              <AllCraftTable key={craft._id} craft={craft} idx={idx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
