import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useSeller from '../hooks/useSeller';

const SellerRoute = ({children}) => {
    const location = useLocation();
    const { user,loading } = useContext(AuthContext);
    const [seller,sellerLoading] = useSeller(user?.email)
    if(loading||sellerLoading){
      return <progress className="progress w-56"></progress>
    }
    if (!user&&!seller) {
      return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
    }
  
    return children;
  };

export default SellerRoute;