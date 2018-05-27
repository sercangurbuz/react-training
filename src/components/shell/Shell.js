import React from "react";
import Header    from "./Header";
const Shell = props => {
  return (
    <div className="container">
      <Header />
      <div className="container">{props.children}</div>
      <footer>"footer"</footer>
    </div>
  );
};

export default Shell;
