import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from '../images/whatluck-logo.png'

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md" className="ps-3" >
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/createpotluck">
                Create a potluck
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Potlucklist">
                All potlucks
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarBrand href="/"><img src={logo} className="appbar-logo" /></NavbarBrand>
      </Navbar>
    </div>
  );
}
