import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Footer = () => {
  const { loading } = useContext(AuthContext);
  return (
    <>
      {!loading && (
        <footer className="mb-1 p-10 bg-blue-50 rounded shadow-xl bordered md:px-28 md:py-6 text-black  mt-60">
          <div className="md:flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center justify-center text-2xl font-mono"
            >
              <ShoppingBagIcon className="w-10 h-10  " />
              Mobile <span className="text-3xl font-semibold">X</span>
            </Link>
            <ul className="md:flex flex-wrap items-center text-sm text-black font-semibold">
              <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6 ">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/blog" className="mr-4 hover:underline md:mr-6 ">
                  blog
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto lg:my-5" />
          <span className="block text-sm text-black text-center font-semibold">
            © 2022{" "}
            <Link to="/" className="hover:underline">
              Mobile <span className="text-md">X</span>
            </Link>
            . All Rights Reserved.
          </span>
        </footer>
      )}
    </>
  );
};

export default Footer;
