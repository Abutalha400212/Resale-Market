import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      
<footer className="p-4 bg-gray-700 rounded shadow-xl bordered md:px-6 md:py-8 text-white dark:bg-gray-900 mt-10 mb-5">
    <div className="sm:flex sm:items-center sm:justify-between">
    <Link to='/' className="flex items-center justify-center text-2xl font-mono text-yellow-400 hover:text-yellow-600"><ShoppingBagIcon className="w-12 h-12 text-yellow-300 "/>Mobile <span className="text-4xl font-semibold">X</span></Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="/" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="/" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Mobile <span className='text-md'>X</span></a>. All Rights Reserved.
    </span>
</footer>

    );
};

export default Footer;