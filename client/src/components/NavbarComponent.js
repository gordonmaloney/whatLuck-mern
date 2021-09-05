import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import logo from "../images/whatluck-logo.png";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar dark expand="md" sticky="top" className="ps-3 navbar">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <Button outline color="primary" className="navbar-btn">
              <NavLink href="/">Home</NavLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button outline color="primary" className="navbar-btn">
              <NavLink href="/createpotluck">Create a potluck</NavLink>
            </Button>
          </NavItem>
          <NavItem>
            <Button outline color="primary" className="navbar-btn">
              <NavLink href="/Potlucklist">All potlucks</NavLink>
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
