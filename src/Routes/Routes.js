import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DashboardLayout from "../layout/DashboardLayout";
import Categories from "../Pages/Categories/Categories";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>
  },
  {
    path: "/",
    element: <Main />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/category",
        element: <Categories />
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />
      },
      {
        path: "/dashboard/allSellers",
        element: <AllSeller />
      },
      {
        path: "/dashboard/addProduct",
        element: <AddAProduct />
      },
      {
        path:"/dashboard/myProducts",
        element:<MyProducts/>
      },
      {
        path:"/dashboard/myOrders",
        element:<MyOrders/>
      },
    ],
  },
]);
