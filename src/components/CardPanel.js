import React, { Component } from "react";
import { Button } from "react-bootstrap";

import { Panel } from "react-bootstrap";

import GlyphiconLink from "./GlyphiconLink";


export default class CardForm extends Component {
  openEdit(id) {
    return () => {
      this.props.openEdit(id);
    };
  }

  deleteCard(id) {
    return () => {
      this.props.cardDelete(id);
    };
  }

  render() {
    const { item } = this.props;
    const panelHeader = (
      <h3>
        {item.title || "Untitled"}
        <GlyphiconLink onClick={this.deleteCard(item.id)} className="delete" glyph="trash" />
        <GlyphiconLink onClick={this.openEdit(item.id)} className="edit" glyph="edit" />
      </h3>
    );

    return (
      <div className="kept-panel" key={item.id}>
        <Panel bsStyle="primary" header={panelHeader}>
          <p>{item.text}</p>
        </Panel>
      </div>
    );
  }
}
