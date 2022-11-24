import {BuildingStorefrontIcon, ChatBubbleBottomCenterIcon, UsersIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminForm = () => {
  return (
    <>
    <h1 className='text-green-700 font-bold text-xl text-center underline'>Admin </h1>
    <NavLink
    to='allUsers'
    className={({ isActive }) =>
      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
      }`
    }
  >
    <UsersIcon className='w-5 h-5' />

    <span className='mx-4 font-medium'>All Users</span>
  </NavLink>

  <NavLink
    to='allSellers'
    className={({ isActive }) =>
      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
      }`
    }
  >
    <BuildingStorefrontIcon className='w-5 h-5' />

    <span className='mx-4 font-medium'>All Sellers</span>
  </NavLink>
  <NavLink
    to='report'
    className={({ isActive }) =>
      `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
        isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
      }`
    }
  >
    <ChatBubbleBottomCenterIcon className='w-5 h-5' />

    <span className='mx-4 font-medium'>Reported </span>
  </NavLink>
</>
  );
};

export default AdminForm;