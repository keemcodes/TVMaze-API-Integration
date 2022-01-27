import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Form,
  FormControl,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

export default function ActorsSearch(props) {
  return (
    <Container>
      <Row>
        <Form onSubmit={props.getActors}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for an actor"
              aria-label="Search for an actor"
              aria-describedby="basic-addon2"
              onChange={props.handleQueryChange}
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
        {props.actors &&
          props.actors.map((item, index) => (
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
                    Country: {item?.person?.country?.name ?? "Not Available"}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={item?.person?.url}>Actor Page</Card.Link>
                  <Card.Link href={item?.person?.image?.original}>
                    Actor Photo
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
