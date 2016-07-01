import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";


export default class GlyphiconLink extends Component {
  render() {
    const { glyph } = this.props;
    return (
        <a {...this.props}><Glyphicon glyph={glyph} /></a>
    );
  }
}
