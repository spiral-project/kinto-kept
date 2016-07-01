import React, { Component } from "react";

import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    const { content } = this.props;
    return <div>
      <NavBar />
      {content || <p>Default.</p>}
    </div>;
  }
}
