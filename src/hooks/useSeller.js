import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [seller, setSeller] = useState("");
    const [sellerLoading,setSellerLoading] = useState(true)
    useEffect(() => {
     if(email){
      fetch(`http://localhost:5000/users/seller/${email}`)
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