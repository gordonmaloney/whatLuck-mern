import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../images/whatluck-logo.png";
import { Button } from '@material-ui/core'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" sticky="top" className="ps-3 navbar">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Button variant="outlined" color="primary" className="navbar-btn">
              <Link to="/">
                <NavLink>Home</NavLink>
                </Link>
            </Button>
          </NavItem>
          <NavItem>
            <Button variant="outlined" color="primary" className="navbar-btn">
              <Link to="/createpotluck">
              <NavLink>Create a potluck</NavLink>
              </Link>
            </Button>
          </NavItem>
          <NavItem>
            <Button variant="outlined" color="primary" className="navbar-btn">
              <Link to="/Potlucklist">
                <NavLink>All potlucks</NavLink>
                </Link>
            </Button>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarBrand href="/">
        <img src={logo} className="appbar-logo" />
      </NavbarBrand>
    </Navbar>
  );
}
