import React, { useState, useEffect } from "react";
import StatsRow from "../StatsRow/StatsRow";
import axios from "axios";
import { db } from "../../firebase";
import { key } from "../../api";
import "./Stats.css";

const BASE_URL = "https://finnhub.io/api/v1/quote?&symbol=";
const KEY_URL = `&token=${key}`;

// My Watched Stock List
const stocksList = [
  "AAPL",
  "MSFT",
  "TSLA",
  "FB",
  "BABA",
  "UBER",
  "DIS",
  "SBUX",
];

function Stats() {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  let testData = [];

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.forEach((doc) => {
        const promiseStock = getStocksData(doc?.data()?.ticker).then((res) => {
          tempData.push({
            id: doc.id,
            data: doc.data(),
            info: res.data,
          });
        });
        promises.push(promiseStock);
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const getStocksData = (stock) => {
    return axios.get(`${BASE_URL}${stock}${KEY_URL}`).catch((error) => {
      console.error("Error", error.message);
    });
  };

  // Get Stock Data from My Watched List
  useEffect(() => {
    getMyStocks();
    let promises = [];
    stocksList.forEach((stock) => {
      const promiseStock = getStocksData(stock).then((res) => {
        testData.push({
          name: stock,
          ...res.data,
        });
      });
      promises.push(promiseStock);
    });

    Promise.all(promises).then(() => {
      console.log(testData);
      setStocksData(testData);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p>Stocks</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats__header stats__lists">
          <p>Lists</p>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
