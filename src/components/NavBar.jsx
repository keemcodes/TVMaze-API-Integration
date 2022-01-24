import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavBar(props) {
  let userEmail = JSON.parse(sessionStorage.getItem("auth-details"))?.email;
//   console.log(props.location)
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
            <Nav.Link onClick={() => props.handleLocationChange(1)}>Show Search</Nav.Link>
            <Nav.Link onClick={() => props.handleLocationChange(2)}>People Search</Nav.Link>
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
