import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "../Grid";
import "./style.css";
import List from "../List";


export default function TabsComponent({ coins}) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
  }

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            variant="fullWidth"
            aria-label="lab API tabs example"
          >
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
          </TabList>
        </Box>
        <TabPanel value="grid">
          <div className="flex-grid">
            {/*   {<p>{coins.map((coin, i) => {
              return <p>{coin.name}</p>
              
            })}</p> } */}
            {coins.map((item, i) => {
              return <Grid coin={item} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, i) => {
              return <List coin={item} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
