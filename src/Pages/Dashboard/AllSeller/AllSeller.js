import React, { useState } from 'react';
import { usersBySellerType } from '../../../Api/UserCollection';

const AllSeller = () => {
    const account = "seller"
    const [users,setUsers] = useState([])
    usersBySellerType(account).then(data => setUsers(data))
    return (
        <div class="overflow-x-auto relative  mt-10">
        <table class="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-2 px-5">
                Users Photo
              </th>
              <th scope="col" class="py-2 px-5">
                Users Name
              </th>
              <th scope="col" class="py-2 px-5">
                Users Email
              </th>
              <th scope="col" class="py-2 px-5">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <img src={user?.img} alt="" />
                    </div>
                  </div>
                </th>
                <td class="py-2 px-5">{user.name}</td>
                <td class="py-2 px-5">{user.email}</td>
                <td class="py-2 px-5"><button className="btn btn-sm btn-warning">Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllSeller;