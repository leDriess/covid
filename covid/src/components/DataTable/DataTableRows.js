import React from "react";

const DataTableRows = ({ data, dataLabels }) => {
  const keys = Object.keys(dataLabels);

  return data.map((item) => {
    return (
      <tr key={item.country}>
        {keys.map((key) => (
          <td key={item.country + key}>{item[key]}</td>
        ))}
      </tr>
    );
  });
};

export default DataTableRows;
