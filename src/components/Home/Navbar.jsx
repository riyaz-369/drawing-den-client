import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink =
    "text-indigo-500 font-bold underline underline-offset-8 text-base";

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeLink
            : "transition-all hover:underline underline-offset-8 hover:text-indigo-500"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeLink
            : "transition-all hover:underline underline-offset-8 hover:text-indigo-500"
        }
        to="/allCraft"
      >
        All Craft
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeLink
            : "transition-all hover:underline underline-offset-8 hover:text-indigo-500"
        }
        to="/addCraft"
      >
        Add Craft
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? activeLink
            : "transition-all hover:underline underline-offset-8 hover:text-indigo-500"
        }
        to="/myCraftList"
      >
        My Craft Lists
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-gray-50 shadow-md mb-6 p-2 px-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="text-2xl font-semibold transition-all duration-300 hover:scale-105">
          DrawingDen
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base space-x-4">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <Link to="/logIn" className="my-secondary-btn">
          Log In
        </Link>
        <Link to="/register" className="my-primary-btn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
