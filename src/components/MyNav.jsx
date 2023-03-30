import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = props => (
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">
        {props.brand} — {props.claim}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav 