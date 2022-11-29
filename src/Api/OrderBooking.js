export const bookingOrder = async (order) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(order),
  });
  const data = await res.json();
  return data;
};

export const confirmPayment = async (payment) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/payments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify(payment),
  });
  const data = await res.json();
  return data;
};
export const confirmPaymentUpdateOne = async (phone) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/ordersOne/${phone}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({status:"sold"}),
  });
  const data = await res.json();
  return data;
};
export const confirmPaymentUpdateTwo = async (phone) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/ordersTwo/${phone}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({status:"sold"}),
  });
  const data = await res.json();
  return data;
};

export const deleteBookingItem = async (id) => {
  const res = await fetch(` https://mobile-x-server.vercel.app/orders/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  const data = res.json();
  return data;
};