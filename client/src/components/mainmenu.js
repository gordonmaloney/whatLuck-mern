import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CreatePotluck from "./CreatePotluck";
import PotluckList from "./PotluckList";
import PotluckStandalone from "./PotluckStandalone";
import { Container } from "@material-ui/core";
import { AppBar, Toolbar, Typography, Button, ButtonGroup } from "@material-ui/core";
import Home from "./Home";
import logo from '../images/whatluck-logo.png'

function MainMenu() {
  return (
    <BrowserRouter>
      <Container>
        <AppBar position="static">
          <Toolbar className="toolbar">
          <ButtonGroup aria-label="outlined primary button group">

          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/createpotluck">
            <Button>Create a potluck</Button>
          </Link>
          <Link to="/PotluckList">
            <Button>All potlucks</Button>
          </Link>
          </ButtonGroup>

          <img src={logo} className="appbar-logo" />

          </Toolbar>
        
        </AppBar>

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
          <Route path="/potlucks/:idCode" component={PotluckStandalone} XXX />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default MainMenu;
