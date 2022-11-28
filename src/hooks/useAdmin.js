import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
   if(email){
    fetch(`https://mobile-x-server.vercel.app/users/admin/${email}`)
    .then((res) => res.json())
    .then((data) =>{
      
      setAdmin(data.isAdmin)
    setAdminLoading(false)
    });
   }
  }, [email,adminLoading]);
  return [admin]
};
export default useAdmin