import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

function BookList(props) {
  const { books } = props;
  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
