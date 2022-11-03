const express = require("express")
const path = require("path");
const PORT = process.env.PORT || 3001;
const db = require("./db/db.json");
const htmlRoutes = require("./routes/htmlRoutes.js");
const notesRoutes = require("./routes/notes.js")
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', htmlRoutes);
app.use(express.static('public'));




app.get("/api/notes", (req, res) =>{






})

app.listen(PORT, ()=> console.log("listening on port http://localhost:"+PORT))