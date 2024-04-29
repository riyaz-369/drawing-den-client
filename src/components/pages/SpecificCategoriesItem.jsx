import { useLoaderData } from "react-router-dom";
import SpecificCategoryItemsCard from "./SpecificCategoryItemsCard";

const SpecificCategoriesItem = () => {
  const categoryItems = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryItems.map((categoryItem) => (
          <SpecificCategoryItemsCard
            key={categoryItem._id}
            categoryItem={categoryItem}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecificCategoriesItem;
