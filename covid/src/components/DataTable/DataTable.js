import React, { useState } from "react";
import DataTableHeading from "./DataTableHeading";
import DataTableRows from "./DataTableRows";
import { compareValues, getKeyByValue } from "../../utils";

const DataTable = ({ data, dataLabels, filterColumn }) => {
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

  const [searchInputText, setSeachInputText] = useState("");

  const handleInputTextChange = (e) => {
    setSeachInputText(e.target.value);
  };

  return (
    <>
      {filterColumn && (
        <input onChange={handleInputTextChange} value={searchInputText} />
      )}
      <table>
        <thead>
          <DataTableHeading headings={headings} sort={sortData} />
        </thead>
        <tbody>
          <DataTableRows
            data={tableData}
            keys={dataTypes}
            filter={[filterColumn, searchInputText.toUpperCase()]}
          />
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
