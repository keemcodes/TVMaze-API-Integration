import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar() {
  let userEmail = JSON.parse(sessionStorage.getItem("auth-details"))?.email;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TV Maze API Integration
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {userEmail? <>Signed in as: <a href="#">{userEmail}</a></> : ""}
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
