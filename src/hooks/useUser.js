import { useEffect, useState } from "react";

const useUser = (email) => {
    const [users, setUSer] = useState("");
    const [userLoading,setUserLoading] = useState(true)
    useEffect(() => {
     if(email){
      fetch(`http://localhost:5000/users/seller/${email}`)
      .then((res) => res.json())
      .then((data) =>{
        setUSer(data.isSeller)
        setUserLoading(false)
      });
     }
    }, [email]);
    return [users,userLoading]
  };
  export default useUser