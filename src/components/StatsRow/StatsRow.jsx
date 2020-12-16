import React from "react";
import "./StatsRow.css";
import StockChart from "../../stock.svg";
import { db } from "../../firebase";

function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  const buyStock = () => {
    db.collection("myStocks")
      .where("ticker", "==", props.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          //update the record
          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({ shares: (doc.data().shares += 1) });
          });
        } else {
          //Add a new record
          db.collection("myStocks").add({
            ticker: props.name,
            shares: 1,
          });
          console.log("Not available");
        }
      });
  };
  return (
    <div className="row" onClick={buyStock}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.shares && props.shares + "shares"}</p>
      </div>
      <div className="row__chart">
        <img src={StockChart} height={16} alt="StockChart" />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p className="row_percentage">{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
