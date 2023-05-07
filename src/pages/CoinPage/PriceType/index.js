import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import React, { useState } from "react";
import "./style.css"

export default function TogglePriceType({priceType,handlePriceTypeChange}) {

    return (
      <div className="toggle-grp">
        <ToggleButtonGroup
          value={priceType}
          color="primary"
          exclusive
          onChange={handlePriceTypeChange}
          aria-label="text alignment"
          sx={{
            "&.Mui-selected": {
              color: "var(--blue)!important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "&.MuiToggleButtonGroup-grouped": {
              border: "1px solid !important",
              borderColor: "unset",
              color: "var(--blue)",
            },
            "&.MuiToggleButton-standard": {
              color: "var(--blue)!important",
            },
          }}
        >
          <ToggleButton
            value="prices"
            sx={{ color: "var(--blue)!important", borderColor: "var(--blue)" }}
          >
            Price
          </ToggleButton>
          <ToggleButton
            value="market_caps"
            sx={{ color: "var(--blue)!important", borderColor: "var(--blue)" }}
          >
            Market Cap
          </ToggleButton>
          <ToggleButton
            value="total_volumes"
            sx={{ color: "var(--blue)!important", borderColor: "var(--blue)" }}
          >
            Total Volume
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
}
