import { Link } from "react-router-dom";

const CategoriesCard = ({ category }) => {
  const {
    image,
    itemName,
    details,
    subCategory,
    price,
    rating,
    processingTime,
  } = category;

  return (
    <Link>
      <div className="card shadow-md hover:shadow-xl rounded-md transition-all hover:scale-105 duration-300">
        <div className="hover:underline">
          <figure className="h-48">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-3xl font-medium font-stylish">{itemName} </h2>
            <div>
              <span className="badge bg-orange-400 text-white">
                {subCategory}
              </span>
            </div>
            <p className="text-gray-500 text-sm">{details}</p>
            <div className="justify-center">
              <button className="card-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoriesCard;

// text-[#F78C9C]
