import React from "react";
import DataTableHeading from "./DataTableHeading";
import DataTableRows from "./DataTableRows";

const DataTable = ({ data, dataLabels }) => {
  return (
    <table>
      <thead>
        <DataTableHeading dataLabels={dataLabels} />
      </thead>
      <tbody>
        <DataTableRows data={data} dataLabels={dataLabels} />
      </tbody>
    </table>
  );
};

export default DataTable;
