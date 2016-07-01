import React, { Component } from "react";

import { Button, Jumbotron } from "react-bootstrap";


export default class DefaultContent extends Component {
  render() {
    // const {} = this.props;
    return (
      <Jumbotron className="kept-default">
        <h1>Welcome to Kept</h1>
        <p>Your list is currently empty.</p>
        <p>You can create
          a <a className="new-text" href="#" onClick={this.handleClickNewText}>Text</a>,
          a <a className="new-todo" href="#" onClick={this.handleClickNewTodo}>Todo</a> or
          <Button bsStyle="success" bsSize="large"
                  onClick={this.handleClickLoadSamples}>Load samples</Button>.
        </p>
      </Jumbotron>
    );
  }
}
