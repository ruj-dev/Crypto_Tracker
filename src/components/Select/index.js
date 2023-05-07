import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.css"

export default function SelectDays({days,handleDaysChange}) {

  return (
    <div className="select-days">
      <p>Price change in</p>
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "&.MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
          "&": {
            "&& fieldset": {
              borderColor: "var(--white)",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="days"
        onChange={(event) => handleDaysChange(event)}
      >
        <MenuItem value={7}>7 days</MenuItem>
        <MenuItem value={30}>30 days</MenuItem>
        <MenuItem value={60}>60 days</MenuItem>
        <MenuItem value={90}>90 days</MenuItem>
        <MenuItem value={120}>120 days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
