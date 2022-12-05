export const category = async () => {
  const res = await fetch("http://localhost:5000/category")
  const data = await res.json();
  return data;
};

export const categoryItem = async (brand) => {
  const res = await fetch(
    `http://localhost:5000/categoriesItem?brand=${brand}`
  );
  const data = await res.json();
  return data;
};
export const addCategoryItem = async (product) => {
  const res = await fetch(`http://localhost:5000/addCategoryItem`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return data;
};

export const getAddedSellersProduct = async (email) => {
  const res = await fetch(`http://localhost:5000/myProducts?email=${email}`, {
    headers: {
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = await res.json();
  return data;
};

export const deleteAddeddata = async (id) => {
  const res = await fetch(`http://localhost:5000/myProducts/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = res.json();
  return data;
};
