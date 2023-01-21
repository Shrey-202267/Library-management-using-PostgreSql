import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import TableBooks from "./TableBooks";
import InsertInput from "./InsertInput";

function InputButtons() {
  const [field, setfield] = useState("mba");
  const [books, setbooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch(`http://localhost:5000/books/${field}`);
      const jsonData = await response.json();
      setbooks(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, [field]);

  return (
    <Fragment>
      <h1 className="text-center mt-5">Library Management System</h1>
      <div className="container text-center mt-5">
        <button
          className="btn btn-primary mx-5"
          onClick={() => {
            setfield("engineering");
          }}
          style={{
            background: field === "engineering" && "#ffc107",
            border: "none",
            color: field === "engineering" && "#000",
          }}
        >
          Engineering Books
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            setfield("mba");
          }}
          style={{
            background: field === "mba" && "#ffc107",
            border: "none",
            color: field === "mba" && "#000",
          }}
        >
          MBA Books
        </button>
      </div>

      <TableBooks books={books} field={field} setbooks={setbooks} />
      <InsertInput field={field} />
    </Fragment>
  );
}

export default InputButtons;
