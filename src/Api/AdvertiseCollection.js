export const advertiseCollect = async (advertise) => {
    const res = await fetch(`http://localhost:5000/advertise`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(advertise),
    });
    const data = await res.json();
    return data;
  };