import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const UserForm = () => {
  return (
    <>
      <h1 className="text-green-700 font-bold text-xl text-center underline">
        General User{" "}
      </h1>
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
