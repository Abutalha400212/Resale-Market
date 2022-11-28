import React, { useContext, useState } from "react";
import { category, categoryItem } from "../../Api/CategoryApi";
import { AuthContext } from "../../Context/AuthProvider";
import Card from "./Card/Card";
import OrderModal from "./OrderDetails/OrderModal";
import PrivateRoute from '../../Routes/PrivateRoute'
const Categories = () => { 
  const {loading,setLoading} = useContext(AuthContext)
  const [handleShop,setHandleShop] = useState(null)
  const [categoriesItem, setCategoriesItem] = useState([]);
  const [categories, setCategories] = useState([]);
if(loading){
  return <progress className="progress w-56"></progress>
}
  category().then((data) => {
    setCategories(data)});
  const handleCategoryData = (item) => {
    categoryItem(item).then((data) =>{
      setCategoriesItem(data)
       setLoading(false)
    });
  };

  return (
    <div className="md:flex justify-center gap-5 mt-10">
      <div className="md:w-72">
        <h1 className="text-2xl text-gray-600 font-bold mb-5 ml-5 underline ">
          Category Item{" "}
        </h1>
        <ul className="menu menu-compact dropdown-content gap-3 mt-3 p-2 shadow bg-transparent rounded-box md:w-52">
          {categories.length && categories.map((category,i) => (
                    <li key={category._id}>
                    <button
           onClick={() => handleCategoryData(category)}
             className={({ isActive }) =>
               `flex items-center px-4 m-0.5 rounded-md transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                 isActive ? 'bg-gray-400  text-gray-700' : 'bg-gray-100'
               }`
             }
           >
         
             <span className=' font-medium'>{category}</span>
           </button>
                 </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <h1 className="font-bold text-2xl mb-2 text-center text-gray-800 underline ">
            {" "}
            Phone Features
          </h1>
          <div className="md:flex justify-between text-gray-400 font-light text-xs">
            <p className="font-serif">
              {" "}
              Sort by: <span className="font-bold">Best selling</span>
            </p>
            <p className="font-semibold">{categoriesItem.length} products</p>
            <p className="font-semibold">Product is good</p>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categoriesItem.map((item) => (
            <Card key={item._id} item={item} setHandleShop={setHandleShop} />
          ))}
        </div>
      </div>
      {( handleShop) &&<PrivateRoute> <OrderModal item={handleShop} setHandleShop={setHandleShop}/></PrivateRoute>}
    </div>
  );
};

export default Categories;
