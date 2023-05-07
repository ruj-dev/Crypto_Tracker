import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./style.css";

function Loader() {
  return (
    <div className="loader-container">
      <CircularProgress></CircularProgress>
    </div>
  );
}

export default Loader;
