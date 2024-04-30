import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import { Typewriter } from "react-simple-typewriter";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://drawing-den-server.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center my-16 mt-24 space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          <Typewriter
            cursor
            cursorStyle="|"
            typeSpeed={70}
            delaySpeed={1000}
            words={["Explore Our Realm of Creativity"]}
          ></Typewriter>
        </h2>
        <p>
          Explore a spectrum of artistic expression with landscape, portrait,
          watercolor, oil, charcoal, <br /> and cartoon drawing. Dive into
          diverse techniques and unleash your creativity within our curated
          collection <br /> of captivating artworks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {categories.map((category) => (
          <CategoriesCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
