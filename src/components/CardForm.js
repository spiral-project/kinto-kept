import React, { Component } from "react";

import { Button } from "react-bootstrap";

export default class CardForm extends Component {
  saveCard() {
    return () => {
      this.props.cardCreate("Lorem", "Ipsum");
    };
  }
  render() {
    const { edited } = this.props;
    return (
      <div>
        <input type="text" value={edited.title}/>
        <input type="text" value={edited.text}/>
        <Button onClick={this.saveCard()}>Save</Button>
      </div>
    );
  }
}
