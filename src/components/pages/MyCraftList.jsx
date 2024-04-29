import { AuthContext } from "../../providers/AuthProviders";
// import MyCraftListCard from "./MyCraftListCard";
import { useContext, useEffect, useState } from "react";
import MyCraftListCard from "./MyCraftListCard";

const MyCraftList = () => {
  const [myCrafts, setMyCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.reloadUserInfo.email;

  useEffect(() => {
    fetch(`https://drawing-den-server.vercel.app/crafts-email/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyCrafts(data);
      });
  }, [email]);

  return (
    <div className="max-w-7xl mx-auto my-16">
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
