import Banner from "./Banner";
import CategorySection from "./CategorySection";
import CraftItems from "./CraftItems";
import FAQ from "./FAQ";
import PopularSection from "./PopularSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-7xl mx-auto my-24">
        <CraftItems />
        <CategorySection />
        <div className="my-16">
          <PopularSection />
        </div>
        <div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default Home;
