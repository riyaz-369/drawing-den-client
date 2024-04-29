import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineCategory, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>DrawingDen | Subcategory/{subCategory}</title>
      </Helmet>
      <figure className="h-56">
        <img className="rounded-md w-full" src={photo} alt={itemName} />
      </figure>
      <div className="space-y-2 card-body">
        <h2 className="card-title">{itemName}</h2>
        <p className="text-sm md:text-base">{details}</p>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <MdOutlineCategory />
          <span className="font-bold">Subcategory:</span>{" "}
          <span className="badge-sm rounded-full bg-violet-500 text-white">
            {subCategory}
          </span>
        </p>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <IoMdTime />
          <span className="font-bold">Processing Time:</span> {processTime}
        </p>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <FaRegStar />
          <span className="font-bold">Rating:</span> {rating}
        </p>
        <p className="flex items-center gap-1 text-sm md:text-base">
          <IoPricetagsOutline />
          <span className="font-bold">Price:</span> {price} $
        </p>
        <p className="flex items-center gap-1 text-sm md:text-base">
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
