import React, { useState } from "react";
import { category, categoryItem } from "../../Api/CategoryApi";
import Card from "./Card/Card";
import OrderModal from "./OrderDetails/OrderModal";

const Categories = () => { 
  const [handleShop,setHandleShop] = useState(null)
  const [categoriesItem, setCategoriesItem] = useState([]);
  const [categories, setCategories] = useState([]);
 

  category().then((data) => {
    setCategories(data)});
  const handleCategoryData = (item) => {
    categoryItem(item).then((data) => setCategoriesItem(data));
  };

  return (
    <div className="md:flex justify-center gap-5 mt-10">
      <div className="md:w-72">
        <h1 className="text-2xl text-gray-600 font-bold mb-5 ml-5 underline ">
          Category Item{" "}
        </h1>
        <ul className="menu menu-compact dropdown-content gap-3 mt-3 p-2 shadow bg-transparent rounded-box md:w-52">
          {categories.map((category) => (
                    <li>
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
            Phone Fetures
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
            <Card item={item} setHandleShop={setHandleShop} />
          ))}
        </div>
      </div>
      { handleShop &&<OrderModal item={handleShop} setHandleShop={setHandleShop}/>}
    </div>
  );
};

export default Categories;
