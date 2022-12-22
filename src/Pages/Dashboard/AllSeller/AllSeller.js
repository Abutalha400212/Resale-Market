import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { deleteUserAccount, usersBySellerType, userVerify } from '../../../Api/UserCollection';
import Loader from '../../../Components/Loader/Loader';
import { AuthContext } from '../../../Context/AuthProvider';

const AllSeller = () => {
  const {loading,setLoading} = useContext(AuthContext)
    const account = "seller"
    const [users,setUsers] = useState([])
    useEffect(()=>{
      usersBySellerType(account)
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
    },[loading,setLoading])
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
    if(loading){
      return <Loader/>
    }
    return (
        <div className="overflow-x-auto  mt-10">
        <table className="w-full table">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
            <tr>
              <th scope="col" className="py-2 px-5">
                Q.
              </th>
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
          <tbody className='text-gray-600 font-mono text-center'>
            {users.map((user,i) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="py-2 px-5">{i+1}</td>
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