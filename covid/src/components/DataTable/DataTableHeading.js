import React from "react";
import PropTypes from "prop-types";

const DataTableHeading = ({ headings, sort }) => (
  <tr>
    {headings.map((heading) => (
      <td key={heading} onClick={() => sort(heading)}>
        {heading}
      </td>
    ))}
  </tr>
);

DataTableHeading.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string),
};

export default DataTableHeading;
