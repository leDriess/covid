import React from "react";

const DataTableHeading = ({ dataLabels }) => (
  <tr>
    {Object.keys(dataLabels).map((type) => (
      <td key={dataLabels[type]}>{dataLabels[type]}</td>
    ))}
  </tr>
);

export default DataTableHeading;
