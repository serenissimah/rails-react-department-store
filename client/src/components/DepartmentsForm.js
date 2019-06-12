import React from 'react';
import axios from "axios";
import { Form, Header, } from "semantic-ui-react";

class DepartmentsForm extends React.Component {
  defaultValues = { name: "", category: "", };
  state = { ...this.defaultValues, };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/departments", { ...this.state, })
      .then( res => {
        this.props.history.push("/departments");
      })
    this.setState({ ...this.defaultValues, });
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  render() {
    return (
      <div>
        <Header as="h1">New Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Category"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default DepartmentsForm;

