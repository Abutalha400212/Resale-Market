import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const UserForm = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="avatar flex justify-center mt-10">
        <div className="w-24 rounded-full">
          <img className="w-full " src={user.photoURL} alt="" />
        </div>
      </div>
      <h1 className="text-gray-700 font-mono text-xl text-center">
        General User
      </h1>
      <p className="flex justify-center items-center">{user.email} </p>
      <NavLink
        to="myOrders"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My Orders</span>
      </NavLink>
      <NavLink
        to="wishlist"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ShoppingBagIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My WishList</span>
      </NavLink>
    </>
  );
};

export default UserForm;
