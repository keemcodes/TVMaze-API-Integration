import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export default function AdminView(props) {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">Admin View, Location = {props.pageName(props.userLocation)}</Alert>
          </Col>
        </Row>
      </Container>
      <props.RenderLocation
        userLocation={props.userLocation}
        handleQueryChange={props.handleQueryChange}
        getSingleShow={props.getSingleShow}
        singleShow={props.singleShow}
        getShows={props.getShows}
        shows={props.shows}
        getActors={props.getActors}
        actors={props.actors}
        htmlRemover={props.htmlRemover}
      />
    </>
  );
}
