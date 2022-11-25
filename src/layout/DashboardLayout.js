import { BuildingStorefrontIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import AdminForm from "../Form/AdminForm";
import SellersForm from "../Form/SellersForm";
import UserForm from "../Form/UserForm";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [admin] = useAdmin(user.email)
  const [seller] = useSeller(user.email)

  return (
    <div className="md:flex justify-between mt-10">
      <div className="w-60 mr-10">
{admin ? <AdminForm/> :<>
{seller ? <SellersForm/> : <UserForm/>}
</>}
<Link to='/category' className="flex items-center mt-20 ml-5 underline"><ShoppingBagIcon className="w-6 h-6 font-extrabold mr-1"/>Back To Shop</Link>
<Link to='/' className="flex items-center mt-5 ml-5 underline"><BuildingStorefrontIcon className="w-6 h-6 font-extrabold mr-1"/>Back To Home</Link>
      </div>
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
