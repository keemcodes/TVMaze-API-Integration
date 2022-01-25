import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  InputGroup,
  FormControl,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function UserView(props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState();

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function getSingleShow() {
    fetch(`${props.rootURL}/singlesearch/shows?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResults(response);
      });
  }
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Alert variant="primary">
              User View, Location = {props.userLocation}
            </Alert>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search show"
              aria-label="Search show"
              aria-describedby="basic-addon2"
              onChange={handleQueryChange}
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              onClick={getSingleShow}
            >
              Search
            </Button>
          </InputGroup>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
