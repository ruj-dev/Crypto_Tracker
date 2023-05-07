import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoinData } from "../../functions/getCoinData";
import { convertDate } from "../../functions/convertDate";
import { getCoinPrices } from "../../functions/getCoinPrices";
import { settingChartData } from "../../functions/settingChartData";
import { coinObject } from "../../functions/coinObject";
import LineChart from "../../components/Chart";
import Header from "../../components/Header";
import List from "../../components/List";
import Loader from "../../components/Loader";
import SelectDays from "../../components/Select";
import TogglePriceType from "./PriceType";
import CoinInfo from "../../components/CoinInfo/CoinInfo";
function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coindata, setCoinData] = useState();
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});
    const [priceType, setPriceType] = useState("prices");


  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days,priceType);
      if (prices) {
        console.log("successfirst",prices);

        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              label:"bitcoin",
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              borderWidth: 2,
              fill: true,
              tension: 0.25,
              backgroundColor: "rgba(58,128,233,0.1)",
              pointRadius: 0,
            },
          ],
        });
        console.log("chartdata", chartData);
        setIsLoading(false);
      }
    }
  }
    

   const handleDaysChange = async (event,newType) => {
     setIsLoading(true);
     setDays(event.target.value);
     const prices = await getCoinPrices(id, event.target.value,priceType);
     if (prices.length > 0) {
       console.log("success");
       settingChartData(setChartData, prices);
       console.log("chartdata", chartData);
       setIsLoading(false);
     }
  };
    const handlePriceTypeChange = async(event, newType) => {
      setPriceType(newType);
      console.log("newtype",newType)
      console.log("NewType >>>", newType);
      setIsLoading(true);
       const prices = await getCoinPrices(id, days,newType);
       if (prices.length > 0) {
         console.log("successhandlepricechange",prices);
         settingChartData(setChartData, prices,priceType);
         console.log("chartdatahandlepricetype", chartData);
         setIsLoading(false);
       }
    };



  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Header></Header>
          <div className="grey-wrapper">
            <List coin={coindata}></List>
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            <LineChart chartData={chartData}></LineChart>

           
          </div>
          <div className="grey-wrapper">
            
            <CoinInfo name={coindata.name} description={coindata.desc} />
          </div>
        </>
      )}
    </div>
  );
}

export default CoinPage;
