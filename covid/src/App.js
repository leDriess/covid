import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bulma";
import "./App.scss";
import { getData, getNewsLink } from "./utils";
import DataTable from "./components/DataTable/DataTable";
import SpinningLoader from "./components/SpinningLoader/SpinningLoader";
import NewsPanel from "./components/NewsPanel/NewsPanel";
import { articles } from "./newsAPI";

const API = "https://coronavirus-19-api.herokuapp.com/countries/";
const dataLabels = {
  country: "Country",
  cases: "Total cases",
  todayCases: "New cases",
  deaths: "Deaths",
  todayDeaths: "New deaths",
  recovered: "Total recovered",
};

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API, setData, { key: "cases", order: "desc" });
    getData(getNewsLink(), console.log);
    // getNews();
  }, []);

  return (
    <Router>
      <div className="">
        {/* {data.length !== 0 ? (
          <DataTable
            data={data}
            dataLabels={dataLabels}
            filterColumn={"country"}
          />
        ) : (
          <SpinningLoader />
        )} */}
        <div>
          <NewsPanel newsList={articles} />
        </div>
      </div>
    </Router>
  );
}

export default App;
