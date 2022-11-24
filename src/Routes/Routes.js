import Categories from "../Pages/Categories/Categories";
import OrderDatails from "../Pages/Categories/OrderDetails/OrderDatails";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
        {
            path:'/category',
            element:<Categories/>
        },
        {
            path:'/categoriesItemDetails/:id',
            loader:({params})=>fetch(`http://localhost:5000/categoriesItemDetails/${params.id}`),
            element:<OrderDatails/>
        }
        ]
    }
])