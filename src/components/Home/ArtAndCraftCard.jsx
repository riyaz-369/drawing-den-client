import { Link } from "react-router-dom";

const ArtAndCraftCard = ({ artAndCraft }) => {
  const {
    _id,
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
  } = artAndCraft;

  return (
    <div className="border p-4">
      <figure>
        <img src={photo} alt={itemName} />
      </figure>
      <div className="space-y-4">
        <h2 className="card-title">{itemName}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <Link to={`/artDetails/${_id}`}>
            <button className="my-secondary-btn w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftCard;
