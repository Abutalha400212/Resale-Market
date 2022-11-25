export const userCollection = async (user) => {
  const res = await fetch(`http://localhost:5000/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
};

export const usersByUserType = async (account) => {
  const res = await fetch(
    `http://localhost:5000/users/user?account=${account}`
  );
  const data = await res.json();
  return data;
};
export const usersBySellerType = async (account) => {
  const res = await fetch(
    `http://localhost:5000/users/seller?account=${account}`
  );
  const data = await res.json();
  return data;
};
export const deleteUserAccount = async (id) => {
  const res = await fetch(`http://localhost:5000/users/${id}`, {
    method: "DELETE",
  });
  const data = res.json();
  return data;
};
export const userVerify = async (id) => {
  const res = await fetch(`http://localhost:5000/users/seller/${id}`, {
    method: "PUT",
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify({ status: "Verified" }),
  });
  const data = await res.json();
  return data;
};
