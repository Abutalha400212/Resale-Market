import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import PrivateRoute from "../../../Routes/PrivateRoute";
import AdvertiseCard from "../../Categories/Card/AdvertiseCard";
import OrderModal from '../../Categories/OrderDetails/OrderModal'
const Advertise = () => {
  const [handleShop, setHandleShop] = useState(null);
  const url = `http://localhost:5000/advertise`;
  const { data: advertised=[] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
    
  });
  return (
    <>
    {(advertised.length > 0) && <div>
      <h1 className="text-2xl text-gray-700 underline py-5 font-mono text-center">
        Advertise Section:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 w-11/12 mx-auto gap-6 mt-10">
        {advertised.map((item) => (
          <AdvertiseCard key={item._id} item={item} setHandleShop={setHandleShop} />
        ))}
      </div>
      {handleShop && <PrivateRoute><OrderModal item={handleShop} setHandleShop={setHandleShop}/></PrivateRoute>}
    </div>}
    </>
  );
};

export default Advertise;
