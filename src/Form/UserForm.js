import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const UserForm = () => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <h1 className="text-green-700 font-bold text-xl ml-8 underline">
        General User{" "}
      </h1>
      <div className="avatar ml-8 mt-5">
        <div className="w-24 rounded-full">
          <img className="w-full " src={user.photoURL} alt='' />
        </div>
      </div>
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
    </>
  );
};

export default UserForm;
