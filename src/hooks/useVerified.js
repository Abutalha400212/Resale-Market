import { useEffect, useState } from "react";

const useVerified = (email) => {
  const [verify, setVerify] = useState("");
  useEffect(() => {
   if(email){
    fetch(`https://mobile-x-server.vercel.app/users/verified/${email}`)
    .then((res) => res.json())
    .then((data) =>{
      setVerify(data.isVerified)});
   }
  }, [email]);
  return [verify]
};
export default useVerified