import React, { useContext, useState } from 'react';
import {AuthContext} from '../../../Context/AuthProvider'
import {getAddedSellersProduct} from '../../../Api/CategoryApi'
const MyProducts = () => {
    const {user}= useContext(AuthContext)
    const [products,setProducts] = useState([])
    getAddedSellersProduct(user?.email).then(data=>{
        console.log(data);
        setProducts(data)
    })
    return (
        <div class="overflow-x-auto relative  mt-10">
        <table class="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-2">
                Product Photo
              </th>
              <th scope="col" class="py-2">
                Product Name
              </th>
              <th scope="col" class="py-2">
                Email
              </th>
              <th scope="col" class="py-2">
                Sell Price
              </th>
              <th scope="col" class="py-2">
                Posted Date
              </th>
              <th scope="col" class="py-2">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <img src={product?.img} alt="" />
                    </div>
                  </div>
                </th>
                <td class="py-2">{product.description.name}</td>
                <td class="py-2">{product.email}</td>
                <td class="py-2">{product.resale}</td>
                <td class="py-2">{product.posted}</td>
                <td class="py-2"><button className="btn btn-sm btn-warning">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyProducts;