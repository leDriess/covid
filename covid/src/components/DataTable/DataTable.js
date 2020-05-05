import React, { useState } from "react";
import DataTableHeading from "./DataTableHeading";
import DataTableRows from "./DataTableRows";
import { compareValues, getKeyByValue } from "../../utils";

const DataTable = ({ data, dataLabels }) => {
  const dataTypes = Object.keys(dataLabels);
  const headings = dataTypes.map((heading) => dataLabels[heading]);

  const [tableData, setTableData] = useState(data);
  const [lastSort, setLastSort] = useState({});

  const sortData = (heading) => {
    const key = getKeyByValue(dataLabels, heading);
    let sortMode = lastSort[key] === "desc" ? "asc" : "desc";
    const sortedData = [...tableData].sort(compareValues(key, sortMode));
    setLastSort({ [key]: sortMode });
    setTableData(sortedData);
  };

  return (
    <table>
      <thead>
        <DataTableHeading headings={headings} sort={sortData} />
      </thead>
      <tbody>
        <DataTableRows data={tableData} keys={dataTypes} />
      </tbody>
    </table>
  );
};

export default DataTable;
