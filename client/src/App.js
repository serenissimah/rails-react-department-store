import React from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import Departments from "./components/Departments";
import DepartmentsForm from "./components/DepartmentsForm";
import DepartmentView from "./components/DepartmentView";
import ItemView from "./components/ItemView";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <NavBar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route exact path="/departments/:department_id/items" component={ItemView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)

export default App;
