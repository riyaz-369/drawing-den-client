import { Helmet } from "react-helmet";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const CategoryViewDetails = () => {
  const categoryDetails = useLoaderData();

  const { image, itemName, details, subCategory, processTime, rating, price } =
    categoryDetails;

  return (
    <div className="max-w-7xl mx-auto my-4 md:my-8 lg:my-16">
      <Helmet>
        <title>DrawingDen | Details/{subCategory}</title>
      </Helmet>
      <div className="card lg:card-side border rounded-md">
        <figure className="w-full lg:w-1/2">
          <img className="h-full" src={image} alt={itemName} />
        </figure>
        <div className="card-body">
          <div className="space-y-4">
            <h2 className="card-title text-xl md:text-3xl">{itemName}</h2>
            <p className="text-sm md:text-base">{details}</p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <MdOutlineCategory />
              <span className="font-bold">Subcategory:</span> {subCategory}
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <IoMdTime />
              <span className="font-bold">Processing Time:</span>
              {processTime}
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <MdOutlineCategory />
              <span className="font-bold">Subcategory:</span> {"subCategory"}
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <FaRegStar />
              <span className="font-bold">Rating:</span> {rating}
            </p>
            <p className="flex items-center gap-1 text-sm md:text-base">
              <IoPricetagsOutline />
              <span className="font-bold">Price:</span> {price} $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryViewDetails;
