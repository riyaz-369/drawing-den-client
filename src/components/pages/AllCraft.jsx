import { useLoaderData } from "react-router-dom";
import AllCraftTable from "./AllCraftTable";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto my-12 lg:my-16 overflow-x-auto lg:p-12">
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
            {allCraft.map((craft) => (
              <AllCraftTable key={craft._id} craft={craft} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCraft;
