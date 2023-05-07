import axios from "axios";
export const getCoinPrices = (id, days,priceType) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      console.log("MarketChart >>>", response.data);
      console.log("MarketChart(Prices) >>>", days);
      // console.log("MarketChart(Market Caps) >>>", response.data.market_caps);
      // console.log(
      //   "MarketChart(Total Volumes) >>>",
      //   response.data.total_volumes
      // );
      console.log("dfe", response.data[priceType]);
      return response.data[priceType];
    })
    .catch((error) => {
      console.log("Error(MarketChart)", error);
    });

  return prices;
};
