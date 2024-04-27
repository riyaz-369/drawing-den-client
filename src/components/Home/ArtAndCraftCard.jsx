import { Link } from "react-router-dom";

const ArtAndCraftCard = ({ artAndCraft }) => {
  console.log(artAndCraft);
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
  } = artAndCraft;

  return (
    <div className=" w-96">
      <figure>
        <img src={photo} alt={itemName} />
      </figure>
      <div className="space-y-4">
        <button className="bg-green-400 text-sm text-white font-semibold p-1 px-3 rounded-sm mt-4">
          {subCategory}
        </button>
        <h2 className="card-title">{itemName}</h2>
        <p>{details}</p>
        <div className="card-actions">
          <Link to="/artDetails">
            <button className="my-secondary-btn w-full">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftCard;
