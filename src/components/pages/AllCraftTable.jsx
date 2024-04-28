import { Link } from "react-router-dom";

const AllCraftTable = ({ craft }) => {
  const { _id, itemName, subCategory, rating, processTime } = craft;

  return (
    <tr className="hover space-y-12">
      <th>1</th>
      <td>{itemName}</td>
      <td>{subCategory}</td>
      <td>{processTime}</td>
      <td>{rating}</td>
      <td>
        <Link to={`/artDetails/${_id}`} className="btn btn-sm btn-primary">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllCraftTable;