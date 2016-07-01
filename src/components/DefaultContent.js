import React, { Component } from "react";

import { Link } from "react-router";
import { Jumbotron } from "react-bootstrap";


export default class DefaultContent extends Component {
  render() {
    // const {} = this.props;
    return (
      <Jumbotron className="kept-default">
        <h1>Welcome to Kept</h1>
        <p>Your list is currently empty.</p>
        <p>You can create
          a <Link className="new-text" to={`/create`}>Text</Link>.
        </p>
      </Jumbotron>
    );
  }
}
