import { useContext, useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState("");
  useEffect(() => {
   if(email){
    fetch(`http://localhost:5000/users/admin/${email}`)
    .then((res) => res.json())
    .then((data) =>{
      
      setAdmin(data.isAdmin)});
   }
  }, [email]);
  return [admin]
};
export default useAdmin