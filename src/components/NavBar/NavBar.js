import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"; // Importa Link de React Router Dom

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            The React Cave
          </Navbar.Brand>{" "}
          {/* Utiliza Link para navegar a la página de inicio */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>{" "}
            {/* Utiliza Link para navegar a la página de inicio */}
            <Nav.Link as={Link} to="/comics">
              Cómics
            </Nav.Link>{" "}
            {/* Utiliza Link para navegar a la página de cómics */}
            <Nav.Link as={Link} to="/contact">
              Contacto
            </Nav.Link>{" "}
            {/* Utiliza Link para navegar a la página de contacto */}
            <Nav.Link as={Link} to="/carrito">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
