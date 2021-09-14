import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import logo from "../images/whatluck-logo.png";
import { Button } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar dark expand="md" sticky="top" className="ps-3 navbar">
        <NavbarToggler onClick={toggle} />

        <div className="appbar-logo-container collapsed" href="/">
          <img src={logo} className="appbar-logo" alt="whatLuck logo" />
        </div>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button
                variant="outlined"
                color="primary"
                className="navbar-btn"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/">
                  <NavLink>Home</NavLink>
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                variant="outlined"
                color="primary"
                className="navbar-btn"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/createpotluck">
                  <NavLink>Create a potluck</NavLink>
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                variant="outlined"
                color="primary"
                className="navbar-btn"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/Potlucklist">
                  <NavLink>All potlucks</NavLink>
                </Link>
              </Button>
            </NavItem>
            
            <UncontrolledDropdown nav >
              
              <DropdownToggle  className="dropdownNavlink"   nav>
              <Button
                      variant="outlined"
                      color="primary"
                      className="navbar-btn dropdownNav"
                      
                    ><NavLink>More <ArrowDropDownIcon style={{marginRight: "-12px"}} /></NavLink></Button>
              </DropdownToggle>

              <DropdownMenu right>
              <DropdownItem>
                  <NavItem>
                    <Button
                      variant="outlined"
                      color="primary"
                      className="navbar-btn nav-item"
                      fullWidth
                    >
                      <Link to="/admin">
                        <NavLink>Admin Login</NavLink>
                      </Link>
                    </Button>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      className="navbar-btn nav-item"
                    >
                      <Link to="/details">
                        <NavLink>Technical Details</NavLink>
                      </Link>
                    </Button>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      className="navbar-btn nav-item nav-link"
                    >
                      <a
                        href="https://www.paypal.com/paypalme/gordonmaloney"
                        target="_blank"
                      >
                        <NavLink>Donate via Paypal</NavLink>
                      </a>
                    </Button>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>

        <div className="appbar-logo-container notcollapsed" href="/">
          <img src={logo} className="appbar-logo" alt="whatLuck logo" />
        </div>
      </Navbar>
    </>
  );
}
