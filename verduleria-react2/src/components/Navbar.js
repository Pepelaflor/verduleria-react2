import { dom } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'
import { CartContext } from "../context/CartContext"
import { useContext } from "react"



export default function NavBar () {
    const {cartProducts} = useContext(CartContext)
    const cartCount = cartProducts.length
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">La verduleria</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/productos/category/Frutas">Frutas</Nav.Link>
        <Nav.Link as={Link} to="/productos/category/Verduras">Verduras</Nav.Link>
        <Nav.Link as={Link} to="/productos">Todos los productos</Nav.Link>
        {
          cartCount > 0 ? <Nav.Link className='carrito' as={Link} to="/cart"><CartWidget/></Nav.Link> : ''
        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
