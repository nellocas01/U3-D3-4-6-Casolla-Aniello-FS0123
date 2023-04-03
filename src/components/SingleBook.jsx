import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { book } = this.props;
    const cardStyle = {
      border: this.state.selected ? "2px solid red" : "none",
    };
    return (
      <>
        <Card
          style={cardStyle}
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
          {this.state.selected && (
            <Card.Footer>This book is selected.</Card.Footer>
          )}
        </Card>
        {this.state.selected && <CommentArea bookId={book.asin} />}
      </>
    );
  }
}

export default SingleBook;
