import { useLoaderData } from "react-router-dom";
import AllCraftTable from "./AllCraftTable";
import { Helmet } from "react-helmet";

const AllCraft = () => {
  const allCraft = useLoaderData();

  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 md:my-16 overflow-x-auto">
        <Helmet>
          <title>DrawingDen | All Art And Craft</title>
        </Helmet>
        <table className="table">
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
