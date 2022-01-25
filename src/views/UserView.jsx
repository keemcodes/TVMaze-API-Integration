import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  InputGroup,
  Form,
  FormControl,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function UserView(props) {
  const [query, setQuery] = useState("");
  const [singleShow, setSingleShow] = useState();
  const [actors, setActors] = useState();
  const htmlRemover = /(<([^>]+)>)/gi;
  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function getSingleShow(e) {
    e.preventDefault();
    if (query === "") return;
    fetch(`${props.rootURL}/singlesearch/shows?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        setSingleShow(response);
      });
  }
  function getActors(e) {
    e.preventDefault();
    if (query === "") return;
    fetch(`${props.rootURL}/search/people?q=${query}`)
      .then((response) => response.json())
      .then((response) => {
        setActors(response);
      });
  }
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
      {props.userLocation === 1 ? (
        <Container>
          <Row>
            <Form onSubmit={getSingleShow}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for a show"
                  aria-label="Search for a show"
                  aria-describedby="basic-addon2"
                  onChange={handleQueryChange}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  type="submit"
                >
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Row>
          <Row>
            <Col>
              {singleShow != undefined ? (
                <Card style={{ margin: "auto" }}>
                  <Card.Body>
                    <Card.Title>{singleShow?.name}</Card.Title>
                    <Card.Text>
                      {singleShow?.summary?.replace(htmlRemover, "")}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Genres: {singleShow?.genres.join(", ")}
                    </ListGroupItem>
                    <ListGroupItem>
                      Premiered: {singleShow?.premiered}
                    </ListGroupItem>
                    <ListGroupItem>
                      Ended Date/Status:{" "}
                      {singleShow?.ended ?? "Undetermined or still active"}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={singleShow?.url}>Show Page</Card.Link>
                    <Card.Link href={singleShow?._links.previousepisode?.href}>
                      Last Episode
                    </Card.Link>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src={singleShow?.image?.original}
                  />
                </Card>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Form onSubmit={getActors}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Search for an actor"
                  aria-label="Search for an actor"
                  aria-describedby="basic-addon2"
                  onChange={handleQueryChange}
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  type="submit"
                >
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Row>
          <Row xs={1} md={2} className="g-4">
            {actors != undefined
              ? actors.map((item, index) => (
                  <Col key={index}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{item?.person?.name}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>
                          Gender: {item?.person?.gender ?? "Not Available"}
                        </ListGroupItem>
                        <ListGroupItem>
                          Birthday: {item?.person?.birthday ?? "Not Available"}
                        </ListGroupItem>
                        <ListGroupItem>
                          Country:{" "}
                          {item?.person?.country?.name ?? "Not Available"}
                        </ListGroupItem>
                      </ListGroup>
                      <Card.Body>
                        <Card.Link href={item?.person?.url}>
                          Actor Page
                        </Card.Link>
                        <Card.Link href={item?.person?.image?.original}>
                          Actor Photo
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              : ""}
          </Row>
        </Container>
      )}
    </>
  );
}
