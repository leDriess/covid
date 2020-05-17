import React, { useState } from "react";
import DataTableHeading from "./DataTableHeading";
import DataTableRows from "./DataTableRows";
import { compareValues, getKeyByValue } from "../../utils";
import styles from "./DataTable.module.scss";
import cx from "classnames";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSort,
  faSortUp,
  faSortDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSort, faSortUp, faSortDown, faSearch);

const DataTable = ({ data, dataLabels, filterColumn }) => {
  const dataTypes = Object.keys(dataLabels);
  const headings = dataTypes.map((heading) => dataLabels[heading]);

  const [tableData, setTableData] = useState(data);
  const [lastSort, setLastSort] = useState({ null: null });

  const sortData = (heading) => {
    const key = getKeyByValue(dataLabels, heading);
    const sortMode = lastSort[heading] === "desc" ? "asc" : "desc";
    const sortedData = [...tableData].sort(compareValues(key, sortMode));
    setLastSort({ [heading]: sortMode });
    setTableData(sortedData);
  };

  const [searchInputText, setSeachInputText] = useState("");

  const handleInputTextChange = (e) => {
    setSeachInputText(e.target.value);
  };

  return (
    <section className={cx("section")}>
      <div className="container">
        {filterColumn && (
          <div className="level">
            <div className="level-item">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder={
                      "Search " + dataLabels[filterColumn].toLowerCase() + "..."
                    }
                    onChange={handleInputTextChange}
                    value={searchInputText}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="search" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="container">
          <table
            className={cx(
              "table",
              "is-striped",
              "is-hoverable",
              "is-bordered",
              styles.table
            )}
          >
            <thead>
              <DataTableHeading
                headings={headings}
                sort={sortData}
                lastSort={Object.entries(lastSort)[0]}
              />
            </thead>
            <tbody>
              <DataTableRows
                data={tableData}
                keys={dataTypes}
                filter={[filterColumn, searchInputText.toUpperCase()]}
              />
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
