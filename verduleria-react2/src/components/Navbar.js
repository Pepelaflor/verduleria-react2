import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';



export default function NavBar () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand href="/">La verduleria</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/nosotros">Nosotros</Nav.Link>
        <Nav.Link href="/productos">Catalogo</Nav.Link>
        <Nav.Link className='carrito' href="#carrito"><CartWidget/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
