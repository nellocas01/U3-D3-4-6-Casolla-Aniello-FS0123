import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = () => {
    console.log("didMount()");
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.bookId,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzdmODY4MzQzMTAwMTRkZWE3ODIiLCJpYXQiOjE2ODA1MjUzMDQsImV4cCI6MTY4MTczNDkwNH0.HzAy7RrBRx0vfzn3IzckxNLzd5unMPSiq6iSU4MUAII",
          },
        }
      );
      if (res.ok) {
        let posts = await res.json();
        this.setState({ comments: posts });
        console.log("setState() avvenuto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("didUpdate()");

  //     if (prevState.comments === null) {
  //       console.log("Nothing happens: state is null");
  //     }
  //     if (
  //       prevState.comments !== null &&
  //       prevState.comments.comment !== this.state.comments.comment
  //     ) {
  //       console.log("Update WITHOUT another fetch");
  //     }

  //     if (prevProps.commentsComment !== this.props.commentsComment) {
  //       this.fetchComments();
  //       console.log(
  //         "NEW PROP DETECTED: Update WITH NEW fetch on: " +
  //           this.props.commentsComment
  //       );
  //     }
  //   }

  render() {
    return (
      <>
        <ListGroup>
          {this.state.comments.map((commentObj, index) => (
            <ListGroup.Item key={index}>
              <span>{commentObj.comment}</span>
              <span>{commentObj.author}</span>
              <span>{commentObj.rate}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentArea;
