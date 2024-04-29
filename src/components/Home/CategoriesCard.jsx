import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoriesCard = ({ category }) => {
  const { _id, image, itemName, details, subCategory } = category;

  return (
    <Link>
      <div className="card shadow-md transition-all lg:hover:-translate-y-4 duration-300 rounded-md">
        <Link to={`/subCategory/${subCategory}`}>
          <div className="hover:underline">
            <figure className="h-48">
              <img src={image} alt={itemName} />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-3xl font-medium font-stylish">{itemName}</h2>

              <div>
                <span className="badge bg-orange-400 text-white">
                  {subCategory}
                </span>
                <p className="btn-link">See all</p>
              </div>
              <p className="text-gray-500 text-sm">{details}</p>
            </div>
          </div>
        </Link>
        <div className="justify-center card-actions mb-4">
          <Link to={`categoryDetails/${_id}`}>
            <button className="my-primary-btn">View Details</button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;

CategoriesCard.propTypes = {
  category: PropTypes.object,
};
