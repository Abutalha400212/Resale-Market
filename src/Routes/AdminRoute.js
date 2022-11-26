import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [admin, adminLoading] = useAdmin(user?.email);
  if (loading && adminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (!user && !admin) {
    return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
  }

  return children;
};

export default AdminRoute;
