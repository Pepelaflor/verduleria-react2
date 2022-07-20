import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';



export default function NavBar () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">La verduleria</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Nosotros</Nav.Link>
        <Nav.Link href="#catalogo">Catalogo</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
