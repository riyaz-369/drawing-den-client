import { Link } from "react-router-dom";

const MyCraftListCard = ({ myCraft }) => {
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
  } = myCraft;

  return (
    <div className="max-w-lg p-4 shadow-md dark:text-gray-800">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a className="mb-0 capitalize dark:text-gray-800">{subCategory}</a>
        </div>
        <button>See All</button>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={photo}
            alt={itemName}
            className="block object-cover object-center w-full rounded-md h-72 "
          />
        </div>
        <div className="space-y-2">
          <a className="block">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              {itemName}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600">{details}</p>
          <h3 className="text-3xl font-semibold">{price} $</h3>
          <div className="mt-5 md:mt-8 space-y-2 border-t-2 border-dashed">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Stock</th>
                    <th>Customizable</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{stock}</td>
                    <td>{customization}</td>
                    <td>{rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-4">
            <Link to="/updateCraft">
              <button className="btn bg-violet-600 text-white hover:bg-violet-500 rounded-full">
                Update
              </button>
            </Link>
            <button className="btn bg-violet-600 text-white hover:bg-violet-500 rounded-full">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftListCard;
