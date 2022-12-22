
export const postwisthList = async (items) => {
  const res = await fetch("http://localhost:5000/wishlist", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(items),
  });

  const data = await res.json();
  return data;
};

export const getWishlist = async (email)=>{
    const res = await fetch(`http://localhost:5000/wishlist?email=${email}`)
    const data = await res.json()
    return data
}
export const updateWishlist = async (Cellphone) => {
    const res = await fetch(`http://localhost:5000/wishlist/${Cellphone}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"},
      body: JSON.stringify({ status: "sold" }),
    });
    const data = await res.json();
    return data;
  };