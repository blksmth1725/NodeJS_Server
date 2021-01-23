const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require("./config/keys");

const app = express();

//Body-Parser Middleware
app.use(
 bodyParser.urlencoded({
  extended: false,
 }),
);

app.use(bodyParser.json());

//Connect to MongoDB
mongoose
 .connect(db, { useNewUrlParser: true })
 .then(() => console.log("MongoDB successfully connected"))
 .catch((err) => console.log(err));

// app.get("/cs-dev-profile", (req, res) => {
//  console.log("GET request from homepage");
//  res.send("Hello GET");
// });

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port}`));

console.log("Example app listening at http://%s:%s", host, port);
