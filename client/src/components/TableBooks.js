import React from "react";
import { Fragment } from "react";

function TableBooks({ books, field, setbooks }) {
  const deleteBook = async (id) => {
    try {
      const deleteBook = await fetch(
        `http://localhost:5000/books/${field}/${id}`,
        {
          method: "DELETE",
        }
      );
      setbooks(
        books.filter((book) => {
          if (field == "mba") {
            return book.mba_id !== id;
          } else {
            return book.eng_id !== id;
          }
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Book</th>
              <th>Author</th>
              <th>Edition</th>
              <th>Price</th>
              {/* <th>Edit</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
              <td>12500</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr> */}

            {books.map((book) => {
              return (
                <tr key={book.mba_id || book.eng_id}>
                  <td>{book.book}</td>
                  <td>{book.author}</td>
                  <td>{book.book_ed}</td>
                  <td>{book.price}</td>
                  {/* <td>
                    <button className="btn btn-warning">Edit</button>
                  </td> */}
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        if (field == "mba") {
                          deleteBook(book.mba_id);
                        } else {
                          deleteBook(book.eng_id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TableBooks;
