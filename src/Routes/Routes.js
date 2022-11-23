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
        }
        ]
    }
])