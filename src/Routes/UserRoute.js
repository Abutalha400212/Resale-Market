import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useUser from '../hooks/useUser';
const UserRoute = ({children}) => {
    const location = useLocation();
    const { user,loading } = useContext(AuthContext);
    const [users,userLoading] = useUser(user?.email)
    if(loading||userLoading){
      return <progress className="progress w-56"></progress>
    }
    if (!users) {
      return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
    }
  
    return children;
  };

export default UserRoute;