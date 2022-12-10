const STOCKS_URL = "https://district-money-backend.vercel.app/";
//const STOCKS_URL = "http://localhost:8000/";

export const getStocks = async () => {
  return await fetch(STOCKS_URL).then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
