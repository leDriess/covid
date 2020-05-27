import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import styles from "./DataTable.module.scss";

const DataTableHeading = ({ headings, sort, lastSort }) => {
  const [sortedHeading, sortMode] = lastSort;
  const sortDirection = sortMode === "desc" ? "down" : "up";

  return (
    <tr>
      {headings.map((heading) => {
        const iconProps =
          heading === sortedHeading
            ? {
                icon: `sort-${sortDirection}`,
                className: cx(styles.icon, styles.active),
              }
            : { icon: "sort", className: styles.icon };
        return (
          <th key={heading} onClick={() => sort(heading)}>
            {heading}
            <FontAwesomeIcon {...iconProps} />
          </th>
        );
      })}
    </tr>
  );
};

DataTableHeading.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.string).isRequired,
  sort: PropTypes.func.isRequired,
  lastSort: PropTypes.array.isRequired,
};

export default DataTableHeading;
