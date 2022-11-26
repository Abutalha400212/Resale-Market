export const bookingOrder = async(order) =>{
    const res = await fetch(`http://localhost:5000/booking`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      return data;
}