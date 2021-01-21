const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/index.html", (req, res) => {
 res.sendFile(__dirname + "/" + "index.html");
});

app.get("/proccess_get", (req, res) => {
 response = {
  first_name: req.query.first_name,
  last_name: req.query.last_name,
 };
 console.log(response);
 res.end(JSON.stringify(response));
});

const server = app.listen(3000, () => {
 const host = server.address().address;
 const port = server.address().port;

 console.log("Example app listening at http://%s:%s", host, port);
});
