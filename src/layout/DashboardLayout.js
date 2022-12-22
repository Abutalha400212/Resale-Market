import {
  BuildingStorefrontIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import AdminForm from "../Form/AdminForm";
import SellersForm from "../Form/SellersForm";
import UserForm from "../Form/UserForm";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const [admin] = useAdmin(user.email);
  const [seller] = useSeller(user?.email);
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/");
    });
  };
  return (
    <div className="md:flex justify-between mt-10 w-11/12 mx-auto">
      <div className="mr-5">
        {admin ? <AdminForm /> : <>{seller ? <SellersForm /> : <UserForm />}</>}
        <Link to="/category" className="flex items-center mt-20 underline">
          <ShoppingBagIcon className="w-6 h-6 font-extrabold mr-1" />
          Back To Shop
        </Link>
        <Link to="/" className="flex items-center mt-5 underline mr-3">
          <BuildingStorefrontIcon className="w-6 h-6 font-extrabold mr-1" />
          Back To Home
        </Link>
        <button onClick={handleLogOut} className="btn btn-primary ml-5 mt-5">
          Log Out
        </button>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
