import React, { Component } from "react";
import { Link } from "react-router";


export default class NavBar extends Component {
  render() {
    const { content } = this.props;
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to={`/`}>Kept</Link>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li><Link className="btn" to={`/create`}>Text</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
