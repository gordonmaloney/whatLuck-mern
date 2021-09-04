import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CreatePotluck from "./CreatePotluck";
//import YourPotlucks from "./yourpotlucks";
import PotluckList from "./PotluckList";
import PotluckStandalone from "./PotluckStandalone";

function MainMenu() {
  return (
    <BrowserRouter>
      
      
        <Link to="/createpotluck">Create a potluck</Link>
        <Link to="/PotluckList">Potlucks</Link>
      


      <Switch>
          <Route path="/createpotluck">
            <CreatePotluck />
          </Route>
          <Route path="/PotluckList">
            <PotluckList />
          </Route>
          <Route path="/potlucks/:idCode" component={PotluckStandalone} XXX />
        </Switch>

    </BrowserRouter>
  );
}

export default MainMenu;
