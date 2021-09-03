import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CreatePotluck from "./CreatePotluck";
//import YourPotlucks from "./yourpotlucks";
import PotluckList from "./PotluckList";

function MainMenu() {
  return (
    <BrowserRouter>
      {/*
      <Row>
        <Link to="/createpotluck">Create a potluck</Link>
        <Link to="/yourpotlucks">Your potlucks</Link>
      </Row>


      <Switch>
          <Route path="/createpotluck">
            <CreatePotluck />
          </Route>
          <Route path="/yourpotlucks">
            <YourPotlucks />
          </Route>
        </Switch>
      */}
      <CreatePotluck />
      <PotluckList />
    </BrowserRouter>
  );
}

export default MainMenu;
