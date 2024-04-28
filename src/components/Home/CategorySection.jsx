import { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl">Our Category</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum vel
          nam voluptate, id blanditiis labore ipsum laborum nisi dolorum esse,
          rerum assumenda voluptatum iste voluptatibus animi et temporibus
          consectetur quaerat?
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoriesCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
