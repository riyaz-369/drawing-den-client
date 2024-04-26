import Banner from "./Banner";
import CategorySection from "./CategorySection";
import CraftItems from "./CraftItems";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto my-24">
        <CraftItems />
        <CategorySection />
      </div>
    </div>
  );
};

export default Home;
