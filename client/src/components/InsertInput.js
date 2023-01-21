import React, { useState, Fragment } from "react";

function InsertInput({ field }) {
  const [name, setname] = useState("Book");
  const [author, setauthor] = useState("Author");
  const [edition, setedition] = useState("Edition");
  const [price, setprice] = useState("Price");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = {
        book: name,
        author: author,
        edition: edition,
        price: price,
      };

      const response = await fetch(`http://localhost:5000/books/${field}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Insert
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Insert Book
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={onSubmitForm}>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  value={author}
                  onChange={(e) => {
                    setauthor(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  value={edition}
                  onChange={(e) => {
                    setedition(e.target.value);
                  }}
                />
                <input
                  type="text"
                  className="form-control mt-2"
                  value={price}
                  onChange={(e) => {
                    setprice(e.target.value);
                  }}
                />
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                onClick={onSubmitForm}
              >
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default InsertInput;
