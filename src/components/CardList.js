import React, { Component } from "react";

import CardPanel from "../containers/CardPanel";


export default class CardList extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="kept-list">
        { items.map((item, i) => <CardPanel item={item} key={i} />) }
      </div>
    );
  }
}
