import React, { Component } from "react";

import DefaultContent from "./DefaultContent";
import CardList from "./CardList";

export default class HomePage extends Component {
  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return <DefaultContent />;
    } else {
      return <CardList items={items} />;
    }
  }
}
