import React from "react";
import SingleBook from "./SingleBook";

function BookList(props) {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <SingleBook book={book} key={book.id} />
      ))}
    </div>
  );
}

export default BookList;
