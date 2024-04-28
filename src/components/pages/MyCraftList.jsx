import { AuthContext } from "../../providers/AuthProviders";
// import MyCraftListCard from "./MyCraftListCard";
import { useContext, useEffect, useState } from "react";
import MyCraftListCard from "./MyCraftListCard";

const MyCraftList = () => {
  const [myCrafts, setMyCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.reloadUserInfo.email;

  useEffect(() => {
    fetch(`http://localhost:5000/crafts-email/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCrafts(data);
      });
  }, [email]);

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
        {myCrafts.map((myCraft) => (
          <MyCraftListCard
            key={myCraft._id}
            myCraft={myCraft}
            setMyCrafts={setMyCrafts}
            myCrafts={myCrafts}
          />
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
