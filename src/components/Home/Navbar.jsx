import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdAppRegistration, MdOutlineLibraryAdd } from "react-icons/md";
import { IoHome, IoList } from "react-icons/io5";
import Swal from "sweetalert2";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
          .catch((error) => {
            console.log(error);
          });
        Swal.fire({
          title: "Successfully Log Out !",
          icon: "success",
        });
      }
    });
  };

  const activeLink =
    "text-indigo-500 font-bold underline underline-offset-8 text-base flex items-center gap-1";
  const deActiveLink =
    "transition-all hover:underline underline-offset-8 hover:text-indigo-500 flex items-center gap-1";

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <IoHome />
        Home
      </NavLink>
      <NavLink
        to="/allCraft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <FaExternalLinkAlt />
        All Craft
      </NavLink>
      <NavLink
        to="/addCraft"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <MdOutlineLibraryAdd />
        Add Craft
      </NavLink>
      <NavLink
        to="/myCraftList"
        className={({ isActive }) => (isActive ? activeLink : deActiveLink)}
      >
        <IoList />
        My Craft Lists
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-gray-50 shadow-md mb-6 p-2">
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
          <h1 className="bg-gradient-to-r from-blue-500 to-indigo-600 inline-block text-transparent bg-clip-text">
            DrawingDen
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base space-x-8">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="flex gap-3">
            <NavLink to="/login">
              <button onClick={handleLogOut} className="my-secondary-btn">
                <CiLogout />
                Log Out
              </button>
            </NavLink>
            <NavLink
              className="tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full ring ring-offset-1 ring-indigo-600"
              />
            </NavLink>
          </div>
        ) : (
          <div>
            <Link to="/logIn" className="my-secondary-btn">
              <CiLogin />
              Log In
            </Link>
            <Link to="/register" className="my-primary-btn">
              <MdAppRegistration />
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
