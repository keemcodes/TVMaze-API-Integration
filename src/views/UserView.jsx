import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
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
  const [show, setShow] = useState();

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function getSingleShow() {
    if (query === "") return;
    fetch(`${props.rootURL}/singlesearch/shows?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setShow(response);
      });
  }
  console.log(query);
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
            {show !== undefined ? (
              <Card style={{ margin: "auto" }}>
                <Card.Body>
                  <Card.Title>{show?.name}</Card.Title>
                  <Card.Text>{ReactHtmlParser(show?.summary)}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Genres: {show?.genres.join(", ")}
                  </ListGroupItem>
                  <ListGroupItem>Premiered: {show?.premiered}</ListGroupItem>
                  <ListGroupItem>
                    Ended Date/Status: {show?.ended ?? "Running"}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={show?.url}>Show Page</Card.Link>
                  <Card.Link href={show?._links.previousepisode?.href}>
                    Last Episode
                  </Card.Link>
                </Card.Body>
                <Card.Img variant="bottom" src={show?.image?.original} />
              </Card>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
