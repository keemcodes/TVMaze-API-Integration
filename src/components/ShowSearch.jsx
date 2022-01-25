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

export default function ShowSearch(props) {
  return (
    <Container>
      <Row>
        <Form onSubmit={props.getShows}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for shows"
              aria-label="Search for shows"
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
      <Row xs={1} md={1} className="g-4">
        {props.shows != undefined
          ? props.shows.map((item, index) => (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{item?.show?.name}</Card.Title>
                    <Card.Text>
                      {item?.show?.summary?.replace(props.htmlRemover, "") ??
                        "No Summary Available"}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Genres:{" "}
                      {item?.show?.genres === 0
                        ? "Not Available"
                        : item?.show?.genres.join(", ")}
                    </ListGroupItem>
                    <ListGroupItem>
                      Premiered: {item?.show?.premiered}
                    </ListGroupItem>
                    <ListGroupItem>
                      Ended Date/Status:{" "}
                      {item?.show?.ended ?? "Undetermined or still active"}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href={item?.show?.officialSite}>
                      Official Site
                    </Card.Link>
                    <Card.Link href={item?.show?.url}>Show Page</Card.Link>
                    <Card.Link href={item?.show?.image?.original}>
                      Show Photo
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          : ""}
      </Row>
    </Container>
  );
}
