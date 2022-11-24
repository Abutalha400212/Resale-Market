import React, { useState } from "react";
import { category, categoryItem } from "../../Api/CategoryApi";
import Card from "./Card/Card";

const Categories = () => {
    const [categories,setCategories] = useState([])
    const [categoriesItem,setCategoriesItem] = useState([])
    category().then(data =>setCategories(data))
const handleCategoryData = (item)=>{
    categoryItem(item.brand).then(data => setCategoriesItem(data))
}


  return (
    <div className="md:flex justify-center gap-5 mt-10">
      <div className="md:w-72">
        <h1 className="text-2xl text-blue-900 font-bold mb-5 ">Category Item </h1>
        <div className="md:w-56 flex flex-col gap-2">
            {categories.map(category => <button onClick={()=>handleCategoryData(category)} className="btn btn-md  w-full btn-outline">{category.brand}</button>)}
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-5">
        <h1 className="font-bold text-2xl mb-2 text-center underline "> Phone Fetures</h1>
        <div className="md:flex justify-between">
         <p className="font-serif"> Sort by: <span className="font-bold">Best selling</span></p>
         <p className="font-semibold">{categoriesItem.length} products</p>
         <p className="font-semibold">Preview is good</p>
        </div>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-3">
        {
            categoriesItem.map(item => <Card item={item} />)
        }
       </div>
      </div>
    </div>
  );
};

export default Categories;
