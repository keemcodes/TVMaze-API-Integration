import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import SingleShowSearch from "../components/SingleShowSearch";
import ActorsSearch from "../components/ActorsSearch";

function RenderLocation(props) {
  switch (props.userLocation) {
    case 1:
      return (
        <SingleShowSearch
          handleQueryChange={props.handleQueryChange}
          getSingleShow={props.getSingleShow}
          singleShow={props.singleShow}
          htmlRemover={props.htmlRemover}
        />
      );
    case 3:
      return (
        <ActorsSearch
          handleQueryChange={props.handleQueryChange}
          getActors={props.getActors}
          actors={props.actors}
        />
      );
    default:
      return (
        <ActorsSearch
          handleQueryChange={props.handleQueryChange}
          getActors={props.getActors}
          actors={props.actors}
        />
      );
  }
};

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
      <RenderLocation 
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
