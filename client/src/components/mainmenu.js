import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CreatePotluck from "./CreatePotluck";
import PotluckList from "./PotluckList";
import PotluckStandalone from "./PotluckStandalone";
import { Container } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from "@material-ui/core";
import Home from "./Home";
import logo from '../images/whatluck-logo.png'
import NavbarComponent from "./NavbarComponent";
import Details from "./TechnicalDetails"
import AdminLogin from "./Admin/AdminLogin";


function MainMenu() {


  return (
    <BrowserRouter>
            <NavbarComponent />
       <Container>

     

        <Switch>
        <Route exact path="/">
            <Home />
            
          </Route>
          <Route path="/createpotluck">
            <CreatePotluck />
          </Route>
          <Route path="/PotluckList">
            <PotluckList />
          </Route>
          <Route path="/potlucks/:idCode" component={PotluckStandalone} />

          <Route exact path="/admin">
            <AdminLogin />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
        </Switch>
      </Container>

    </BrowserRouter>
  );
}

export default MainMenu;
