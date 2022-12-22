import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../../../Api/CategoryApi";
import { AuthContext } from "../../../Context/AuthProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut,setCategoriesItem} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Account LogOut");
      navigate("/");
    });
  };
const handleAllData =()=>{
  categories().then(data=>setCategoriesItem(data))
}
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }
        >
          <span className=" font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/category"
          onClick={handleAllData}
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }
        >
          <span className=" font-medium">Category</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }
        >
          <span className=" font-medium">Blog</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
            }`
          }
        >
          <span className=" font-medium">Dashboard</span>
        </NavLink>
      </li>
    </>
  );
  const authItem = (
    <>
      {user ? (
        <button onClick={handleLogOut} className="btn btn-accent">
          Log Out
        </button>
      ) : (
        <>
          {" "}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
                }`
              }
            >
              <span className=" font-medium">Log in</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                  isActive ? "bg-gray-300  text-gray-700" : "bg-gray-100"
                }`
              }
            >
              <span className=" font-medium">Sign Up</span>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar md:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={2} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={2}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-transparent rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center justify-center text-2xl font-mono text-yellow-400 hover:text-yellow-600"
        >
          <ShoppingBagIcon className="w-10 h-10 text-yellow-300 " />
          Mobile <span className="text-3xl font-semibold">X</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">{authItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
