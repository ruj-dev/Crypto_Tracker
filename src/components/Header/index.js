import React from 'react'
import "./style.css"
import { NavLink ,Link } from 'react-router-dom';
import Button from "../../Commons/Button/index.js";

import Switch from "@mui/material/Switch";
import TemporaryDrawer from './drawer.js'
const label = { inputProps: { "aria-label": "Switch demo" } };

function Header() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1 className="logo">
            Crypto Tracker <span className="sblue">.</span>
          </h1>
        </Link>

        <div className="links">
          <a href="/" className="link">
            <Switch className="toggle" {...label} defaultChecked />{" "}
          </a>

          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="/compare" className="link">
            <p>Compare</p>
          </Link>
          <Link to="/link" className="link">
            <p>Watchlist</p>
          </Link>
          <div className="link">
            <Link to="/dashboard">
              {" "}
              <Button
                text={"Dashboard"}
                onClick={() => {
                  console.log("click");
                }}
              />
            </Link>
          </div>

          <a href="/" className="link">
            <Button
              text={"Share"}
              outlined={true}
              onClick={() => {
                console.log("click");
              }}
            />
          </a>
        </div>
        <div className="mobile-drawer">
          <TemporaryDrawer />
        </div>
      </div>
    </>
  );
}

export default Header