import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { getData } from "./utils";
import DataTable from "./components/DataTable/DataTable";

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
    getData(API, setData);
  }, []);

  return (
    <Router>
      <div className="App">
        {data.length !== 0 && <DataTable data={data} dataLabels={dataLabels} />}
      </div>
    </Router>
  );
}

export default App;
