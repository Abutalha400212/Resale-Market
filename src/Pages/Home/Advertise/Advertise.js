import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Advertise = () => {
  const { user} = useContext(AuthContext);
  const url = `http://localhost:5000/advertise?email=${user?.email}`;
  const { data: advertised = [], } = useQuery({
    queryKey: ["advertise", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json()
      return data;
    },
  });
  return (
    <div className="flex flex-wrap gap-6 mt-10" >
      {advertised.map((item) => (
        <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{item.product}</h2>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.meet}</p>
            <div className="card-actions justify-end">
              {!item.status &&<button className="btn btn-primary"> Payment Required</button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advertise;
