import React from "react";
import { Button, Checkbox, Header, Icon, } from "semantic-ui-react";

const Department = ({ id, name, description, updateDepartment, deleteDepartment, }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
    <Checkbox 
        onClick={() => updateDepartment(id)}
      />
      <Header as="h2" style={{ marginLeft: "15px", }}>{ name }</Header>
      <Header as="h3" style={{ marginLeft: "15px", }}>{ description }</Header>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      onClick={() => deleteDepartment(id)}
      style={{ marginLeft: "15px", }}
    >
      <Icon name="trash" />
    </Button>
  </div>
);

const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
  }
};

export default Department;