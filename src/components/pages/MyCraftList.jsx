import { Link, useLoaderData } from "react-router-dom";
import MyCraftListCard from "./MyCraftListCard";

const MyCraftList = () => {
  const myCrafts = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort:
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div>
        {myCrafts.map((myCraft) => (
          <MyCraftListCard key={myCraft._id} myCraft={myCraft} />
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
