import React, { Component } from "react";

import Form from "react-jsonschema-form";
import { Button } from "react-bootstrap";

const cardSchema = {
  "type": "object",
  "title": "Create card",
  "properties": {
    "title": {
      "type": "string",
      "title": "Title",
      "description": "",
      "default": ""
    },
    "text": {
      "type": "string",
      "title": "Description",
      "description": "",
      "default": ""
    }
  },
  "required": [
    "title",
    "text"
  ]
};

const uiSchema = {

};

export default class CardForm extends Component {
  saveCard = ({formData}) => {
    const {edited, cardCreate, cardEdit} = this.props;
    const card = {...edited, ...formData};
    
    if (edited) {
      const {id, title, text} = card;
      cardEdit(id, title, text);
    } else {
      const {title, text} = card;
      cardCreate(title, text);
    }
  };
  
  render() {
    const { edited } = this.props;
    const schema = {...cardSchema};
    
    if (edited) {
      schema.title = "Edit card";
    }
    
    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={edited}
        onSubmit={this.saveCard}>
        <button type="submit" className="btn btn-info">
        {edited ? "Save" : "Create"}
        </button>
      </Form>
    );
  }
}
