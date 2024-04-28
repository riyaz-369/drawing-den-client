import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftListCard = ({ myCraft, myCrafts, setMyCrafts }) => {
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
  } = myCraft;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://drawing-den-server.vercel.app/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success",
              });
              const remaining = myCrafts.filter((craft) => craft._id !== id);
              setMyCrafts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 rounded-md shadow-xl">
      <figure className="h-56">
        <img className="w-full" src={photo} alt={itemName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {itemName}
          <div className="badge bg-violet-500 text-white">{subCategory}</div>
        </h2>
        <p>{details}</p>
        <h3 className="text-3xl font-semibold">{price} $</h3>
        <div className="mt-5 md:mt-8 space-y-2 border-t-2 border-dashed">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Customizable</th>
                  <th>Processing Time</th>
                  <th>Rating (of 5)</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>{stock}</td>
                  <td>{customization}</td>
                  <td>{processTime}</td>
                  <td>{rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-actions justify-start mt-4">
          <Link to={`/updateCraft/${_id}`}>
            <button className="my-primary-btn">Update</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="my-secondary-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCraftListCard;
