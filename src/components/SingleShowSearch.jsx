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

export default function SingleShowSearch(props) {
  return (
    <Container>
      <Row>
        <Form onSubmit={props.getSingleShow}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for a show"
              aria-label="Search for a show"
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
      <Row>
        <Col>
          {props.singleShow && (
            <Card style={{ margin: "auto" }}>
              <Card.Body>
                <Card.Title>{props.singleShow?.name}</Card.Title>
                <Card.Text>
                  {props.singleShow?.summary?.replace(props.htmlRemover, "") ??
                    "No Summary Available"}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Genres: {props.singleShow?.genres.join(", ")}
                </ListGroupItem>
                <ListGroupItem>
                  Premiered: {props.singleShow?.premiered}
                </ListGroupItem>
                <ListGroupItem>
                  Ended Date/Status:{" "}
                  {props.singleShow?.ended ?? "Undetermined or still active"}
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href={props?.singleShow?.officialSite}>
                  Official Site
                </Card.Link>
                <Card.Link href={props.singleShow?.url}>Show Page</Card.Link>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src={props.singleShow?.image?.original}
              />
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}
