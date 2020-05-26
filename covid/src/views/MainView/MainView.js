import React from "react";
import DataTable from "../../components/DataTable/DataTable";
import SpinningLoader from "../../components/SpinningLoader/SpinningLoader";

const dataLabels = {
  country: "Country",
  cases: "Total cases",
  todayCases: "New cases",
  deaths: "Deaths",
  todayDeaths: "New deaths",
  recovered: "Total recovered",
};

const MainView = ({ data }) => (
  <section className="section">
    <div className="columns">
      <div className="column is-three-fifths is-offset-one-fifth">
        <h3 className="title is-2">Cases</h3>
        <p className="subtitle is-5">
          all data comes from{" "}
          <a href="https://www.worldometers.info/coronavirus">
            Worldometer.info
          </a>{" "}
          thanks to{" "}
          <a href="https://github.com/javieraviles/covidAPI">CovidAPI</a>
        </p>
      </div>
    </div>
    {data.length !== 0 ? (
      <DataTable data={data} dataLabels={dataLabels} filterColumn={"country"} />
    ) : (
      <div className="section">
        <div className="container">
          <div className="level">
            <div className="level-item">
              <SpinningLoader size="4" />
            </div>
          </div>
        </div>
      </div>
    )}
  </section>
);

export default MainView;
