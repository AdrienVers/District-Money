const STOCKS_URL = "https://district-money-backend.vercel.app/";

export const getStocks = async () => {
  return await fetch(STOCKS_URL).then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
