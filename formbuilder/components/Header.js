import React from "react";
import { Link } from "react-router";

export default function Header(props) {
  return (
    <div className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">test Arsela</a>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
        <li><Link to="/form/useform">the form</Link></li>
          <li><Link to="/form/submitted">data stored</Link></li>
        </ul>
      </div>
    </div>
  </div>);
}
