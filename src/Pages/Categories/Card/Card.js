import React, { useState } from "react";
import "./Card.css";
import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
const Card = ({item,handleShop}) => {
    const {brand,seller,posted,original,resale,used,img,location,_id} = item
    const [wisthList,setWishlist] = useState(false)
  return (
    <div className="drop-shadow-xl rounded-md">
      <div className="w-80 bg-white shadow rounded">
        <div
          className={`h-48 flex flex-col justify-between p-4  rounded-t-md `}
          style={{ backgroundImage: `url(${img})`,
        backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
        >
          <div className="flex justify-between">
            <button className="bg-blue-200 hover:text-blue-500 flex p-1 rounded-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Advertise
            </button>
          </div>
          <div>
            <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">
              available
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col items-center">
          <p className="text-gray-400 font-light text-xs text-center">
            {seller}
          </p>
            <p className="text-gray-400 font-light text-xs text-center">Location:{location}</p>
            <p className="text-gray-400 font-light text-xs text-center">Posted on : {posted}</p>
          <h1 className="text-gray-600 text-center mt-1 font-bold uppercase">{brand}</h1>
         <div className="flex justify-between gap-x-2 text-gray-700  font-light">
         <p className="text-center  mt-1 text-sm">Original Price : ৳ <span className="line-through font-semibold">{original}</span></p>
         <p className="text-center  mt-1 text-sm">Resale Price : ৳ <span className="font-bold text-blue-900">{resale}</span></p>
         </div>
         <p className="text-gray-500 font-light text-xs text-center">Used For: {used}</p>
                    <Link onClick={()=>setWishlist(!wisthList)} className="inline-flex mt-1 text-sm text-light text-gray-600 hover:underline">
            Add to Wishlist <HeartIcon className={`h-6 w-6 mx-1 ${wisthList && 'text-red-600'}`}/>
          </Link>

       <Link to={`/categoriesItemDetails/${_id}`}
       >   <button className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
           Booking Now <ShoppingCartIcon className="h-6 w-6 my-2 mx-1"/>
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
