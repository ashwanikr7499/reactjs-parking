import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
export class Navigation extends Component
{
    render()
    {
        return (
          <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavLink className=" p-2  text-white" to="/">
                  Home
                </NavLink>
                <NavLink className=" p-2  text-white" to="/vehicle">
                  Vehicle
                </NavLink>
                <NavLink className=" p-2  text-white" to="/slots">
                  VehicleSpace
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}