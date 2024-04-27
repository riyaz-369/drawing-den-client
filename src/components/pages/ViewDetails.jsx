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
    email,
    fullName,
  } = artAndCraft;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={itemName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{itemName}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
