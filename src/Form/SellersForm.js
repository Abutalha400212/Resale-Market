import { BuildingLibraryIcon, ClipboardDocumentIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SellersForm = () => {
    return (
        <>
        <h1 className='text-green-700 font-bold text-xl text-center underline'>Seller Account </h1>
        <NavLink
        to='allUsers'
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
        to='allSellers'
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
        to='report'
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