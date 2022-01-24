import React from "react";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";

export default function UserView(props) {
  // useEffect(() => {
  //     fetch()
  
  // }, []);
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">User View, Location = {props.userLocation}</Alert>
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
