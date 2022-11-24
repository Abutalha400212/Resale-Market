import { useEffect, useState } from "react";

const useSeller = (email) => {
    const [seller, setSeller] = useState("");
    useEffect(() => {
     if(email){
      fetch(`http://localhost:5000/users/seller/${email}`)
      .then((res) => res.json())
      .then((data) =>{
        setSeller(data.isSeller)});
     }
    }, [email]);
    return [seller]
  };
  export default useSeller