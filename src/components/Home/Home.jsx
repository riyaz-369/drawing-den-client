import Banner from "./Banner";
import CategorySection from "./CategorySection";
import CraftItems from "./CraftItems";
import FAQ from "./FAQ";
import PopularSection from "./PopularSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DrawingDen | Home</title>
      </Helmet>
      <Banner />
      <div className="max-w-7xl mx-auto my-24 p-2 lg:p-0">
        <CraftItems />
        <CategorySection />
        <div className="my-16 md:mt-24">
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
