import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllCraftTable = ({ craft, idx }) => {
  const { _id, itemName, subCategory, rating, processTime } = craft;

  return (
    <tr className="hover space-y-12">
      <th>{idx + 1}</th>
      <td>{itemName}</td>
      <td>{subCategory}</td>
      <td>{processTime}</td>
      <td>{rating}</td>
      <td>
        <Link
          to={`/artDetails/${_id}`}
          className="btn bg-violet-500 hover:bg-violet-700 text-white text-xs lg:text-base btn-sm"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllCraftTable;

AllCraftTable.propTypes = {
  craft: PropTypes.object,
  idx: PropTypes.number,
};
