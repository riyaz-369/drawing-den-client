import { Link } from "react-router-dom";

const CraftItems = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl">Our ART And CRAFTS</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum vel
          nam voluptate, id blanditiis labore ipsum laborum nisi dolorum esse,
          rerum assumenda voluptatum iste voluptatibus animi et temporibus
          consectetur quaerat?
        </p>
      </div>
      <div className=" w-96">
        <figure>
          <img src="https://i.ibb.co/1s8vQ2D/290964065.jpg" alt="car!" />
        </figure>
        <div className="space-y-4">
          <button className="bg-green-400 text-sm text-white font-semibold p-1 px-3 rounded-sm mt-4">
            Landscape Painting
          </button>
          <h2 className="card-title">Life hack Lorem ipsum dolor sit</h2>
          <p>How to park car at your garage your car at your garage?</p>
          <div className="card-actions">
            <Link to="/artDetails">
              <button className="my-secondary-btn w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
