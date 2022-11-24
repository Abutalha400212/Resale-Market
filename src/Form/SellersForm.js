import { BuildingLibraryIcon, ClipboardDocumentIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const SellersForm = () => {
  const {user} = useContext(AuthContext)
    return (
        <>
        <h1 className='text-green-700 font-bold text-xl ml-8 underline'>Seller Account </h1>
        <div className="avatar ml-8 mt-5">
        <div className="w-24 rounded-full">
          <img className="w-full " src={user.photoURL} alt='' />
        </div>
      </div>
        <NavLink
        to='myProducts'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <ShoppingCartIcon className='w-5 h-5' />
    
        <span className='mx-4 font-medium'>My Products</span>
      </NavLink>
    
      <NavLink
        to='addProduct'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <ClipboardDocumentIcon className='w-5 h-5' />
    
        <span className='mx-4 font-medium'>Add a Product</span>
      </NavLink>
      <NavLink
        to='Buyers'
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
          }`
        }
      >
        <BuildingLibraryIcon className='w-5 h-5' />
    
        <span className='mx-4 font-medium'>All Buyers</span>
      </NavLink>
    </>
    );
};

export default SellersForm;