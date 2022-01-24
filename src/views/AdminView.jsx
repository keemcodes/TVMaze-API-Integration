import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

export default function AdminView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">Admin View</Alert>
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
