import React from "react";
import cx from "classnames";
import Proptypes from "prop-types";
import styles from "./SpinningLoader.module.scss";

const SpinningLoader = ({ size = "1" }) => (
  <div className={cx(styles[`size-${size}x`], "loader", "is-loading")}></div>
);

SpinningLoader.propTypes = {
  size: Proptypes.string,
};

export default SpinningLoader;
