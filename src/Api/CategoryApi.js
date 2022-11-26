export const category = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();
  return data;
};

export const allItem = async()=>{
  const res = await fetch("http://localhost:5000/allItem")
  const data = res.json()
}
export const categoryItem =  async (brand)=>{
    const res = await fetch(`http://localhost:5000/categoriesItem?brand=${brand}`)
    const data = await res.json()
    return data
}
export const addCategoryItem = async (product) => {
  const res = await fetch(`http://localhost:5000/addCategoryItem`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return data;
};

export const getAddedSellersProduct = async(email) =>{
  const res = await fetch(`http://localhost:5000/myProducts?email=${email}`)
  const data = await res.json()
  return data
}

export const deleteAddeddata = async(id) =>{
const res = await fetch(`http://localhost:5000/myProducts/${id}`,{
  method:'DELETE'
})
const data = res.json()
return data
}