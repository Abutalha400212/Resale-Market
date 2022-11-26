import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const [advertiseShow, setAdvertiseShow] = useState(false);
  const { user, advertise, setAdvertise } = useContext(AuthContext);
  const { data: products, isLoading } = useQuery({
    queryKey: ["booking", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/booking?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  const handleAdvertise = (product) => {
    advertise.push(product);
    console.log(advertise);
  };

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
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
              Name
            </th>
            <th scope="col" className="py-2">
              Phone
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
            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="py-2">{i + 1}</td>
              <td className="py-2">{product.customer}</td>
              <td className="py-2">{product.phone}</td>
              <td className="py-2">{product.product}</td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.meet}</td>
              <td className="py-2">{product.date}</td>
              <td className="py-2">
                <button
                  disabled={advertiseShow}
                  onClick={() => {
                    setAdvertiseShow(true);
                    handleAdvertise(product);
                  }}
                  className="btn btn-sm btn-success"
                >
                  Advertise
                </button>
              </td>
              <td className="py-2">
                <Link to={`/dashboard/payment/${product._id}`}><button className="btn btn-sm btn-primary">Pay</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
