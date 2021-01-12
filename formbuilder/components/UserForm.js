import React, { Component } from "react";
import Form from "react-jsonschema-form";
import config from "../config";

export default class UserForm extends Component {
  componentDidMount() {
    // If the schema properties is empty, then try to load the schema from the
    if (Object.keys(this.props.schema.properties).length === 0) {
      this.props.loadSchema(this.props.params.id, (data) => {
        document.title = data.schema.title;
      });
    }
  }
  render() {
      const title = this.props.schema.title;
      console
      const onSubmit = ({formData}) => {
      this.props.history.push("form/data-sent");
      console.log(formData);
      console.log(this.props);
      this.props.submitRecord(title,formData, () => {
        console.log("success");
        //console.log(formData);
       // console.log(this.props.params.id);
      });
    };
    return (<div className="narrow">
      <Form schema={this.props.schema} uiSchema={this.props.uiSchema}
        onSubmit={onSubmit}/>
      <p className="small">This form was created with the Arsela test</p>
    </div>
  );
  }
}

