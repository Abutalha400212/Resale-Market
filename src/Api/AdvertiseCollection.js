

export const advertiseCollect = async (advertise) => {

  // const {data} = await axios.post('https://mobile-x-server.vercel.app/advertise',advertise)
  // return data
    const res = await fetch(`https://mobile-x-server.vercel.app/advertise`, {

      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(advertise),
    });
    const data = await res.json();
    return data;
  };