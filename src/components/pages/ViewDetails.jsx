import { FaRegEdit, FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory, MdProductionQuantityLimits } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const artAndCraft = useLoaderData();

  const {
    photo,
    itemName,
    subCategory,
    details,
    price,
    rating,
    customization,
    processTime,
    stock,
  } = artAndCraft;

  return (
    <div className=" max-w-7xl mx-auto my-16">
      <div className="card lg:card-side bg-base-100 border rounded-md">
        <figure className="w-full lg:w-1/2">
          <img src={photo} alt={itemName} />
        </figure>
        <div className="card-body">
          <div className="space-y-4">
            <h2 className="card-title text-3xl">{itemName}</h2>
            <p>{details}</p>
            <p className="flex items-center gap-1">
              <MdOutlineCategory />
              <span className="font-bold">Subcategory:</span> {subCategory} $
            </p>
            <p className="flex items-center gap-1">
              <IoMdTime />
              <span className="font-bold">Processing Time:</span> {processTime}
            </p>
            <p className="flex items-center gap-1">
              <FaRegStar />
              <span className="font-bold">Rating:</span> {rating}
            </p>
            <p className="flex items-center gap-1">
              <IoPricetagsOutline />
              <span className="font-bold">Price:</span> {price} $
            </p>
            <p className="flex items-center gap-1">
              <MdProductionQuantityLimits />
              <span className="font-bold">Stock:</span>{" "}
              <span className="text-orange-500 capitalize">{stock}</span>
            </p>
            <p className="flex items-center gap-1">
              <FaRegEdit />
              <span className="font-bold">Customization:</span> {customization}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
