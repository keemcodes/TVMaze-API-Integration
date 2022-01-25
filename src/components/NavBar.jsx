import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function NavBar(props) {
  let userEmail = JSON.parse(sessionStorage.getItem("auth-details"))?.email;
  let userLevel = JSON.parse(sessionStorage.getItem("auth-details"))?.level;
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
        {userEmail ? (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={() => props.handleLocationChange(1)}>
                  Show Search
                </Nav.Link>
                {userLevel === 2 ? (
                  <Nav.Link onClick={() => props.handleLocationChange(2)}>
                    Multi-Show Search
                  </Nav.Link>
                ) : (
                  ""
                )}
                <Nav.Link onClick={() => props.handleLocationChange(3)}>
                  People Search
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#home">{userEmail}</a>
              </Navbar.Text>
            </Navbar.Collapse>
            <Navbar.Collapse>
              <Button
                size="sm"
                style={{ marginLeft: 10 }}
                onClick={props.handleLogoutSubmit}
              >
                Logout
              </Button>
            </Navbar.Collapse>
          </>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}
