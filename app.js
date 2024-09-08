require('dotenv').config();
const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.static("public"));
const port = process.env.PORT || 3000


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  app.get("/catalog", (req, res) => {
    res.sendFile(__dirname + "/catalog.html");
  });


app.listen(port, function () {
  console.log(`Server started on the port ${port} !`);
});
