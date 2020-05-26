import React from "react";
import cx from "classnames";
import styles from "./Header.module.scss";
import SpinningLoader from "../SpinningLoader/SpinningLoader";

const Header = ({ cases, deaths, recovered }) => (
  <header>
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className={cx("title", styles["is-0"])}>COVID-19</h1>
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className={cx("heading", styles["larger-heading"])}>Cases</p>
                {cases ? (
                  <p className="title has-text-info">
                    {cases.toLocaleString()}
                  </p>
                ) : (
                  <SpinningLoader />
                )}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className={cx("heading", styles["larger-heading"])}>
                  Deaths
                </p>
                {deaths ? (
                  <p className="title has-text-danger">
                    {deaths.toLocaleString()}
                  </p>
                ) : (
                  <SpinningLoader />
                )}
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className={cx("heading", styles["larger-heading"])}>
                  Recoverd
                </p>
                {recovered ? (
                  <p className="title has-text-success">
                    {recovered.toLocaleString()}
                  </p>
                ) : (
                  <SpinningLoader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
);

export default Header;
