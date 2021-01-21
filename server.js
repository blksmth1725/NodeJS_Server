const express = require("express");

const app = express();

app.get("/", (req, res) => {
 console.log("GET request from homepage");
 res.send("Hello GET");
});

app.post("/", (req, res) => {
 console.log("POST request from homepage");
 res.send("Hello POST");
});

app.delete("/del_user", (req, res) => {
 console.log("DELETE request from /del_user");
 res.send("Hello DELETE");
});

app.get("/list_user", (req, res) => {
 console.log("GET request from /list_user");
 res.send("Page Listing");
});

app.get("/ab*cd", (req, res) => {
 console.log("GET request from /ab*cd");
 res.send("Page Pattern Match");
});

const server = app.listen(3000, () => {
 const host = server.address().address;
 const port = server.address().port;

 console.log("Example app listening at http://%s:%s", host, port);
});
