import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      {props.signed_in &&
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AF</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink href="/availableapartments">Available Apartments</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/apartments">My Listings</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/addnew">Add New Apartment</NavLink>
          </NavItem>
          
          </Nav>
          <div>
          <NavLink href={props.sign_out_route}>Sign Out</NavLink>
          </div>
          </Collapse>
          </Navbar>
        }
        {!props.signed_in &&
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AF</NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
          <NavLink href="/availableapartments">Available Apartments</NavLink>
          </NavItem>
        </Nav>
          <div>
          <NavLink href={props.sign_in_route}>Sign In</NavLink>
          </div>
        </Navbar>
        }
          
    </div>
  );
}

export default Example;
