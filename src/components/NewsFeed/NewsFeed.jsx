import React, { useState } from "react";
import LineGraph from "../LineGraph/LineGraph";
import TimeLine from "../TimeLine/TimeLine";
import Chip from "../Chip/Chip";
// import FlashOnIcon from "@material-ui/icons/FlashOn";
// import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import "./NewsFeed.css";

function NewsFeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETF's",
    "Technology",
    "China",
    "Pharma",
  ]);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed__portfolio">
            <h1>140,000</h1>
            <p>+44.36 (+0.04%) Today</p>
          </div>
          <div className="newsfeed__chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
      </div>
      <div className="newsfeed__market__section">
        <div className="newsfeed__market__box">
          <p>Markets Closed</p>
          <h1>Happy Thanksgiving</h1>
        </div>
      </div>
      <div className="newsfeed__popularlists__section">
        <div className="newsfeed__popularlists__intro">
          <h1>Popular Lists</h1>
          <p>Show More</p>
        </div>
        <div className="newsfeed__popularlists__badges">
          {popularTopics.map((topic) => (
            <Chip
              label={topic}
              image={`https://avatars.dicebear.com/api/human/${topic}.svg`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
