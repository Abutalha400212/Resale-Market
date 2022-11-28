import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { getWishlist } from "../../../Api/WishlistCollection";
import { AuthContext } from "../../../Context/AuthProvider";
import OrderModal from "../../Categories/OrderDetails/OrderModal";
import WishListCard from "./WishListCard";

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [handleShop, setHandleShop] = useState(null);
  const { user } = useContext(AuthContext);
  const [wishListItem, setWishListItem] = useState([]);
  getWishlist(user.email).then((data) => {
    setLoading(true);
    setWishListItem(data);
    setLoading(false);
    console.log(data);
  });
  return (
    <>
      {wishListItem.length ? (
        <div>
          <div className="flex flex-wrap gap-6 mt-10">
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
      ) : (
        <>
          {" "}
          <h1 className="text-3xl text-center uppercase">
            {" "}
            Items are not available.{" "}
          </h1>
          <p className="text-sm text-center">
            Please Select one{" "}
            <Link className="underline" to="/category">
              Shop
            </Link>
          </p>
        </>
      )}
    </>
  );
};

export default Wishlist;
