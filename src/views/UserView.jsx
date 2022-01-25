import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function UserView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">
              User View, Location = {props.pageName(props.userLocation)}
            </Alert>
          </Col>
        </Row>
      </Container>
      <props.RenderLocation
        userLocation={props.userLocation}
        handleQueryChange={props.handleQueryChange}
        getSingleShow={props.getSingleShow}
        singleShow={props.singleShow}
        getActors={props.getActors}
        actors={props.actors}
        htmlRemover={props.htmlRemover}
      />
    </>
  );
}
