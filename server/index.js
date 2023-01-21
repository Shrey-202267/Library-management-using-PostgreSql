const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { response } = require("express");

app.use(cors());
app.use(express.json());

//create book
app.post("/books/:field", async (req, res) => {
  try {
    const { book, author, price, edition } = req.body;
    const { field } = req.params;
    const newBook = await pool.query(
      `INSERT INTO ${field} (book,author,price,book_ed) VALUES('${book}','${author}','${price}','${edition}') RETURNING *`
    );
    res.json(newBook.rows[0]);
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }
});

//get all books
app.get("/books/:field", async (req, res) => {
  try {
    const { field } = req.params;
    const Books = await pool.query(`SELECT * FROM ${field}`);

    res.json(Books.rows);
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }
});
//update a book

// app.put("/books/:field/:id", async (req, res) => {
//   try {
//     const { field, idtype, id } = req.params;
//     const { book, author, price, edition } = req.body;

//     if (field == "mba") {
//       const updateBook = await pool.query(
//         `UPDATE ${field} SET book=${book} WHERE mba_id = ${id} `
//       );
//     } else {
//       const updateBook = await pool.query(
//         `UPDATE ${field} SET book=${book},author=${author},price=${price},book_ed=${edition} WHERE eng_id = ${id} `
//       );
//     }

//     res.json("updated");
//   } catch (error) {
//     console.error(error.message);
//   }
// });

//delete a book
app.delete("/books/:field/:id", async (req, res) => {
  try {
    const { field, id } = req.params;
    if (field == "mba") {
      const deleteBook = await pool.query(
        `DELETE FROM ${field} WHERE mba_id = ${id}`
      );
    } else {
      const deleteBook = await pool.query(
        `DELETE FROM ${field} WHERE eng_id = ${id}`
      );
    }
    res.json("deleted");
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server is started at port 5000");
});
