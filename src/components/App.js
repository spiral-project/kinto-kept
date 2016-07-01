import React, { Component } from "react";

import DefaultContent from "./DefaultContent";

export default class HomePage extends Component {
  render() {
    const { content } = this.props;
    return <div>
      {content || <p>Default.</p>}
    </div>;
  }
}
