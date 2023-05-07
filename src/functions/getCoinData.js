import axios from "axios";
export const getCoinData = (id) => {
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      console.log("FetchedCoinData >>>", response.data);
      return response.data;
    })
    .catch((error) => {
      console.log("Error Message >>>", error);
    });

  return myData;
};
