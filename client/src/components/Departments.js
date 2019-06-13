import React, {useState, useEffect, } from 'react'
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Card, Header, Icon, } from "semantic-ui-react";

const Departments = (props) => {
  const [departments, setDepartments] = useState([]);

  useEffect ( () => {
      axios.get('api/departments')
      .then( res => {
          setDepartments( res.data);
      })
  }, []);

  const deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then(res=>{
        let values = (departments.filter( department => department.id !== id))
        setDepartments(values)
      });
      renderDepartments(); 
  }

  const renderDepartments = () => {
    if (departments.length <= 0)
        return <Header as='h2'> - No Departments Available - </Header>
    return departments.map( department => (
        <Card key={department.id}>
            <Card.Content>
                <Card.Header> {department.name}</Card.Header>
                <Card.Description>{department.category}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as={Link} to={`/departments/${department.id}`} color='blue'>  
                View
                </Button>
                <Button icon color="red" onClick={() => deleteDepartment(department.id)}> 
                <Icon name="trash"/> Delete
                </Button>
            </Card.Content>
        </Card>
    ))
};

  return (
    <div>
        <Header as='h1'> Departments</Header>
        <br />
        <Button as={Link} to='/departments/new' color ='blue'>
            Add Department
        </Button>
        <br />
        <br />
        <Card.Group>
            {renderDepartments()}
        </Card.Group>
    </div>
  )
  };


export default Departments;


