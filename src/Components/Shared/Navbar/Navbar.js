import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assest/logo.webp";
const Navbar = () => {
    const navItem = <>
     <li>
              <Link
                to="/"
                
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/category"
               
              >
             Category
              </Link>
            </li>
            <li>
              <Link
                to="/details"
               
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/"
               
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                
              >
                Contact
              </Link>
            </li>
    
    </>
   
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navItem}
        </ul>
      </div>
      <Link to='/'><img src={logo} class="h-6 mr-3 sm:h-9 " alt=""></img></Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {navItem}
      </ul>
    </div>
    <div className="navbar-end">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
  </div>
  );
};

export default Navbar;
