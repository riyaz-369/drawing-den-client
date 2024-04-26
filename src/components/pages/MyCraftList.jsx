import { Link } from "react-router-dom";

const MyCraftList = () => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:text-gray-800">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-800"
            >
              Landscape
            </a>
          </div>
          <button>See All</button>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 "
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
            <h3 className="text-3xl font-semibold">300 $</h3>
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
                      <td>In Stock</td>
                      <td>Yes</td>
                      <td>4.5</td>
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
    </div>
  );
};

export default MyCraftList;
