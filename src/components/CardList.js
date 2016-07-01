import React, { Component } from "react";
import { Panel } from "react-bootstrap";

import GlyphiconLink from "./GlyphiconLink";


export default class CardList extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="kept-list">
        {
          items.map((item, i) => {
            const panelHeader = (
              <h3>
                {item.title || "Untitled"}
                <GlyphiconLink className="delete" href="#" glyph="trash" />
                <GlyphiconLink className="edit" href="#" glyph="edit" />
              </h3>
            )
            
            return (
              <div className="kept-panel" key={i}>
                <Panel bsStyle="primary" header={panelHeader}>
                  <p>{item.text}</p>
                </Panel>
              </div>
            );
          })
        }
      </div>
    );
  }
}
