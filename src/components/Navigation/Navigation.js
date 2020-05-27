import React from "react";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <nav className="breadcrumb is-medium is-centered">
      <ul>
        <NavigationLink exact to="/" activeClass="is-active">
          Cases
        </NavigationLink>
        <NavigationLink to="/news" activeClass="is-active">
          News
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default Navigation;
