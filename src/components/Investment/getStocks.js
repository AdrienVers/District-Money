export const getStocks = () => {
    return fetch("http://localhost:8000/").then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw new Error("Invalid response");
    });
  };