const CategoriesCard = ({ category }) => {
  console.log(category);

  const {
    image,
    itemName,
    details,
    subCategory,
    price,
    rating,
    processingTime,
  } = category;

  console.log(category);

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl rounded-md transition-all hover:scale-105 duration-300">
      <figure className="h-48">
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-3xl font-medium font-stylish">{itemName} </h2>
        <div>
          <span className="badge badge-secondary">{subCategory}</span>
        </div>
        <p className="text-gray-500 text-sm">{details}</p>
        <div className="card-actions justify-center">
          <button className="btn bg-indigo-500 text-white hover:bg-blue-500 px-8 w-full btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;

// text-[#F78C9C]
