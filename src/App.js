import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import { getData, getNewsLink } from "./utils";
import DataTable from "./components/DataTable/DataTable";
import SpinningLoader from "./components/SpinningLoader/SpinningLoader";
import NewsPanel from "./components/NewsPanel/NewsPanel";
import { articles } from "./newsAPI";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainView from "./views/MainView/MainView";
import NewsView from "./views/NewsView/NewsView";
import Navigation from "./components/Navigation/Navigation";

const API = "https://coronavirus-19-api.herokuapp.com/countries/";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API, setData, { key: "cases", order: "desc" });
  }, []);

  return (
    <Router>
      <Header {...data[0]} />
      <Navigation />
      <Switch>
        <Route exact path="/">
          <MainView data={data} />
        </Route>
        <Route path="/news">
          <NewsView />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
