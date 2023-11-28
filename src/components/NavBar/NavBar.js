import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            The React Cave
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dc">
              DC
            </Nav.Link>
            <Nav.Link as={NavLink} to="/marvel">
              Marvel
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dark-horse">
              Dark Horse
            </Nav.Link>
            <Nav.Link as={NavLink} to="/otros">
              Otros
            </Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
