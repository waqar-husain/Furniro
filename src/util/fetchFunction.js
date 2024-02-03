const timeout = (s) => {
  return new Promise((_, reject) => {
    const controller = AbortController();
    setTimeout(() => {
      controller.abort();
      reject(new Error("Request timeout!"));
    }, s * 1000);
  });
};

export default async function fetchReq(url, pOption) {
  try {
    const defaultOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPIDAPI_KEY}`,
        "X-RapidAPI-Host": `${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}`,
      },
    };
    let option = pOption ? pOption : defaultOption;
    const fetchReq = await fetch(`${url}`, option);
    const res = await Promise.race([fetchReq, timeout(10)]);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (err) {
    throw err;
  }
}
