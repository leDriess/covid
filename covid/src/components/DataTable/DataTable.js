import React from "react";

const DataTable = ({ data, dataLabels }) => {
  const renderTableHeadings = () => (
    <tr>
      {Object.keys(dataLabels).map((type) => (
        <td>{dataLabels[type]}</td>
      ))}
    </tr>
  );

  const renderTableRows = () => {
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

  return (
    <table>
      <thead>{renderTableHeadings()}</thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default DataTable;
