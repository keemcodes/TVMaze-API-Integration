import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function Home(props) {
  return (
    <Container>
      <Row>
        <Col>
          <Alert variant="primary">{`${props.isAuth}`}</Alert>
        </Col>
      </Row>
    </Container>
  );
}
