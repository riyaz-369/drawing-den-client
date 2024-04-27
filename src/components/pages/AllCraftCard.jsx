const AllCraftCard = ({ craft }) => {
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
    email,
    fullName,
  } = craft;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="object-cover" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {itemName}
          <div className="badge badge-secondary">{subCategory}</div>
        </h2>
        <p>{details}</p>
        <div className="card-actions">
          <button className="btn w-full btn-success">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AllCraftCard;
