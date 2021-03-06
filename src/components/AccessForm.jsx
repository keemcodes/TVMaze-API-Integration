import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function AccessForm(props) {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={props.handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={props.handleEmailChange}
                />
                <Form.Text className="text-muted">
                  Login accounts credentials are listed <a href="https://github.com/keemcodes/TVMaze-API-Integration#user-accounts">here</a>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={props.handlePasswordChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <br />
      </Container>
    </section>
  );
}
