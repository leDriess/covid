import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const NavigationLink = ({ to, exact, children, activeClass }) => {
  const match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <li className={match ? activeClass : null}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavigationLink;
