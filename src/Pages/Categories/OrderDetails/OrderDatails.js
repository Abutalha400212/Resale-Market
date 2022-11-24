import { PhoneIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useLoaderData } from "react-router-dom";

const OrderDatails = () => {
  const data = useLoaderData();
  const {
    brand,
    seller,
    resale,
    img,
    location,
    features,
    description,
  } = data;
  console.log(data);
  return (
    <div className="md:flex justify-center gap-x-20 gap-y-10 mt-14">
      <div className="card bg-base-100 shadow-xl flex-1 ">
        <figure className="bg-blue-100 p-4 mb-5"><img className="rounded-md" src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title text-bold text-green-600 font-extrabold">
            Tk {resale}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <h1 className="text-light text-gray-600">Condition: Used</h1>
            <h1 className="text-light text-gray-600">
              Brand: <span className="">{brand}</span>
            </h1>
            <h1 className="text-light text-gray-600">
              Model: <span className="">{description.name}</span>
            </h1>
            <h1 className="text-light text-gray-600">
              Location: <span className="">{location}</span>
            </h1>
            <h1 className="text-light text-gray-600">
              Authenticity: <span>Original</span>
            </h1>
          </div>
          <div>
            <h1>Features</h1>
            <p className="text-light text-gray-600">{features}</p>
          </div>
          <div>
            <h1>Description:</h1>
            <ul class=" md:w-1/2 text-sm text-light mt-4 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 light:border-gray-600 dark:text-white">
              <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 light:border-gray-600">
               Model: {description.name}
              </li>
              <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600">
               Made by {description.made}
              </li>
              <li class="py-2 px-4 w-full border-b border-gray-200 light:border-gray-600">
              Display: {description.display}
              </li>
              <li class="py-2 px-4 w-full rounded-b-lg">Camera: {description.camera}</li>
              <li class="py-2 px-4 w-full rounded-b-lg"> ram: {description.ram}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:w-4/12 border-2 p-2 max-h-screen rounded-2xl mt-2">
        <ul class=" text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 light:border-gray-600 dark:text-white">
          <li class="py-4 px-4 w-full rounded-t-lg border-b border-gray-200 text-lg dark:border-gray-600">
            For Sale By <span className="text-xl font-bold">{seller}</span>
          </li>
          <li class="py-4 px-4 w-full border-b border-gray-200 dark:border-gray-600">
            <div className="flex justify-between">
              <PhoneIcon className="w-6 h-6 text-blue-800 " />
              <p className="hover:underline">01755327723</p>
            </div>
          </li>
        </ul>
        <h1 className="py-3 text-light text-gray-600">
          {" "}
          If you want to get this product, please fill up the form .
        </h1>

        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Address</span>
          </label>
          <input
            type="text"
            placeholder="Address here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Your Phone No.</span>
          </label>
          <input
            type="text"
            placeholder="Phone here"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-lg w-full mt-5 flex ">
          Book Now <ShoppingCartIcon className="w-5 h-6" />
        </button>
      </div>
    </div>
  );
};

export default OrderDatails;
