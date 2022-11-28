import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import AdvertiseCard from "../../Categories/Card/AdvertiseCard";
const Advertise = () => {
  const [setHandleShop] = useState(null)
  const {user} = useContext(AuthContext)
  const url = `http://localhost:5000/advertise?email=${user?.email}`;
  const { data: advertised = [], } = useQuery({
    queryKey: ["advertise",user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json()
   return data
    },
  });
  
  return (
    <div>
      <h1 className="text-2xl text-gray-700 underline py-5 font-mono text-center">Advertise Section:</h1>
      <div className="flex flex-wrap gap-6 mt-10" >
      {advertised.map((item) => <AdvertiseCard item={item} setHandleShop={setHandleShop}/>)}
    </div>
    </div>
  );
};

export default Advertise;
