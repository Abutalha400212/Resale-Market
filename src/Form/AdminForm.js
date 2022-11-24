import {
  BuildingStorefrontIcon,
  ChatBubbleBottomCenterIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const AdminForm = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="w-full">
      <h1 className="text-green-700 font-bold text-xl ml-12 underline">
        Admin{" "}
      </h1>
      <div className="avatar ml-8 mt-5">
        <div className="w-24 rounded-full">
          <img className="w-full " src={user.photoURL} alt='' />
        </div>
      </div>
      <NavLink
        to="allUsers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <UsersIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">All Users</span>
      </NavLink>

      <NavLink
        to="allSellers"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <BuildingStorefrontIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">All Sellers</span>
      </NavLink>
      <NavLink
        to="report"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <ChatBubbleBottomCenterIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Reported </span>
      </NavLink>
    </div>
  );
};

export default AdminForm;
