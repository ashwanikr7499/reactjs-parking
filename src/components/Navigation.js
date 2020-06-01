import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    

    return (
      <Navbar bg="dark" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {/* 1 */}
            <NavLink className="mr-3 p-2  text-white" to="/">
              Home
            </NavLink>
           
            {/* 2 */}
            <NavLink className="mr-3 p-2  text-white" to="/vehicle">
              VEHICLE INFO
            </NavLink>
           
            {/* 3 */}
            <NavLink className="mr-3 p-2  text-white" to="/slots">
              SLOTS INFO
            </NavLink>
          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
