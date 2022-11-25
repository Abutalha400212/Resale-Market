import { useEffect, useState } from "react";

const useVerified = (email) => {
  const [verify, setVerify] = useState("");
  useEffect(() => {
   if(email){
    fetch(`http://localhost:5000/users/verified/${email}`)
    .then((res) => res.json())
    .then((data) =>{
      setVerify(data.isVerified)});
   }
  }, [email]);
  return [verify]
};
export default useVerified