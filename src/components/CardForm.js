import React, { Component } from "react";

import { Button } from "react-bootstrap";

export default class CardForm extends Component {
  saveCard() {
    return () => {
      this.props.cardCreate("Lorem", "Ipsum");
    };
  }
  render() {
    return (
      <Button onClick={this.saveCard()}>Save</Button>
    );
  }
}
