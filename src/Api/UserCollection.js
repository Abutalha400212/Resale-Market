export const userCollection = async (user) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/users`, {
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
    ` https://mobile-x-server.vercel.app/users/user?account=${account}`);
  const data = await res.json();
  return data;
};
export const usersBySellerType = async (account) => {
  const res = await fetch(
    ` https://mobile-x-server.vercel.app/users/seller?account=${account}`,
    {
    }
  );
  const data = await res.json();
  return data;
};
export const deleteUserAccount = async (id) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/users/${id}`, {
    method: "DELETE",});
  const data = res.json();
  return data;
};
export const userVerify = async (email) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/users/seller/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status: "Verified" }),
  });
  const data = await res.json();
  return data;
};
export const soldProduct = async (id) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/products/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({ status: "paid" }),
  });
  const data = await res.json();
  return data;
};
