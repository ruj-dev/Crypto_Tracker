import React, { useEffect, useState } from 'react'
import "./style.css"
import Header from '../../components/Header'
import SelectCoins from '../../components/SelectCoins/SelectCoins'
import SelectDays from '../../components/Select'
import { getCoinData } from '../../functions/getCoinData'
import { getCoinPrices } from "../../functions/getCoinPrices";
import { coinObject } from '../../functions/coinObject'
import Loader from '../../components/Loader'
import List from "../../components/List";
import CoinInfo from '../../components/CoinInfo/CoinInfo'
import LineChart from '../../components/Chart'
import { convertDate } from '../../functions/convertDate'
import { settingChartData } from '../../functions/settingChartData'
function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(7);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  useEffect(() => {
     
      getData();
    
  }, []);
  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1);
    const data2 = await getCoinData(crypto2);
    if (data1) {
      coinObject(setCrypto1Data, data1);
      
    }
     if (data2) {
       coinObject(setCrypto2Data, data2);
     }
     if (data1&&data2) {
       
       const prices1 = await getCoinPrices(crypto1, days,priceType);
       const prices2 = await getCoinPrices(crypto2, days, priceType);
       if (prices1.length > 0 && prices2.length > 0) {
         console.log("price.........fetched", prices1.map((price) => convertDate(price)));

                 setChartData({
                   labels: ["4"],
                   datasets: [
                     {
                       label: "bitcoin",
                       data: prices1.map((price) => price[1]),
                       borderColor: "#3a80e9",
                       borderWidth: 2,
                       fill: true,
                       tension: 0.25,
                       backgroundColor: "rgba(58,128,233,0.1)",
                       pointRadius: 0,
                     },
                   ],
                 });
         setIsLoading(false);
       }
    }
    
  }
    function handleDaysChange(event) {
      setDays(event.target.value)
  }
  const handleCoin1Change = async (event) => {
      setIsLoading(true);
     setCrypto1(event.target.value);
const newcrypto1 = event.target.value;
     console.log(event.target.value);
 setIsLoading(true);
 const data1 = await getCoinData(newcrypto1);
 
 if (data1) {
   coinObject(setCrypto1Data, data1);
    const prices1 = await getCoinPrices(newcrypto1, days, priceType);
 if (prices1.length > 0) {
   console.log("changedcoinPrices1", crypto1Data);
   
   setIsLoading(false);
 }   
 }
     

  };
  const handleCoin2Change = async (event) => {
        setIsLoading(true);
       setCrypto2(event.target.value);
const newcrypto2 = event.target.value;
       console.log(event.target.value);
      
       const data2 = await getCoinData(newcrypto2);

       if (data2) {
         coinObject(setCrypto2Data, data2);
         const prices2 = await getCoinPrices(newcrypto2, days, priceType);
         if (prices2.length > 0) {
           console.log("changedcoinPrices2", crypto2Data);
           setIsLoading(false);
         }
       }
  };
  console.log("milgayadatataaaaaa", chartData);
    return (
      <div>
        <Header />
        {isLoading ? (
          <Loader></Loader>
        ) : (
          <>
            <div className="coins-days-flex">
              <SelectCoins
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoin1Change={handleCoin1Change}
                handleCoin2Change={handleCoin2Change}
              />
              <SelectDays
                days={days}
                handleDaysChange={handleDaysChange}
              ></SelectDays>
            </div>
            <div className="grey-wrapper">
              <List coin={crypto1Data}></List>
            </div>
            <div className="grey-wrapper">
              <List coin={crypto2Data}></List>
              </div>
              <div className='grey-wrapper'>
                 <LineChart chartdata={chartData} /> 
              </div>
            <CoinInfo
              
              name={crypto1Data.name}
              description={crypto1Data.desc}
            ></CoinInfo>
            <CoinInfo
              
              name={crypto2Data.name}
              description={crypto2Data.desc}
            ></CoinInfo>
          </>
        )}
      </div>
    );
  }


export default ComparePage
