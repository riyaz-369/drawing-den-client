import { useLoaderData } from "react-router-dom";
import MyCraftListCard from "./MyCraftListCard";
import { useState } from "react";

const MyCraftList = () => {
  const myLoadedCrafts = useLoaderData();
  const [myCrafts, setMyCrafts] = useState(myLoadedCrafts);

  return (
    <div className="max-w-7xl mx-auto my-24">
      {/* <div className="dropdown dropdown-hover">
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
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myLoadedCrafts.map((myCraft) => (
          <MyCraftListCard
            key={myCraft._id}
            myCraft={myCraft}
            myCrafts={myCrafts}
            setMyCrafts={setMyCrafts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
