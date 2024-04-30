import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { IoHome, IoList } from "react-icons/io5";
import Swal from "sweetalert2";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const handleDarkAndLightTheme = (e) => {
    const userTheme = e.target.checked ? "dark" : "light";
    setTheme(userTheme);
    localStorage.setItem("theme", userTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout right now",
    }).then((resulted) => {
      if (resulted.isConfirmed) {
        logOut()
          .then(() => {})
          .catch(() => {
            Swal.fire({
              title: "Something went wrong !",
              icon: "warning",
            });
          });
        Swal.fire({
          title: "Successfully log out !",
          icon: "success",
        });
      }
    });
  };

  const activeLink =
    "text-violet-500 font-bold underline underline-offset-8 text-base flex items-center gap-1";
  const deActiveLink =
    "transition-all hover:underline underline-offset-8 hover:text-orange-500 flex items-center gap-1";

  const navLinks = (
    <>
      <NavLink
        to="/"
        title="Home"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <IoHome />
        Home
      </NavLink>
      <NavLink
        to="/allCraft"
        title="All Art And Crafts"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <FaExternalLinkAlt />
        All Craft
      </NavLink>
      <NavLink
        to="/addCraft"
        title="Add New Art and Craft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <MdOutlineLibraryAdd />
        Add Craft
      </NavLink>
      <NavLink
        to="/myCraftList"
        title="Your Art and Craft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <IoList />
        My Craft Lists
      </NavLink>
      {/* theme controller */}
      <label title="Change Theme" className="swap swap-rotate">
        <input
          onChange={handleDarkAndLightTheme}
          type="checkbox"
          className="theme-controller"
        />
        <svg
          className="swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg
          className="swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );

  return (
    <div className="sticky top-0 z-50 shadow-md bg-base-100">
      <div className="navbar max-w-7xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-md w-40 space-y-4"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            title="DrawingDen | Home"
            className="text-xl md:text-3xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <h1 className="text-gradient">DrawingDen</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base space-x-8">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="flex gap-3">
              <NavLink to="/login">
                <button
                  title="Log Out Your Account"
                  onClick={handleLogOut}
                  className="btn btn-sm md:px-6 md:btn-md bg-orange-400 text-white hover:bg-orange-500 rounded-full"
                >
                  Log Out
                </button>
              </NavLink>
              <span
                className="tooltip tooltip-left"
                data-tip={user.displayName}
              >
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-9 h-9 md:w-11 md:h-11 rounded-full ring ring-offset-1 ring-orange-400"
                />
              </span>
            </div>
          ) : (
            <div className="space-x-1 md:space-x-2">
              <Link
                to="/logIn"
                className="btn btn-sm md:px-6 md:btn-md bg-orange-400 text-white hover:bg-orange-500 rounded-full"
              >
                Log In
              </Link>
              <Link
                to="/register"
                className="btn btn-sm md:btn-md bg-violet-500 text-white hover:bg-violet-600 rounded-full"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
