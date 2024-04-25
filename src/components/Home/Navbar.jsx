import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeLink = "text-blue-700 font-bold border-b-2 border-blue-700";

  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : "")}
        to="/logIn"
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeLink : "")}
        to="/register"
      >
        Register
      </NavLink>
    </>
  );

  return (
    <div className="navbar">
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
        <Link className="text-xl">DrawingDen</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-blue-500 hover:bg-blue-700 rounded-full px-6 text-base text-white">
          Log In
        </a>
      </div>
    </div>
  );
};

export default Navbar;
