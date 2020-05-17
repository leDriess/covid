import React from "react";
import PropTypes from "prop-types";

const DataTableRows = ({ data, keys = Object.keys(data[0]), filter }) => {
  const [column, filterText] = filter;

  return data.map((item) => {
    return (
      (!item[column] || item[column].toUpperCase().includes(filterText)) && (
        <tr key={item.country}>
          {keys.map((key) => (
            <td key={item.country + key}>{item[key]}</td>
          ))}
        </tr>
      )
    );
  });
};

DataTableRows.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.arrayOf(PropTypes.string),
  filter: PropTypes.arrayOf(PropTypes.string),
};

export default DataTableRows;
