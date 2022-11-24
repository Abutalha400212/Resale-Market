import React from "react";
import { Outlet } from "react-router-dom";
import AdminForm from "../Form/AdminForm";
import SellersForm from "../Form/SellersForm";
import UserForm from "../Form/UserForm";


const DashboardLayout = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="w-60">
        <SellersForm />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
