export const getStocks = () => {
  return fetch("https://district-money-backend.vercel.app/").then((resp) => {
    if (resp.status === 200) return resp.json();
    else throw new Error("Invalid response");
  });
};
