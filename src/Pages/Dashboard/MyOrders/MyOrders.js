import { useQuery } from "@tanstack/react-query";
import React, { useContext} from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteBookingItem } from "../../../Api/OrderBooking";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user} = useContext(AuthContext);
  const { data: products=[], refetch,isLoading } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: () =>
      fetch(`https://mobile-x-server.vercel.app/booking?email=${user?.email}`,{
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) =>
        res.json()
      ),
  });
  const handleDelete = (product) => {
    deleteBookingItem(product._id).then(data =>{
      if(data.acknowledged){
        toast.error(`${product.product} Booking Item Deleted Successfully`)
refetch()
      }
    })
  }

if(isLoading){
  return <Loader/>
}

  return (
    <div className="overflow-x-auto mt-10 ">
      <table className="table w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="py-2">
              Q.
            </th>
            <th scope="col" className="py-2">
              Product Img
            </th>
            <th scope="col" className="py-2">
              Name
            </th>
            <th scope="col" className="py-2">
              Product Name
            </th>
            <th scope="col" className="py-2">
              Price
            </th>
            <th scope="col" className="py-2">
              Meet Location
            </th>
            <th scope="col" className="py-2">
              Booking Date
            </th>
            <th scope="col" className="py-2">
              Advertise
            </th>
            <th scope="col" className="py-2">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center text-gray-600 font-mono">
          {products.map((product, i) => (
            <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-2">{i + 1}</td>
              <td>
              <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                    <img src={product?.img} alt="" />
                  </div>
                </div>
              </td>
              <td className="py-2">{product.phone}</td>
              <td className="py-2">{product.product}</td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.meet}</td>
              <td className="py-2">{product.date}</td>
              <td className="py-2">
                <button
                  onClick={() => {
                    handleDelete(product);
                  }}
                  className="btn btn-sm btn-accent"
                >
                  Delete
                </button>
              </td>
              <td className="py-2">
                {product.price && !product.status && <Link to={`/dashboard/payment/${product._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>}
             {   product.price && product.status && <span className="text-primary ">Paid</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
