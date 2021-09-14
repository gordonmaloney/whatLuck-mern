import React from "react";
import logo from "../images/whatluck-logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export default function Home() {
  return (
    <>
      <div className="homeWrapper">
        <center>
          <img
            src={logo}
            style={{ maxWidth: 500 }}
            width="85%"
            height="auto"
            id="homeLogo"
            alt="whatLuck logo"
          />
        </center>
        <div id="homeIntro">
          <h3>whatLuck is the one-stop potluck organising app</h3>
          <br />
          <p>
            Having a potluck, barbeque, or friends round for drinks and snacks?
            Then you're in the right place.
          </p>
          <p>
            Simply <Link to="/createpotluck">Create a Potluck</Link>, fill in
            the details, and share it with your friends. It is <em>that</em>{" "}
            easy.
          </p>
          <p>
            No more barbeques ruined by everyone bringing buns. No more hundred
            tubs of hummous. No more ten thousand spoons when all you need is a
            knife.
          </p>
        </div>
      </div>
    </>
  );
}
