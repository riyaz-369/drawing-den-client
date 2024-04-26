import Banner from "./Banner";
import CraftItems from "./CraftItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto my-24">
        <CraftItems />
      </div>
    </div>
  );
};

export default Home;
