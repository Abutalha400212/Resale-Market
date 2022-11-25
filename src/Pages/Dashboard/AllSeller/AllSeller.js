import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteUserAccount, usersBySellerType, userVerify } from '../../../Api/UserCollection';

const AllSeller = () => {
    const account = "seller"
    const [users,setUsers] = useState([])
    usersBySellerType(account).then(data => setUsers(data))
    const handleDeleteSeller = user =>{
      deleteUserAccount(user._id).then(data =>{
        if(data.acknowledged){
          toast.success(`${user.name} Seller Deleted Successfully`)
        }
      })
    }
    const handleVerify = user =>{
      userVerify(user.email).then(data =>{
        if(data.acknowledged){
          toast.success(`${user.name} is Verified Seller`)
        }
      })
    }
    return (
        <div className="overflow-x-auto relative  mt-10">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-2 px-5">
                Users Photo
              </th>
              <th scope="col" className="py-2 px-5">
                Users Name
              </th>
              <th scope="col" className="py-2 px-5">
                Users Email
              </th>
              <th scope="col" className="py-2 px-5">
                Action
              </th>
              <th scope="col" className="py-2 px-5">
                Verify User
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-2 px-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <img src={user?.img} alt="" />
                    </div>
                  </div>
                </th>
                <td className="py-2 px-5">{user.name}</td>
                <td className="py-2 px-5">{user.email}</td>
                <td className="py-2 px-5"><button onClick={()=>handleDeleteSeller(user)} className="btn btn-sm btn-warning">Delete</button></td>
                <td className="py-2 px-5"><button disabled={user.status} onClick={()=>handleVerify(user)} className={`btn btn-sm  btn-success`}>{user?.status ? user?.status : 'verify'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllSeller;