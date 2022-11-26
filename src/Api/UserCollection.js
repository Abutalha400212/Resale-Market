export const userCollection = async (user) => {
  const res = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
};

export const usersByUserType = async (account) => {
  const res = await fetch(
    `http://localhost:5000/users/user?account=${account}`,
    {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const usersBySellerType = async (account) => {
  const res = await fetch(
    `http://localhost:5000/users/seller?account=${account}`,
    {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }
  );
  const data = await res.json();
  return data;
};
export const deleteUserAccount = async (id) => {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = res.json();
  return data;
};
export const userVerify = async (email) => {
  const res = await fetch(`http://localhost:5000/users/seller/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({ status: "Verified" }),
  });
  const data = await res.json();
  return data;
};
export const soldProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({ status: "Sold" }),
  });
  const data = await res.json();
  return data;
};
