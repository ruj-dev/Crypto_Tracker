import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUp';
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDown";
function Grid({ coin }, key) {
   
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className=
      {`grid-div ${coin.price_change_percentage_24h < 0 && "grid-div-red"}`}>
      <div className="info-flex">
        <img src={coin.image} className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </div>
      {coin.price_change_percentage_24h > 0 ? (
        <div className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div> 
          <div className="icon-chip">
            <TrendingUpRoundedIcon />
          </div>
        </div>
      ) : (
        <div className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red">
            <TrendingDownRoundedIcon />
          </div>
        </div>
      )}
      <div className="price-info-container">
        <h3
          className="price"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
        <p className="total-volume">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="marketcap">
          Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
      </div>
      </Link>
  );
  
}

export default Grid