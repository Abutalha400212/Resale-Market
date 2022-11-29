import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [seller, setSeller] = useState("");
    const [sellerLoading,setSellerLoading] = useState(true)
    useEffect(() => {
     if(email){
      fetch(` https://mobile-x-server.vercel.app/users/seller/${email}`)
      .then((res) => res.json())
      .then((data) =>{
        setSeller(data.isSeller)
      setSellerLoading(false)
      });
     }
    }, [email]);
    return [seller,sellerLoading]
  };
  export default useSeller