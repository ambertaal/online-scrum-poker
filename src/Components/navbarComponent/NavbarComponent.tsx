import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";

export const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar navbar-dark bg-primary" expand="md">
      <NavbarBrand href="/" className="mr-auto" style={{ marginLeft: "16px" }}>
        Online Scrum Poker
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="mr-2" />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink to="/">Add user</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/estimations">Estimations Page</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
