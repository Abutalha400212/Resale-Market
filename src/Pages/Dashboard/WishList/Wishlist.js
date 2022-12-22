import React, { useContext, useState,useEffect } from "react";
import { getWishlist } from "../../../Api/WishlistCollection";
import Loader from "../../../Components/Loader/Loader";
import { AuthContext } from "../../../Context/AuthProvider";
import OrderModal from "../../Categories/OrderDetails/OrderModal";
import WishListCard from "./WishListCard";

const Wishlist = () => {
  const { user,loading, setLoading} = useContext(AuthContext);
  const [handleShop, setHandleShop] = useState(null);
  const [wishListItem, setWishListItem] = useState([]);

 useEffect(()=>{
  getWishlist(user.email).then((data) => {
    setWishListItem(data);
    setLoading(false);
  });
 },[loading,setLoading,user?.email])

 if(loading){
  return <Loader/>
 }


  return (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {wishListItem.map((item) => (
              <WishListCard
                key={item._id}
                item={item}
                setHandleShop={setHandleShop}
              />
            ))}
          </div>
          {handleShop && (
            <OrderModal item={handleShop} setHandleShop={setHandleShop} />
          )}
        </div>
  );
};

export default Wishlist;
