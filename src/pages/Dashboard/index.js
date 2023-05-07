import React from 'react'
import Header from '../../components/Header'
import TabsComponent from '../../components/TabsComponent'
import axios from "axios";
import {useState, useEffect } from 'react';
import Search from '../../components/Search';
import Pagination from "@mui/material/Pagination";
import { color } from 'framer-motion';
import Stack from "@mui/material/Stack";
import PaginationControlled from '../../components/Pagination';
import PaginationComponent from '../../components/Pagination';
import "./style.css";
function Dashboard() {
  //https://api.coingecko.com/api/v3/coins/list
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  var filteredCoins = coins.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase()) ||
    items.symbol.toLowerCase().includes(search.toLowerCase()))
  const style = {
    color: "var(--white)!important",
    
  };
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log("response", response);
        setCoins(response.data);
       
        setPaginatedCoins(response.data.slice(0, 10));
      }).catch((error) => {console.log("error", error)});
  }, []);
const handlePageChange = (event, value) => {
  setPage(value);
  // Value = new page number
  var initialCount = (value - 1) * 10;
  setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
};
  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search ? filteredCoins : paginatedCoins} />
      {!search && (
        <PaginationComponent page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
}

export default Dashboard