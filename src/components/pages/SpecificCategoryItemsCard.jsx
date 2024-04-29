import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SpecificCategoryItemsCard = ({ categoryItem }) => {
  const {
    _id,
    photo,
    itemName,
    details,
    subCategory,
    price,
    rating,
    processTime,
    stock,
  } = categoryItem;

  return (
    <div className="card border transition-all p-3 duration-300 rounded-md">
      <figure className="h-56">
        <img className="rounded-md w-full" src={photo} alt={itemName} />
      </figure>
      <div className="space-y-2 card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="text-sm md:text-base">{details}</p>
        <p className="flex items-center gap-1">
          <MdOutlineCategory />
          <span className="font-bold">Subcategory:</span>{" "}
          <span className="badge bg-violet-500 text-white">{subCategory}</span>
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

        <div className="card-actions">
          <Link className="btn w-full card-btn" to={`/artDetails/${_id}`}>
            <button>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecificCategoryItemsCard;

SpecificCategoryItemsCard.propTypes = {
  categoryItem: PropTypes.object,
};
