import { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import horror from "../data/horror.json";
// import romance from "../data/romance.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row md={4}>
          {horror.map((book, index) => (
            <Col key={index}>
              <Card className="d-flex">
                <Card.Body>
                  <Card.Img variant="bottom" src={book.img} alt="First slide" />

                  <h3>{book.title}</h3>
                  <p>
                    <Badge bg="dark">{book.price}€</Badge>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
          ;
        </Row>
        {/* <Row md={4}>
          <h3>Romace books: </h3>
          <br />
          {romance.map((book, index) => (
            <Col key={index}>
              <Card className="d-flex">
                <Card.Body>
                  <Card.Img variant="bottom" src={book.img} alt="First slide" />

                  <h3>{book.title}</h3>
                  <p>
                    <Badge bg="dark">{book.price}€</Badge>
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
          ;
        </Row> */}
      </Container>
    );
  }
}
export default AllTheBooks;
