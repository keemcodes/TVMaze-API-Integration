import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

export default function UserView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">User View</Alert>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Button onClick={props.handleLogoutSubmit}>Logout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
