import React from 'react'
import "./style.css"
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUp";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDown";
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function List({ coin }, { i }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <td className="list-td-image">
          <Tooltip title="Logo">
            <img src={coin.image} className="coin-logo" />
          </Tooltip>
        </td>
        <td>
          <td className="list-name-col">
            <Tooltip title="Symbol">
              <p className="list-coin-symbol">{coin.symbol}</p>
            </Tooltip>

            <Tooltip title="Coin name">
              <p className="list-coin-name">{coin.name}</p>
            </Tooltip>
          </td>
        </td>
        {coin.price_change_percentage_24h > 0 ?(
          <td className="list-chip-flex">
            <Tooltip title="Percentage change">
              <td className="list-price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </Tooltip>

            <td className="list-icon-chip">
              <Tooltip title="Chart">
                <TrendingUpRoundedIcon />
              </Tooltip>
            </td>
          </td>
        ) : (
          <td className="list-chip-flex">
            <Tooltip title="Percentage change">
              <td className="price-chip chip-red price-chip-td">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </Tooltip>

            <Tooltip title="Chart">
              <td className="icon-chip chip-red">
                <TrendingDownRoundedIcon />
              </td>
            </Tooltip>
          </td>
        )}
        <td className="price-info-container">
          <Tooltip title="Current price">
            <h3
              className="price td-price"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
        </td>
        <div className="list-volume">
          <td>
            <Tooltip title="Volume">
              <p className="total-volume td-volume">
                {coin.total_volume.toLocaleString()}
              </p>
            </Tooltip>
          </td>
        </div>
        <td>
          <Tooltip title="Market Cap">
            <p className="total-volume td-volume list-marketcap">
              ${coin.market_cap.toLocaleString()}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List