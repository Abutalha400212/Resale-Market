export const category = async () => {
  const res = await fetch("http://localhost:5000/category");
  const data = await res.json();
  return data;
};


export const categoryItem =  async (brand)=>{
    const res = await fetch(`http://localhost:5000/categoriesItem?brand=${brand}`)
    const data = await res.json()
    return data
}