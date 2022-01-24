import React from 'react';
import { Container, Row, Col, Alert } from "react-bootstrap";


export default function UserView(props) {
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
